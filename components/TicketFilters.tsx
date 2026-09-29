"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { setStatusFilter } from "@/store/ticketsSlice";

export default function TicketFilters() {
  const dispatch = useDispatch<AppDispatch>();

  const statusFilter = useSelector(
    (state: RootState) => state.tickets.statusFilter
  );

  const filters = ["All", "Open", "In Progress", "Resolved", "Closed"] as const;

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const active = statusFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => dispatch(setStatusFilter(filter))}
            className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition-all ${
              active
                ? "border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-500/10"
                : "border-slate-700 bg-slate-900/60 text-slate-400 hover:border-slate-500 hover:text-white"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}