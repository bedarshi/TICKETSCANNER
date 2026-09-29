"use client";

import { Ticket } from "@/types/ticket";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import {
  deleteTicket,
  updateTicketStatus,
  updateTicketPriority,
} from "@/store/ticketsSlice";

interface TicketDetailsProps {
  ticket: Ticket;
  onClose?: () => void;
}

export default function TicketDetails({
  ticket,
  onClose,
}: TicketDetailsProps) {
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

  const handleDelete = () => {
    dispatch(deleteTicket(ticket.id));

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/95 p-6 shadow-2xl">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-cyan-400">
            {ticket.id}
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            {ticket.title}
          </h2>
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 px-3 py-2 text-slate-400 transition hover:border-slate-500 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold text-slate-400">
          Description
        </p>

        <p className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm leading-6 text-slate-300">
          {ticket.description}
        </p>
      </div>

      {/* Customer Information */}
      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Customer
          </p>

          <p className="mt-2 font-medium text-white">
            {ticket.customer}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Email
          </p>

          <p className="mt-2 break-all font-medium text-white">
            {ticket.email}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Category
          </p>

          <p className="mt-2 font-medium text-white">
            {ticket.category}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Assigned To
          </p>

          <p className="mt-2 font-medium text-white">
            {ticket.assignedTo || "Unassigned"}
          </p>
        </div>
      </div>

      {/* Status & Priority */}
      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-400">
            Status
          </label>

          <select
            value={ticket.status}
            onChange={handleStatusChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
          >
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-400">
            Priority
          </label>

          <select
            value={ticket.priority}
            onChange={handlePriorityChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>
      </div>

      {/* Dates */}
      <div className="mb-6 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Created
          </p>

          <p className="mt-1 text-sm text-slate-300">
            {ticket.createdAt}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Updated
          </p>

          <p className="mt-1 text-sm text-slate-300">
            {ticket.updatedAt}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap justify-end gap-3 border-t border-slate-800 pt-5">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
          >
            Close
          </button>
        )}

        <button
          type="button"
          onClick={handleDelete}
          className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-2.5 text-sm font-medium text-red-400 transition hover:border-red-400 hover:bg-red-500/20"
        >
          Delete Ticket
        </button>
      </div>
    </div>
  );
}