'use client';

export interface FeedbackEntry {
  id: string;
  name: string;
  message: string;
  rating: number;
  source: 'react' | 'nextjs';
  timestamp: Date;
}

interface FeedbackListProps {
  feedbacks: FeedbackEntry[];
}

const sourceLabel = {
  react: { label: 'React', color: 'text-cyan-400', bg: 'bg-cyan-400/10 border-cyan-400/20' },
  nextjs: { label: 'Next.js', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border-emerald-400/20' },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= rating ? 'text-amber-400' : 'text-slate-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function FeedbackList({ feedbacks }: FeedbackListProps) {
  if (feedbacks.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center">
          <svg className="w-7 h-7 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <p className="text-slate-500 text-sm font-medium">No feedback yet</p>
        <p className="text-slate-600 text-xs mt-1">Submit a form above to see entries here</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">
          Submitted Feedback
          <span className="ml-2 text-sm font-normal text-slate-500">({feedbacks.length})</span>
        </h2>
        <div className="flex gap-3 text-xs text-slate-500">
          {(['react', 'nextjs'] as const).map((src) => {
            const count = feedbacks.filter((f) => f.source === src).length;
            const { label, color } = sourceLabel[src];
            return (
              <span key={src} className={`${color} font-medium`}>
                {label}: {count}
              </span>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {feedbacks.map((entry, i) => {
          const { label, color, bg } = sourceLabel[entry.source];
          return (
            <div
              key={entry.id}
              className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all duration-200 hover:bg-slate-900/80"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {/* Source badge */}
              <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold mb-3 ${bg} ${color}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {label}
              </div>

              {/* Rating */}
              <div className="mb-3">
                <StarRating rating={entry.rating} />
              </div>

              {/* Message */}
              <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                "{entry.message}"
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <span className="text-slate-400 text-xs font-semibold">{entry.name}</span>
                <span className="text-slate-600 text-xs">
                  {entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
