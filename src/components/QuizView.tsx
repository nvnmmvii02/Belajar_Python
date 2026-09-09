import { useState } from 'react';
import { Lesson } from '../data/lessons';

interface QuizViewProps {
  lesson: Lesson;
  onComplete: () => void;
}

export default function QuizView({ lesson, onComplete }: QuizViewProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = lesson.quiz;
  const question = questions[currentQuestion];

  const handleSelectAnswer = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    const isCorrect = selectedAnswer === question.correctIndex;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setAnsweredQuestions((prev) => [...prev, isCorrect]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
      onComplete();
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  const scorePercent = Math.round((score / questions.length) * 100);

  if (quizComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-8">
        <div className="glass-card-strong rounded-2xl p-6 md:p-8 text-center animate-fade-in-up animate-pulse-glow">
          {/* Score Circle */}
          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="rgba(34, 197, 94, 0.2)"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke={scorePercent >= 70 ? '#22c55e' : scorePercent >= 50 ? '#eab308' : '#ef4444'}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${scorePercent * 2.64} 264`}
                className="transition-all duration-1000 ease-out"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.8))'
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-green-400 neon-text-green">{scorePercent}%</span>
              <span className="text-xs text-white/80">{score}/{questions.length} benar</span>
            </div>
          </div>

          {/* Result Message */}
          <div className="mb-6">
            {scorePercent === 100 ? (
              <>
                <div className="text-5xl mb-3">🏆</div>
                <h2 className="text-2xl font-bold text-green-400 neon-text-green">Sempurna!</h2>
                <p className="text-white/90 mt-2">Kamu menguasai materi ini dengan sangat baik!</p>
              </>
            ) : scorePercent >= 70 ? (
              <>
                <div className="text-5xl mb-3">🌟</div>
                <h2 className="text-2xl font-bold text-green-400 neon-text-green">Bagus Sekali!</h2>
                <p className="text-white/90 mt-2">Pemahaman yang sangat baik! Terus tingkatkan!</p>
              </>
            ) : scorePercent >= 50 ? (
              <>
                <div className="text-5xl mb-3">👍</div>
                <h2 className="text-2xl font-bold text-yellow-400">Cukup Baik!</h2>
                <p className="text-white/90 mt-2">Review kembali materi yang belum paham ya!</p>
              </>
            ) : (
              <>
                <div className="text-5xl mb-3">💪</div>
                <h2 className="text-2xl font-bold text-red-400">Jangan Menyerah!</h2>
                <p className="text-white/90 mt-2">Baca ulang materinya dan coba lagi. Kamu pasti bisa!</p>
              </>
            )}
          </div>

          {/* Answer Summary */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {answeredQuestions.map((correct, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                  correct
                    ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.6)]'
                    : 'bg-gradient-to-br from-red-400 to-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                }`}
              >
                {correct ? '✓' : '✗'}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl neon-button font-medium"
            >
              <span className="text-white">🔄 Ulangi Kuis</span>
            </button>
            <button
              onClick={() => {
                const nextLesson = lesson.id + 1;
                if (nextLesson <= 12) {
                  window.location.reload();
                }
              }}
              className="px-5 py-2.5 rounded-xl neon-button-solid font-medium"
            >
              <span className="text-white">Lanjut Materi →</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 py-6 space-y-6">
      {/* Header */}
      <div className="animate-fade-in-up">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold text-green-400 flex items-center gap-2 neon-text-green">
            <span className="text-2xl">✅</span>
            Kuis: {lesson.title}
          </h2>
          <span className="text-sm font-medium text-white bg-green-500/20 border border-green-500/40 px-3 py-1 rounded-lg">
            {currentQuestion + 1}/{questions.length}
          </span>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                i < currentQuestion
                  ? answeredQuestions[i]
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                    : 'bg-gradient-to-r from-red-400 to-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]'
                  : i === currentQuestion
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]'
                  : 'bg-black/50 border border-green-500/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-card rounded-2xl p-5 md:p-6 animate-fade-in-up">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-sm font-bold text-white flex-shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.6)]">
            {currentQuestion + 1}
          </div>
          <p className="text-white font-medium text-[15px] leading-relaxed whitespace-pre-line">
            {question.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {question.options.map((option, index) => {
            let optionStyle = 'glass-card hover:border-green-400/60';
            
            if (showExplanation) {
              if (index === question.correctIndex) {
                optionStyle = 'border-green-400 bg-green-500/20 ring-2 ring-green-400/60 shadow-[0_0_15px_rgba(34,197,94,0.4)]';
              } else if (index === selectedAnswer && index !== question.correctIndex) {
                optionStyle = 'border-red-400 bg-red-500/20 ring-2 ring-red-400/60 shadow-[0_0_15px_rgba(239,68,68,0.4)]';
              } else {
                optionStyle = 'glass-card opacity-60';
              }
            } else if (selectedAnswer === index) {
              optionStyle = 'border-green-400 bg-green-500/20 ring-2 ring-green-400/60 shadow-[0_0_15px_rgba(34,197,94,0.4)]';
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={showExplanation}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all duration-200 ${optionStyle}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-200 ${
                    showExplanation && index === question.correctIndex
                      ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.6)]'
                      : showExplanation && index === selectedAnswer && index !== question.correctIndex
                      ? 'bg-gradient-to-br from-red-400 to-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                      : selectedAnswer === index
                      ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-[0_0_10px_rgba(34,197,94,0.6)]'
                      : 'glass-card text-green-400'
                  }`}
                >
                  {showExplanation && index === question.correctIndex ? (
                    '✓'
                  ) : showExplanation && index === selectedAnswer && index !== question.correctIndex ? (
                    '✗'
                  ) : (
                    String.fromCharCode(65 + index)
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  showExplanation && index === question.correctIndex
                    ? 'text-green-300'
                    : showExplanation && index === selectedAnswer && index !== question.correctIndex
                    ? 'text-red-300'
                    : 'text-white'
                }`}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`mt-4 p-4 rounded-xl animate-fade-in-up glass-card ${
            selectedAnswer === question.correctIndex
              ? 'border-green-400/60'
              : 'border-yellow-400/60'
          }`}>
            <div className="flex items-start gap-2">
              <span className="text-lg">
                {selectedAnswer === question.correctIndex ? '🎉' : '💡'}
              </span>
              <div>
                <p className={`font-semibold text-sm ${
                  selectedAnswer === question.correctIndex ? 'text-green-400 neon-text-green' : 'text-yellow-400'
                }`}>
                  {selectedAnswer === question.correctIndex ? 'Benar! Hebat!' : 'Kurang tepat.'}
                </p>
                <p className="text-sm mt-1 text-white/90">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        {!showExplanation ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="px-8 py-3 rounded-xl neon-button-solid font-bold disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <span className="text-white">Cek Jawaban</span>
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-xl neon-button-solid font-bold flex items-center gap-2"
          >
            <span className="text-white">
              {currentQuestion < questions.length - 1 ? (
                <>Soal Berikutnya →</>
              ) : (
                <>Lihat Hasil 🏆</>
              )}
            </span>
          </button>
        )}
      </div>

      {/* Score indicator */}
      <div className="text-center">
        <p className="text-sm text-white/80">
          Skor sementara: <span className="font-bold text-green-400 neon-text-green">{score}</span>/{answeredQuestions.length} benar
        </p>
      </div>
    </div>
  );
}
