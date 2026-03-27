'use client';

import { useState, useActionState } from 'react';
import { FeedbackEntry } from '@/components/feedbacklist';

interface FormProps {
  onAdd: (entry: FeedbackEntry) => void;
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="focus:outline-none transition-transform hover:scale-110"
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
        >
          <svg
            className={`w-6 h-6 transition-colors duration-100 ${
              star <= (hovered || value) ? 'text-amber-400' : 'text-slate-700 hover:text-slate-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

const inputClass =
  'w-full bg-slate-800/60 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/30 transition-all duration-200';

// ─── React Controlled Form ────────────────────────────────────────────────────

export function ReactFeedbackForm({ onAdd }: FormProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || rating === 0) {
      setError('Please fill in all fields and select a rating.');
      return;
    }
    setError('');
    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      message: message.trim(),
      rating,
      source: 'react',
      timestamp: new Date(),
    });
    setName('');
    setMessage('');
    setRating(0);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3 pb-1">
        <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
          </svg>
        </div>
        <div>
          <h2 className="text-base font-bold text-white">React Controlled Form</h2>
          <p className="text-xs text-slate-500">useState · onChange handlers · client-side</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
            Name
          </label>
          <input
            className={inputClass}
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
            Rating
          </label>
          <StarPicker value={rating} onChange={setRating} />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
            Message
          </label>
          <textarea
            className={`${inputClass} resize-none h-24`}
            placeholder="Share your thoughts…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {error && <p className="text-red-400 text-xs">{error}</p>}

        {submitted && (
          <p className="text-emerald-400 text-xs flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Feedback submitted!
          </p>
        )}

        <button
          type="submit"
          className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 active:bg-cyan-600 text-slate-950 text-sm font-bold transition-colors duration-150"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

// ─── Next.js Server Actions Form ──────────────────────────────────────────────

type ActionState = { error?: string; success?: boolean } | null;

async function submitAction(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  // Simulates a server action — in real usage this would be a 'use server' function
  await new Promise((r) => setTimeout(r, 600));
  const name = (formData.get('name') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();
  const rating = Number(formData.get('rating'));
  if (!name || !message || !rating) {
    return { error: 'Please fill in all fields and select a rating.' };
  }
  return { success: true };
}

export function NextFeedbackForm({ onAdd }: FormProps) {
  const [rating, setRating] = useState(0);
  const [state, formAction, isPending] = useActionState(submitAction, null);

  // Capture form data for the client-side onAdd callback after success
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (rating === 0) {
      e.preventDefault();
      return;
    }
    // We optimistically collect values before the action runs
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value.trim();

    if (!name || !message) return;

  
    pendingEntry.current = {
      id: crypto.randomUUID(),
      name,
      message,
      rating,
      source: 'nextjs',
      timestamp: new Date(),
    };
  };

  const pendingEntry = { current: null as FeedbackEntry | null };

  // When state transitions to success, call onAdd
  const prevSuccessRef = { current: false };
  if (state?.success && !prevSuccessRef.current && pendingEntry.current) {
    prevSuccessRef.current = true;
    onAdd(pendingEntry.current);
    pendingEntry.current = null;
    setRating(0);
  }

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-3 pb-1">
        <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
          <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h2 className="text-base font-bold text-white">Next.js Server Action</h2>
          <p className="text-xs text-slate-500">useActionState · formAction · server-side</p>
        </div>
      </div>

      <form action={formAction} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
            Name
          </label>
          <input
            name="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>

        {/* Hidden rating input so formData includes it */}
        <input type="hidden" name="rating" value={rating} />

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
            Rating
          </label>
          <StarPicker value={rating} onChange={setRating} />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wide">
            Message
          </label>
          <textarea
            name="message"
            className={`${inputClass} resize-none h-24`}
            placeholder="Share your thoughts…"
          />
        </div>

        {(state?.error || (rating === 0 && state !== null)) && (
          <p className="text-red-400 text-xs">
            {state?.error ?? 'Please select a rating.'}
          </p>
        )}

        {state?.success && (
          <p className="text-emerald-400 text-xs flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Feedback submitted!
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 text-sm font-bold transition-colors duration-150"
        >
          {isPending ? 'Submitting…' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
}
