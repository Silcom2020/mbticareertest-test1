import React from 'react';
import { RefreshCcw, Award } from 'lucide-react';

interface ResultProps {
  type: string;
  personality: {
    title: string;
    traits: string[];
    summary: string;
  };
  onReset: () => void;
}

export default function Result({ type, personality, onReset }: ResultProps) {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
          <Award className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-5xl font-bold gradient-text mb-4">{type}</h2>
        <h3 className="text-2xl font-semibold text-gray-800">
          {personality.title}
        </h3>
      </div>

      <div className="mb-10 bg-white/50 rounded-2xl p-6">
        <h4 className="text-lg font-semibold text-indigo-600 mb-4">特徴:</h4>
        <ul className="space-y-3">
          {personality.traits.map((trait, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 mt-2 mr-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
              <span className="text-gray-700">{trait}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-12 bg-white/50 rounded-2xl p-6">
        <h4 className="text-lg font-semibold text-indigo-600 mb-4">まとめ:</h4>
        <p className="text-gray-700 leading-relaxed">
          {personality.summary}
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={onReset}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          <RefreshCcw className="w-5 h-5" />
          もう一度診断する
        </button>
      </div>
    </div>
  );
}