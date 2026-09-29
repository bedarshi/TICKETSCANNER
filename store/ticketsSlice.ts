import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Ticket, TicketPriority, TicketStatus } from "@/types/ticket";

interface TicketsState {
  tickets: Ticket[];
  search: string;
  statusFilter: "All" | TicketStatus;
}

const initialTickets: Ticket[] = [
  {
    id: "SUP-1024",
    title: "Unable to access account",
    description: "Customer cannot log in to their account.",
    category: "Account",
    priority: "High",
    status: "Open",
    customer: "Alex Johnson",
    email: "alex.johnson@example.com",
    createdAt: "2026-09-30",
    updatedAt: "2026-09-30",
    assignedTo: "Support Team",
  },
  {
    id: "SUP-1023",
    title: "Payment issue",
    description: "Customer reports a problem with a recent payment.",
    category: "Billing",
    priority: "Medium",
    status: "In Progress",
    customer: "Sarah Williams",
    email: "sarah.williams@example.com",
    createdAt: "2026-09-29",
    updatedAt: "2026-09-29",
    assignedTo: "John Smith",
  },
  {
    id: "SUP-1022",
    title: "Password reset request",
    description: "Customer requested help resetting their password.",
    category: "Account",
    priority: "Low",
    status: "Resolved",
    customer: "Michael Brown",
    email: "michael.brown@example.com",
    createdAt: "2026-09-28",
    updatedAt: "2026-09-28",
    assignedTo: "Support Team",
  },
  {
    id: "SUP-1021",
    title: "Application crashing",
    description: "Customer reports that the application crashes during startup.",
    category: "Technical",
    priority: "Critical",
    status: "Open",
    customer: "Emily Davis",
    email: "emily.davis@example.com",
    createdAt: "2026-09-27",
    updatedAt: "2026-09-27",
    assignedTo: "Technical Team",
  },
  {
    id: "SUP-1020",
    title: "Feature request",
    description: "Customer requested a new dashboard feature.",
    category: "Feature Request",
    priority: "Low",
    status: "Closed",
    customer: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    createdAt: "2026-09-26",
    updatedAt: "2026-09-26",
  },
];

const initialState: TicketsState = {
  tickets: initialTickets,
  search: "",
  statusFilter: "All",
};

const ticketsSlice = createSlice({
  name: "tickets",

  initialState,

  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setStatusFilter: (
      state,
      action: PayloadAction<"All" | TicketStatus>
    ) => {
      state.statusFilter = action.payload;
    },

    addTicket: (state, action: PayloadAction<Ticket>) => {
      state.tickets.unshift(action.payload);
    },

    updateTicket: (state, action: PayloadAction<Ticket>) => {
      const index = state.tickets.findIndex(
        (ticket) => ticket.id === action.payload.id
      );

      if (index !== -1) {
        state.tickets[index] = action.payload;
      }
    },

    deleteTicket: (state, action: PayloadAction<string>) => {
      state.tickets = state.tickets.filter(
        (ticket) => ticket.id !== action.payload
      );
    },

    updateTicketStatus: (
      state,
      action: PayloadAction<{
        id: string;
        status: TicketStatus;
      }>
    ) => {
      const ticket = state.tickets.find(
        (ticket) => ticket.id === action.payload.id
      );

      if (ticket) {
        ticket.status = action.payload.status;
        ticket.updatedAt = new Date().toISOString();
      }
    },

    updateTicketPriority: (
      state,
      action: PayloadAction<{
        id: string;
        priority: TicketPriority;
      }>
    ) => {
      const ticket = state.tickets.find(
        (ticket) => ticket.id === action.payload.id
      );

      if (ticket) {
        ticket.priority = action.payload.priority;
        ticket.updatedAt = new Date().toISOString();
      }
    },
  },
});

export const {
  setSearch,
  setStatusFilter,
  addTicket,
  updateTicket,
  deleteTicket,
  updateTicketStatus,
  updateTicketPriority,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;