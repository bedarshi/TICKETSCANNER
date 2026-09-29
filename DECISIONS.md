# Technical Decisions

## 1. Project Architecture

The project was implemented using Next.js with TypeScript and a component-based architecture.

The application is organized into separate areas for:

- Application routes and pages
- Reusable UI components
- Redux state management
- Shared utility functions
- Type definitions
- Static assets

This structure was chosen to keep the codebase maintainable, modular, and easy to extend.

---

## 2. Technology Choices

### Next.js

Next.js was selected as the primary frontend framework because it provides:

- React-based development
- File-based routing
- Optimized production builds
- Good performance
- Straightforward deployment with Vercel

### TypeScript

TypeScript was used to provide static typing and improve code reliability, maintainability, and developer experience.

### Redux Toolkit

Redux Toolkit was selected for centralized application state management.

It is used to manage ticket-related state such as:

- Ticket collection
- Search state
- Status filters
- Ticket creation
- Ticket updates
- Ticket deletion
- Priority changes

### Tailwind CSS

Tailwind CSS was used to create the responsive dashboard interface and maintain consistent styling across the application.

### JSON Server

JSON Server was used as a lightweight REST API for the task.

It provides CRUD operations for ticket data without requiring a separate backend service during development.

---

## 3. State Management Decision

Ticket-related state is centralized using Redux Toolkit rather than being distributed across multiple components.

This makes it easier to:

- Share ticket data between components
- Maintain consistent application state
- Handle ticket updates
- Implement search and filtering
- Add future features

The Redux architecture consists of:

- `store/store.ts`
- `store/ticketsSlice.ts`

---

## 4. Ticket Data Model

A typed ticket interface was created in:

`types/ticket.ts`

The ticket model includes fields such as:

- ID
- Title
- Description
- Category
- Priority
- Status
- Customer
- Email
- Creation date
- Update date
- Assigned support member

TypeScript union types are used for ticket status and priority values to reduce invalid states.

---

## 5. Search and Filtering

The dashboard supports searching tickets using relevant ticket information including:

- Ticket ID
- Title
- Customer
- Email
- Description

Status filtering is provided for:

- All
- Open
- In Progress
- Resolved
- Closed

Search and filter state is handled through Redux Toolkit.

---

## 6. UI Component Architecture

The dashboard was divided into reusable components instead of keeping the entire interface inside a single page.

Examples include:

- `DashboardNavbar`
- `DashboardSidebar`
- `StatCard`
- `TicketFilters`
- `TicketTable`
- `TicketRow`
- `TicketDetails`
- `LoadingSpinner`
- `NebulaBackground`
- `ReduxProvider`

This approach improves code organization and makes individual UI sections easier to maintain and extend.

---

## 7. API Decision

JSON Server was used as the development API.

The application communicates with the ticket API through REST-style operations including:

- GET
- POST
- PUT
- PATCH
- DELETE

The ticket data is stored in `db.json`.

This was chosen because the assignment focuses on building the dashboard and demonstrating frontend state management and CRUD functionality without requiring a production backend.

---

## 8. Deployment Decision

The Next.js application was deployed using Vercel.

Deployment URL:

https://ticketscanner-hf5dt5qnc-bedarshis-projects.vercel.app

The GitHub repository is connected to the Vercel project so that future changes can be deployed through the repository workflow.

---

## 9. Production API Limitation

The current application uses JSON Server as a local development API.

The API normally runs at:

`http://localhost:4000`

Because JSON Server is running locally, the deployed Vercel application cannot use the developer's local API from a public environment.

For a fully production-ready version, the API should be migrated to a publicly accessible backend or database solution.

Possible future implementations include:

- Next.js Route Handlers
- Supabase
- PostgreSQL
- MongoDB
- Firebase
- Dedicated REST API
- Serverless API

---

## 10. Incomplete / Future Improvements

The core dashboard functionality and assignment requirements have been implemented.

The following improvements could be made in a future production version:

- Replace JSON Server with a production backend
- Add authentication and authorization
- Add persistent cloud database storage
- Add role-based access control
- Add pagination for large ticket datasets
- Add automated testing
- Add production API monitoring
- Add ticket activity/history tracking
- Add real-time ticket updates

These improvements were not required for the current task implementation.

---

## 11. Final Implementation Summary

The completed implementation provides a responsive support ticket dashboard with:

- Ticket statistics
- Ticket listing
- Search
- Status filtering
- Ticket creation
- Ticket updates
- Priority management
- Ticket deletion
- Ticket details
- Redux Toolkit state management
- TypeScript type safety
- Responsive UI
- Vercel deployment

The architecture was designed to keep the application modular and provide a clear foundation for future backend and production enhancements.
