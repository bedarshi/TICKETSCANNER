"use client";

import React, { createElement, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  description: string;
  icon?: LucideIcon | ReactNode;
}

export default function StatCard({
  title,
  value,
  description,
  icon,
}: StatCardProps) {
  const renderIcon = () => {
    if (!icon) return null;

    // If an already-created React element was passed
    if (React.isValidElement(icon)) {
      return icon;
    }

    // If a Lucide icon component was passed
    return createElement(icon as LucideIcon, {
      size: 24,
      strokeWidth: 1.8,
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-500/10">
      {/* Nebula glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-300 group-hover:bg-cyan-500/20" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-bold tracking-tight text-white">
            {value}
          </h3>

          <p className="mt-3 text-sm text-slate-500">
            {description}
          </p>
        </div>

        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/5">
            {renderIcon()}
          </div>
        )}
      </div>
    </div>
  );
}