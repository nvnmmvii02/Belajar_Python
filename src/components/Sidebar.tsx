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
      className={`fixed lg:relative z-40 h-full w-72 flex flex-col bg-gradient-to-b from-green-800 via-green-900 to-emerald-900 text-white transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-green-700/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-xl shadow-lg">
            🐍
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">PyLearn</h1>
            <p className="text-xs text-green-300">Python dari Nol</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg hover:bg-green-700/50 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Progress */}
      <div className="px-5 py-3 border-b border-green-700/50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-green-300">Progress Belajar</span>
          <span className="text-xs font-bold text-green-300">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-green-950 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-green-400 mt-1.5">
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
                    ? 'bg-green-600/30 border border-green-500/30 shadow-lg'
                    : 'hover:bg-green-700/30'
                }`}
              >
                {/* Number/Status */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-200 ${
                    isCompleted
                      ? 'bg-emerald-500 text-white'
                      : isCurrent
                      ? 'bg-green-500 text-white'
                      : 'bg-green-800/50 text-green-400 group-hover:bg-green-700/50'
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
                        isCurrent ? 'text-white' : 'text-green-100'
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
      <div className="px-5 py-3 border-t border-green-700/50">
        <div className="flex items-center gap-2 text-xs text-green-400">
          <span>💚</span>
          <span>Terus belajar, kamu pasti bisa!</span>
        </div>
      </div>
    </aside>
  );
}
