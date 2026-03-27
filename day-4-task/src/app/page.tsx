'use client';

import { useState } from 'react';
import { ReactFeedbackForm, NextFeedbackForm } from '@/components/feedbackform';
import { FeedbackList, FeedbackEntry } from '@/components/feedbacklist';

export default function App() {
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);

  const handleAddFeedback = (newFeedback: FeedbackEntry) => {
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Day 4: Forms <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Comparison</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comparing the traditional React controlled components approach with the modern Next.js Server Actions & useActionState setup.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <ReactFeedbackForm onAdd={handleAddFeedback} />
          <NextFeedbackForm onAdd={handleAddFeedback} />
        </div>

        <div className="pt-8 border-t border-slate-800">
          <FeedbackList feedbacks={feedbacks} />
        </div>
      </div>
    </main>
  );
}
