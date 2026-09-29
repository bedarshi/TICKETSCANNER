"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import TicketRow from "./TicketRow";

export default function TicketTable() {
  const { tickets, search, statusFilter } = useSelector(
    (state: RootState) => state.tickets
  );

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.id.toLowerCase().includes(search.toLowerCase()) ||
      ticket.title.toLowerCase().includes(search.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(search.toLowerCase()) ||
      ticket.category.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || ticket.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60">
      {/* Header */}
      <div className="hidden grid-cols-6 gap-4 border-b border-slate-800 bg-slate-900/60 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 md:grid">
        <div className="col-span-2">Ticket</div>
        <div>Category</div>
        <div>Status</div>
        <div>Priority</div>
        <div className="text-right">Action</div>
      </div>

      {/* Tickets */}
      {filteredTickets.length > 0 ? (
        <div>
          {filteredTickets.map((ticket) => (
            <TicketRow
              key={ticket.id}
              ticket={ticket}
            />
          ))}
        </div>
      ) : (
        <div className="px-6 py-16 text-center">
          <p className="text-lg font-semibold text-white">
            No tickets found
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Try changing your search or status filter.
          </p>
        </div>
      )}
    </div>
  );
}