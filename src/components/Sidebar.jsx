import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TOPICS } from "../data/topics";
import useFeatureStore from "../store/useFeatureStore";

export default function Sidebar({ visited, sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const progress = Math.round((visited.size / TOPICS.length) * 100);
  const selectedTopic = useFeatureStore((state) => state.selectedTopic);

  const handleNav = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-surface border-r border-white/5 z-40
          flex flex-col transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
        `}
      >
        {/* Brand */}
        <div className="p-5 border-b border-white/5">
          <button
            onClick={() => handleNav("/")}
            className="flex items-center gap-3 mb-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-ink font-black text-sm flex-shrink-0">
              PC
            </div>
            <div className="text-left">
              <div className="font-black text-paper text-base leading-tight group-hover:text-amber-400 transition-colors">
                PromptCraft
              </div>
              <div className="text-[10px] text-paper/30 font-mono">
                Engineering Platform
              </div>
            </div>
          </button>

          {/* Progress */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[11px] text-paper/40">
                Learning Progress
              </span>
              <span className="text-[11px] text-amber-400 font-mono font-medium">
                {progress}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="progress-gradient h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-3">
          {/* Home */}
          <button
            onClick={() => handleNav("/")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm mb-1 transition-all text-left
              ${
                location.pathname === "/"
                  ? "sidebar-item-active font-semibold"
                  : "text-paper/50 hover:text-paper hover:bg-white/5"
              }`}
          >
            <span>🏠</span>
            <span>Home</span>
          </button>

          <p className="text-[9px] uppercase tracking-widest text-paper/20 font-mono px-3 mb-2 mt-3">
            Curriculum
          </p>

          {TOPICS.map((t) => {
            const isActive = location.pathname === t.path;
            return (
              <button
                key={t.id}
                onClick={() => {
                  handleNav(t.path);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm mb-0.5 transition-all text-left
                  ${
                    isActive
                      ? "sidebar-item-active font-semibold"
                      : "text-paper/50 hover:text-paper hover:bg-white/5"
                  }`}
              >
                <span className="text-base flex-shrink-0">{t.icon}</span>
                <span className="flex-1 min-w-0 truncate">{t.label}</span>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <span className="text-[10px] font-mono text-paper/20">
                    {t.num}
                  </span>
                  {visited.has(t.id) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 block" />
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <p className="text-[10px] text-paper/20 font-mono">
            v2.0 · PromptCraft 2025 · Free Forever
          </p>
        </div>
      </aside>
    </>
  );
}
