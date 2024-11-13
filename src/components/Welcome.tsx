import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Sparkles className="w-8 h-8 text-indigo-600" />
        <h2 className="text-4xl font-bold gradient-text">
          パーソナリティ診断
        </h2>
      </div>
      <p className="text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
        20の質問であなたの性格タイプを診断します。
        直感的に最も自分らしい回答を選んでください。
        所要時間は約5-10分です。
      </p>
      <button
        onClick={onStart}
        className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
      >
        テストを始める
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}