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
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-green-100 text-center animate-fade-in-up">
          {/* Score Circle */}
          <div className="relative w-40 h-40 mx-auto mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#dcfce7"
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
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-800">{scorePercent}%</span>
              <span className="text-xs text-gray-600">{score}/{questions.length} benar</span>
            </div>
          </div>

          {/* Result Message */}
          <div className="mb-6">
            {scorePercent === 100 ? (
              <>
                <div className="text-5xl mb-3">🏆</div>
                <h2 className="text-2xl font-bold text-gray-800">Sempurna!</h2>
                <p className="text-gray-600 mt-2">Kamu menguasai materi ini dengan sangat baik!</p>
              </>
            ) : scorePercent >= 70 ? (
              <>
                <div className="text-5xl mb-3">🌟</div>
                <h2 className="text-2xl font-bold text-gray-800">Bagus Sekali!</h2>
                <p className="text-gray-600 mt-2">Pemahaman yang sangat baik! Terus tingkatkan!</p>
              </>
            ) : scorePercent >= 50 ? (
              <>
                <div className="text-5xl mb-3">👍</div>
                <h2 className="text-2xl font-bold text-gray-800">Cukup Baik!</h2>
                <p className="text-gray-600 mt-2">Review kembali materi yang belum paham ya!</p>
              </>
            ) : (
              <>
                <div className="text-5xl mb-3">💪</div>
                <h2 className="text-2xl font-bold text-gray-800">Jangan Menyerah!</h2>
                <p className="text-gray-600 mt-2">Baca ulang materinya dan coba lagi. Kamu pasti bisa!</p>
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
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-600'
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
              className="px-5 py-2.5 rounded-xl bg-green-100 text-green-700 font-medium hover:bg-green-200 transition-all duration-200"
            >
              🔄 Ulangi Kuis
            </button>
            <button
              onClick={() => {
                const nextLesson = lesson.id + 1;
                if (nextLesson <= 12) {
                  window.location.reload();
                }
              }}
              className="px-5 py-2.5 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition-all duration-200 shadow-md"
            >
              Lanjut Materi →
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
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            Kuis: {lesson.title}
          </h2>
          <span className="text-sm font-medium text-gray-700 bg-green-100 px-3 py-1 rounded-lg">
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
                    ? 'bg-green-500'
                    : 'bg-red-400'
                  : i === currentQuestion
                  ? 'bg-green-600'
                  : 'bg-green-100'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-green-100 animate-fade-in-up">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-sm font-bold text-gray-700 flex-shrink-0">
            {currentQuestion + 1}
          </div>
          <p className="text-gray-900 font-medium text-[15px] leading-relaxed whitespace-pre-line">
            {question.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {question.options.map((option, index) => {
            let optionStyle = 'border-green-100 hover:border-green-300 hover:bg-green-50';
            
            if (showExplanation) {
              if (index === question.correctIndex) {
                optionStyle = 'border-green-500 bg-green-50 ring-2 ring-green-200';
              } else if (index === selectedAnswer && index !== question.correctIndex) {
                optionStyle = 'border-red-400 bg-red-50 ring-2 ring-red-200';
              } else {
                optionStyle = 'border-gray-100 opacity-60';
              }
            } else if (selectedAnswer === index) {
              optionStyle = 'border-green-500 bg-green-50 ring-2 ring-green-200';
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
                      ? 'bg-green-500 text-white'
                      : showExplanation && index === selectedAnswer && index !== question.correctIndex
                      ? 'bg-red-400 text-white'
                      : selectedAnswer === index
                      ? 'bg-green-500 text-white'
                      : 'bg-green-100 text-green-700'
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
                    ? 'text-gray-800'
                    : showExplanation && index === selectedAnswer && index !== question.correctIndex
                    ? 'text-red-700'
                    : 'text-gray-900'
                }`}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`mt-4 p-4 rounded-xl animate-fade-in-up ${
            selectedAnswer === question.correctIndex
              ? 'bg-green-50 border border-green-200'
              : 'bg-amber-50 border border-amber-200'
          }`}>
            <div className="flex items-start gap-2">
              <span className="text-lg">
                {selectedAnswer === question.correctIndex ? '🎉' : '💡'}
              </span>
              <div>
                <p className={`font-semibold text-sm ${
                  selectedAnswer === question.correctIndex ? 'text-green-800' : 'text-amber-800'
                }`}>
                  {selectedAnswer === question.correctIndex ? 'Benar! Hebat!' : 'Kurang tepat.'}
                </p>
                <p className={`text-sm mt-1 ${
                  selectedAnswer === question.correctIndex ? 'text-green-700' : 'text-amber-700'
                }`}>
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
            className="px-8 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Cek Jawaban
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            {currentQuestion < questions.length - 1 ? (
              <>
                Soal Berikutnya
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </>
            ) : (
              <>
                Lihat Hasil 🏆
              </>
            )}
          </button>
        )}
      </div>

      {/* Score indicator */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Skor sementara: <span className="font-bold text-gray-800">{score}</span>/{answeredQuestions.length} benar
        </p>
      </div>
    </div>
  );
}
