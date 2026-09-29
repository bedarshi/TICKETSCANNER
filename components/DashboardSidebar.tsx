"use client";

import {
  BarChart3,
  LayoutDashboard,
  Settings,
  Ticket,
  Users,
} from "lucide-react";

export default function DashboardSidebar() {
  return (
    <aside className="hidden min-h-[calc(100vh-4rem)] w-64 border-r border-slate-800/60 bg-slate-950/45 p-4 lg:block">
      
      <nav className="space-y-2">

        <SidebarItem
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          active
        />

        <SidebarItem
          icon={<Ticket size={18} />}
          label="Tickets"
        />

        <SidebarItem
          icon={<Users size={18} />}
          label="Customers"
        />

        <SidebarItem
          icon={<BarChart3 size={18} />}
          label="Analytics"
        />

        <div className="my-5 border-t border-slate-800/60" />

        <SidebarItem
          icon={<Settings size={18} />}
          label="Settings"
        />

      </nav>

      {/* Bottom information */}
      <div className="mt-10 rounded-xl border border-sky-400/10 bg-sky-400/5 p-4">
        <p className="text-xs font-medium text-sky-400">
          SYSTEM STATUS
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

          <span className="text-xs text-slate-400">
            All systems operational
          </span>
        </div>
      </div>
    </aside>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({
  icon,
  label,
  active = false,
}: SidebarItemProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
        active
          ? "border border-sky-400/20 bg-sky-400/10 text-sky-300"
          : "text-slate-400 hover:bg-slate-800/70 hover:text-slate-200"
      }`}
    >
      {icon}

      <span>{label}</span>
    </button>
  );
}