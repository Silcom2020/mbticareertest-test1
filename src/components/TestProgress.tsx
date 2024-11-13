import React from 'react';

interface TestProgressProps {
  current: number;
  total: number;
}

export default function TestProgress({ current, total }: TestProgressProps) {
  const progress = (current / total) * 100;

  return (
    <div className="mb-12">
      <div className="flex justify-between text-sm font-medium mb-3">
        <span className="text-indigo-600">質問 {current} / {total}</span>
        <span className="text-gray-500">{Math.round(progress)}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}