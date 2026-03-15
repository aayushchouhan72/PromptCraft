import React from "react";
import { useNavigate } from "react-router-dom";
import { TOPICS } from "../data/topics";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="border-t border-white/5 bg-surface/40 mt-8">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-amber-400 flex items-center justify-center text-ink font-black text-xs">
                PC
              </div>
              <span className="font-black text-paper">PromptCraft</span>
            </div>
            <p className="text-xs text-paper/35 leading-relaxed">
              The free Prompt Engineering learning platform. Master AI
              communication from fundamentals to advanced research-grade
              techniques.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-paper/25 uppercase tracking-wider mb-3">
              Quick Links
            </p>
            <div className="space-y-1.5">
              {TOPICS.slice(0, 4).map((t) => (
                <button
                  key={t.id}
                  onClick={() => navigate(t.path)}
                  className="block text-xs text-paper/45 hover:text-amber-400 transition-colors"
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-paper/25 uppercase tracking-wider mb-3">
              Advanced Topics
            </p>
            <div className="space-y-1.5">
              {TOPICS.slice(4).map((t) => (
                <button
                  key={t.id}
                  onClick={() => navigate(t.path)}
                  className="block text-xs text-paper/45 hover:text-amber-400 transition-colors"
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-paper/25 font-mono">
            © 2025 PromptCraft·Prompt Engineering Learning Platform By Aayush
            Chouhan
          </p>
          <p className="text-[11px] text-paper/20 font-mono">
            Contact aayushchouhan@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
