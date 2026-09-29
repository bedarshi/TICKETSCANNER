"use client";

import { Ticket } from "@/types/ticket";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import {
  deleteTicket,
  updateTicketStatus,
  updateTicketPriority,
} from "@/store/ticketsSlice";

interface TicketRowProps {
  ticket: Ticket;
}

export default function TicketRow({ ticket }: TicketRowProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(
      updateTicketStatus({
        id: ticket.id,
        status: e.target.value as Ticket["status"],
      })
    );
  };

  const handlePriorityChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(
      updateTicketPriority({
        id: ticket.id,
        priority: e.target.value as Ticket["priority"],
      })
    );
  };

  return (
    <div className="grid grid-cols-1 gap-4 border-b border-slate-800 px-6 py-5 md:grid-cols-6 md:items-center">
      
      {/* Ticket */}
      <div className="md:col-span-2">
        <p className="font-semibold text-white">{ticket.id}</p>

        <p className="mt-1 text-sm text-slate-300">
          {ticket.title}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {ticket.customer}
        </p>
      </div>

      {/* Category */}
      <div>
        <p className="text-xs text-slate-500 md:hidden">
          Category
        </p>

        <p className="text-sm text-slate-300">
          {ticket.category}
        </p>
      </div>

      {/* Status */}
      <div>
        <p className="mb-1 text-xs text-slate-500 md:hidden">
          Status
        </p>

        <select
          value={ticket.status}
          onChange={handleStatusChange}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      {/* Priority */}
      <div>
        <p className="mb-1 text-xs text-slate-500 md:hidden">
          Priority
        </p>

        <select
          value={ticket.priority}
          onChange={handlePriorityChange}
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
      </div>

      {/* Delete */}
      <div className="flex justify-start md:justify-end">
        <button
          type="button"
          onClick={() => dispatch(deleteTicket(ticket.id))}
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:border-red-400 hover:bg-red-500/20 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}