"use client";

import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Search,
  Ticket as TicketIcon,
  CircleDot,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

import { RootState, AppDispatch } from "@/store/store";
import {
  setSearch,
  setStatusFilter,
} from "@/store/ticketsSlice";

import StatCard from "@/components/StatCard";
import TicketFilters from "@/components/TicketFilters";
import TicketTable from "@/components/TicketTable";
import TicketDetails from "@/components/TicketDetails";

import { Ticket } from "@/types/ticket";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  const { tickets, search, statusFilter } = useSelector(
    (state: RootState) => state.tickets
  );

  const [selectedTicket, setSelectedTicket] =
    useState<Ticket | null>(null);

  /*
   * Dashboard statistics
   */
  const totalTickets = tickets.length;

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "In Progress"
  ).length;

  const resolvedTickets = tickets.filter(
    (ticket) => ticket.status === "Resolved"
  ).length;

  /*
   * Search result count
   */
  const filteredTicketCount = useMemo(() => {
    return tickets.filter((ticket) => {
      const query = search.toLowerCase().trim();

      const matchesSearch =
        query === "" ||
        ticket.id.toLowerCase().includes(query) ||
        ticket.title.toLowerCase().includes(query) ||
        ticket.customer.toLowerCase().includes(query) ||
        ticket.email.toLowerCase().includes(query) ||
        ticket.category.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "All" ||
        ticket.status === statusFilter;

      return matchesSearch && matchesStatus;
    }).length;
  }, [tickets, search, statusFilter]);

  /*
   * Select ticket from table
   */
  const handleSelectTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket);
  };

  /*
   * Close ticket details
   */
  const handleCloseDetails = () => {
    setSelectedTicket(null);
  };

  return (
    <main className="min-h-screen bg-transparent px-4 py-8 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* ========================================= */}
        {/* PAGE HEADER */}
        {/* ========================================= */}

        <div className="mb-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
                Support Nexus
              </p>

              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Support Ticket Dashboard
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                Monitor, search, manage, and resolve customer support
                tickets from one centralized workspace.
              </p>
            </div>

            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">
                System Status
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

                <span className="text-sm font-medium text-emerald-400">
                  Operational
                </span>
              </div>
            </div>

          </div>
        </div>


        {/* ========================================= */}
        {/* STAT CARDS */}
        {/* ========================================= */}

        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Total Tickets"
            value={totalTickets}
            description="All support tickets"
            icon={TicketIcon}
          />

          <StatCard
            title="Open"
            value={openTickets}
            description="Waiting for support"
            icon={CircleDot}
          />

          <StatCard
            title="In Progress"
            value={inProgressTickets}
            description="Currently being handled"
            icon={Clock3}
          />

          <StatCard
            title="Resolved"
            value={resolvedTickets}
            description="Successfully resolved"
            icon={CheckCircle2}
          />

        </section>


        {/* ========================================= */}
        {/* SEARCH */}
        {/* ========================================= */}

        <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 shadow-xl md:p-5">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="relative w-full lg:max-w-xl">

              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  dispatch(setSearch(event.target.value))
                }
                placeholder="Search by ticket ID, title, customer, email..."
                className="w-full rounded-xl border border-slate-700 bg-slate-900/80 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30"
              />

            </div>

            <div className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-300">
                {filteredTicketCount}
              </span>{" "}
              tickets
            </div>

          </div>

        </section>


        {/* ========================================= */}
        {/* STATUS FILTERS */}
        {/* ========================================= */}

        <section className="mb-6">

          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Ticket Status
            </h2>
          </div>

          <TicketFilters />

        </section>


        {/* ========================================= */}
        {/* TICKET TABLE */}
        {/* ========================================= */}

        <section className="mb-8">

          <div className="mb-4 flex items-center justify-between">

            <div>
              <h2 className="text-xl font-bold text-white">
                Tickets
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage customer support requests.
              </p>
            </div>

          </div>

          <TicketTable />

        </section>


        {/* ========================================= */}
        {/* QUICK INFO */}
        {/* ========================================= */}

        <section className="grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <TicketIcon size={20} />
            </div>

            <h3 className="font-semibold text-white">
              Centralized Tickets
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Keep customer support requests organized in one place.
            </p>
          </div>


          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <Clock3 size={20} />
            </div>

            <h3 className="font-semibold text-white">
              Real-time Management
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Change ticket status and priority directly from the dashboard.
            </p>
          </div>


          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <CheckCircle2 size={20} />
            </div>

            <h3 className="font-semibold text-white">
              Resolution Tracking
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Track open, active, resolved, and closed support requests.
            </p>
          </div>

        </section>


        {/* ========================================= */}
        {/* TICKET DETAILS */}
        {/* ========================================= */}

        {selectedTicket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

            <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto">

              <TicketDetails
                ticket={selectedTicket}
                onClose={handleCloseDetails}
              />

            </div>

          </div>
        )}

      </div>
    </main>
  );
}