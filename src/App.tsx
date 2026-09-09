import { useState, useEffect } from 'react';
import { lessons, Lesson } from './data/lessons';
import Sidebar from './components/Sidebar';
import LessonContent from './components/LessonContent';
import FlashcardView from './components/FlashcardView';
import QuizView from './components/QuizView';

type ViewMode = 'content' | 'flashcards' | 'quiz';

function App() {
  const [currentLessonId, setCurrentLessonId] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>('content');
  const [completedLessons, setCompletedLessons] = useState<number[]>(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentLesson = lessons.find(l => l.id === currentLessonId) || lessons[0];

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const markComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons(prev => [...prev, lessonId]);
    }
  };

  const handleLessonSelect = (id: number) => {
    setCurrentLessonId(id);
    setViewMode('content');
    setSidebarOpen(false);
  };

  const handleQuizComplete = () => {
    markComplete(currentLessonId);
  };

  const progress = Math.round((completedLessons.length / lessons.length) * 100);

  return (
    <div className="flex h-screen overflow-hidden bg-green-50/50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        lessons={lessons}
        currentLessonId={currentLessonId}
        completedLessons={completedLessons}
        onSelectLesson={handleLessonSelect}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        progress={progress}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-4 md:px-6 py-3 bg-white/80 backdrop-blur-sm border-b border-green-100 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-green-100 transition-colors"
            >
              <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentLesson.icon}</span>
              <h1 className="text-lg md:text-xl font-bold text-gray-800 truncate">
                {currentLesson.title}
              </h1>
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="flex items-center gap-1 bg-green-100/50 rounded-xl p-1">
            <button
              onClick={() => setViewMode('content')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                viewMode === 'content'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-green-200/50'
              }`}
            >
              📖 Materi
            </button>
            <button
              onClick={() => setViewMode('flashcards')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                viewMode === 'flashcards'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-green-200/50'
              }`}
            >
              🃏 Flashcard
            </button>
            <button
              onClick={() => setViewMode('quiz')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                viewMode === 'quiz'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-green-200/50'
              }`}
            >
              ✅ Kuis
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {viewMode === 'content' && (
            <LessonContent lesson={currentLesson} />
          )}
          {viewMode === 'flashcards' && (
            <FlashcardView lesson={currentLesson} />
          )}
          {viewMode === 'quiz' && (
            <QuizView
              lesson={currentLesson}
              onComplete={handleQuizComplete}
            />
          )}
        </div>

        {/* Bottom Navigation */}
        <nav className="flex items-center justify-between px-4 md:px-6 py-3 bg-white/80 backdrop-blur-sm border-t border-green-100">
          <button
            onClick={() => {
              const prevId = currentLessonId - 1;
              if (prevId >= 1) handleLessonSelect(prevId);
            }}
            disabled={currentLessonId <= 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-100 text-gray-700 font-medium hover:bg-green-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-32 h-2 bg-green-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm text-gray-600 font-medium">{progress}%</span>
          </div>

          <button
            onClick={() => {
              const nextId = currentLessonId + 1;
              if (nextId <= lessons.length) handleLessonSelect(nextId);
            }}
            disabled={currentLessonId >= lessons.length}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
          >
            <span className="hidden sm:inline">Selanjutnya</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </nav>
      </main>
    </div>
  );
}

export default App;
