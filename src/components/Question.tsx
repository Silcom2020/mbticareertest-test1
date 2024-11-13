import React from 'react';

interface QuestionProps {
  question: {
    text: string;
    options: string[];
  };
  onAnswer: (answer: number) => void;
}

export default function Question({ question, onAnswer }: QuestionProps) {
  return (
    <div className="animate-fadeIn">
      <h3 className="text-2xl font-semibold text-gray-800 mb-8 leading-relaxed">
        {question.text}
      </h3>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="option-button"
          >
            <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 font-medium mr-4 text-center leading-8">
              {index + 1}
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}