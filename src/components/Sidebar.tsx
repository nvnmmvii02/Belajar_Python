import { Lesson } from '../data/lessons';

interface SidebarProps {
  lessons: Lesson[];
  currentLessonId: number;
  completedLessons: number[];
  onSelectLesson: (id: number) => void;
  isOpen: boolean;
  onClose: () => void;
  progress: number;
}

export default function Sidebar({
  lessons,
  currentLessonId,
  completedLessons,
  onSelectLesson,
  isOpen,
  onClose,
  progress,
}: SidebarProps) {
  return (
    <aside
      className={`fixed lg:relative z-40 h-full w-72 flex flex-col glass-card-strong transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-green-500/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(34,197,94,0.6)]">
            🐍
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight text-white neon-text">PyLearn</h1>
            <p className="text-xs text-green-400">Python Matrix Edition</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg hover:bg-green-500/20 transition-colors"
        >
          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Progress */}
      <div className="px-5 py-3 border-b border-green-500/30">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-green-400">Progress Belajar</span>
          <span className="text-xs font-bold text-green-300 neon-text-green">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden border border-green-500/30">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(34,197,94,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-green-400/80 mt-1.5">
          {completedLessons.length}/{lessons.length} materi selesai
        </p>
      </div>

      {/* Lesson List */}
      <nav className="flex-1 overflow-y-auto py-2 px-3">
        <div className="space-y-1">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isCurrent = lesson.id === currentLessonId;

            return (
              <button
                key={lesson.id}
                onClick={() => onSelectLesson(lesson.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group ${
                  isCurrent
                    ? 'neon-button shadow-lg'
                    : 'hover:bg-green-500/10'
                }`}
              >
                {/* Number/Status */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-200 ${
                    isCompleted
                      ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.6)]'
                      : isCurrent
                      ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_0_10px_rgba(34,197,94,0.6)]'
                      : 'bg-black/50 text-green-400 border border-green-500/30 group-hover:border-green-400/60'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>

                {/* Lesson Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">{lesson.icon}</span>
                    <span
                      className={`text-sm font-medium truncate ${
                        isCurrent ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`}
                    >
                      {lesson.title}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-green-500/30">
        <div className="flex items-center gap-2 text-xs text-green-400">
          <span className="animate-text-glow">💚</span>
          <span className="text-white/80">Wake up, Neo... Learn Python.</span>
        </div>
      </div>
    </aside>
  );
}
