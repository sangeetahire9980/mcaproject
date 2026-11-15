import React, { useEffect } from 'react';
import { CheckCircle2, Bookmark, X } from 'lucide-react';

export default function NotificationToast({ notification, onDismiss }) {
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 4000);
    return () => clearTimeout(timer);
  }, [notification, onDismiss]);

  if (!notification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-slate-900 text-white px-4 py-3.5 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-3 max-w-md">
        <div className="w-9 h-9 rounded-xl bg-purple-600/30 text-purple-400 flex items-center justify-center shrink-0">
          {notification.type === 'bookmark' ? (
            <Bookmark className="w-5 h-5 fill-purple-400" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          )}
        </div>

        <div className="flex-1 pr-2">
          <p className="text-xs font-bold text-white leading-tight">
            {notification.title}
          </p>
          <p className="text-[11px] text-slate-300 mt-0.5">
            {notification.message}
          </p>
        </div>

        <button
          type="button"
          onClick={onDismiss}
          className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
