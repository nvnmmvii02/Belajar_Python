import { useState } from 'react';
import { Lesson } from '../data/lessons';

interface LessonContentProps {
  lesson: Lesson;
}

function CodeBlock({ title, code, explanation }: { title: string; code: string; explanation: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-green-200 shadow-sm animate-fade-in-up">
      <div className="flex items-center justify-between px-4 py-2.5 bg-green-600 text-white">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
          </div>
          <span className="text-sm font-medium ml-2">{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-600/50 hover:bg-green-600 text-xs font-medium transition-colors"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Tersalin!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Salin
            </>
          )}
        </button>
      </div>
      <pre className="px-4 py-4 bg-gray-50 text-gray-900 text-sm overflow-x-auto leading-relaxed border-t border-gray-200">
        <code>{code}</code>
      </pre>
      <div className="px-4 py-3 bg-green-50 border-t border-green-100">
        <p className="text-sm text-gray-800">
          <span className="font-semibold text-gray-900">💡 Penjelasan:</span> {explanation}
        </p>
      </div>
    </div>
  );
}

function ContentBlock({ text }: { text: string }) {
  // Simple markdown-like rendering
  const lines = text.split('\n');
  
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        // Bold headers
        if (line.startsWith('**') && line.endsWith('**')) {
          return (
            <h3 key={i} className="text-lg font-bold text-gray-900 mt-4">
              {line.replace(/\*\*/g, '')}
            </h3>
          );
        }
        // Bold inline
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-gray-800 leading-relaxed text-[15px]">
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={j} className="font-semibold text-gray-900">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return <span key={j}>{part}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}

export default function LessonContent({ lesson }: LessonContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 space-y-6">
      {/* Summary Card */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-lg animate-fade-in-up">
        <div className="flex items-start gap-3">
          <span className="text-3xl">{lesson.icon}</span>
          <div>
            <h2 className="font-bold text-lg mb-1">Ringkasan Materi</h2>
            <p className="text-green-50 leading-relaxed text-sm">{lesson.summary}</p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {lesson.content.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-green-100 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ContentBlock text={section} />
          </div>
        ))}
      </div>

      {/* Code Examples */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-lg">💻</span>
          Contoh Kode
        </h2>
        {lesson.codeExamples.map((example, index) => (
          <CodeBlock
            key={index}
            title={example.title}
            code={example.code}
            explanation={example.explanation}
          />
        ))}
      </div>

      {/* Quick Summary */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-5 border border-emerald-200 animate-fade-in-up">
        <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
          <span>📌</span> Poin Penting
        </h3>
        <ul className="space-y-1.5">
          {lesson.flashcards.slice(0, 3).map((fc, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-emerald-500 mt-0.5">•</span>
              <span><strong className="text-gray-900">{fc.question}</strong> → {fc.answer}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-2">
          <p className="text-xs text-gray-600 italic">
            💡 Lanjut ke Flashcard untuk review, atau Kuis untuk menguji pemahamanmu!
          </p>
        </div>
      </div>
    </div>
  );
}
