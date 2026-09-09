import { useState } from 'react';
import { Lesson } from '../data/lessons';

interface FlashcardViewProps {
  lesson: Lesson;
}

export default function FlashcardView({ lesson }: FlashcardViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());

  const flashcards = lesson.flashcards;
  const currentCard = flashcards[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    }, 150);
  };

  const handleKnown = () => {
    setKnownCards((prev) => {
      const next = new Set(prev);
      if (next.has(currentIndex)) {
        next.delete(currentIndex);
      } else {
        next.add(currentIndex);
      }
      return next;
    });
    handleNext();
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setCurrentIndex(Math.floor(Math.random() * flashcards.length));
  };

  const progressPercent = Math.round((knownCards.size / flashcards.length) * 100);

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="text-center animate-fade-in-up">
        <h2 className="text-xl font-bold text-green-800 flex items-center justify-center gap-2">
          <span className="text-2xl">🃏</span>
          Flashcard: {lesson.title}
        </h2>
        <p className="text-sm text-green-600 mt-1">
          Klik kartu untuk melihat jawaban • Tandai yang sudah paham
        </p>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-xl p-3 border border-green-100 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-green-700">
            Dikuasai: {knownCards.size}/{flashcards.length}
          </span>
          <span className="text-xs font-bold text-green-600">{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="perspective-1000">
        <div
          onClick={handleFlip}
          className="relative w-full min-h-[280px] cursor-pointer"
          style={{ perspective: '1000px' }}
        >
          <div
            className={`w-full min-h-[280px] relative transition-transform duration-500 ease-in-out`}
            style={{
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-xl"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-lg text-xs font-medium">
                {currentIndex + 1} / {flashcards.length}
              </div>
              <div className="text-4xl mb-4">❓</div>
              <p className="text-center text-lg font-medium leading-relaxed">
                {currentCard.question}
              </p>
              <p className="text-green-200 text-xs mt-4 animate-pulse-soft">
                👆 Tap untuk melihat jawaban
              </p>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 flex flex-col items-center justify-center text-white shadow-xl"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            >
              <div className="absolute top-3 right-3 px-2 py-1 bg-white/20 rounded-lg text-xs font-medium">
                Jawaban
              </div>
              <div className="text-4xl mb-4">💡</div>
              <p className="text-center text-lg font-medium leading-relaxed">
                {currentCard.answer}
              </p>
              <p className="text-emerald-200 text-xs mt-4 animate-pulse-soft">
                👆 Tap untuk kembali ke pertanyaan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-green-100 text-green-700 font-medium hover:bg-green-200 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Prev
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShuffle}
            className="px-3 py-2.5 rounded-xl bg-green-100 text-green-700 hover:bg-green-200 transition-all duration-200"
            title="Acak"
          >
            🔀
          </button>
          <button
            onClick={handleKnown}
            className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
              knownCards.has(currentIndex)
                ? 'bg-emerald-500 text-white shadow-md'
                : 'bg-green-600 text-white hover:bg-green-700 shadow-md'
            }`}
          >
            {knownCards.has(currentIndex) ? '✅ Sudah Paham!' : '👍 Sudah Paham'}
          </button>
        </div>

        <button
          onClick={handleNext}
          className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-green-100 text-green-700 font-medium hover:bg-green-200 transition-all duration-200"
        >
          Next
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Card Indicators */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        {flashcards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsFlipped(false);
              setTimeout(() => setCurrentIndex(i), 150);
            }}
            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all duration-200 ${
              i === currentIndex
                ? 'bg-green-600 text-white scale-110 shadow-md'
                : knownCards.has(i)
                ? 'bg-emerald-400 text-white'
                : 'bg-green-100 text-green-600 hover:bg-green-200'
            }`}
          >
            {knownCards.has(i) ? '✓' : i + 1}
          </button>
        ))}
      </div>

      {/* Completion Message */}
      {progressPercent === 100 && (
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-200 text-center animate-fade-in-up">
          <div className="text-4xl mb-2">🎉</div>
          <h3 className="font-bold text-emerald-800 text-lg">Luar Biasa!</h3>
          <p className="text-emerald-600 text-sm mt-1">
            Kamu sudah menguasai semua flashcard di materi ini! Lanjut ke Kuis untuk menguji pemahaman.
          </p>
        </div>
      )}
    </div>
  );
}
