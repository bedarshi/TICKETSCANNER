"use client";

import {
  Bell,
  Search,
  UserCircle,
} from "lucide-react";

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/75 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-400/10 text-sky-400">
            ✦
          </div>

          <div>
            <h1 className="font-semibold text-white">
              Support Nexus
            </h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              Support Management
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden max-w-md flex-1 px-8 md:block">
          <div className="relative">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search tickets..."
              className="nebula-input pl-10"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-sky-400"
          >
            <Bell size={20} />
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-lg p-1.5 transition hover:bg-slate-800"
          >
            <UserCircle
              size={28}
              className="text-slate-400"
            />

            <span className="hidden text-sm text-slate-300 md:block">
              Admin
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}