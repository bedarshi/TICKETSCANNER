export type TicketPriority =
  | "Low"
  | "Medium"
  | "High"
  | "Critical";

export type TicketStatus =
  | "Open"
  | "In Progress"
  | "Resolved"
  | "Closed";

export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: TicketPriority;
  status: TicketStatus;
  customer: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
}