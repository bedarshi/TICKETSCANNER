# 🎫 Support Nexus — Support Ticket Dashboard
🌐 TICKETSCANNER — LIVE ON VERCEL
✨ Production URL:
https://ticketscanner-hf5dt5qnc-bedarshis-projects.vercel.app/

-----------------------------------------------------------------------------------------------------------------------------------
image of the website
<img width="1917" height="1000" alt="image" src="https://github.com/user-attachments/assets/caf47834-c7b5-4c9c-a028-d9bc421d07c5" />
<img width="1815" height="907" alt="image" src="https://github.com/user-attachments/assets/4c5cab84-8dce-493a-afb9-d672a64968a6" />
<img width="1782" height="892" alt="image" src="https://github.com/user-attachments/assets/7c60ea66-063f-481d-b2c8-612f0bef25b3" />
<img width="1917" height="1157" alt="image" src="https://github.com/user-attachments/assets/14d62d61-c64e-4206-a70b-8655608df300" />
------------------------------------------------------------------------------------------------------------------------------------

gmail : bedarshi9@gmail.com
contact : 8822763336

A modern, responsive support ticket management dashboard built with **Next.js, TypeScript, React, Redux Toolkit, Tailwind CSS, and JSON Server**.

API TESTING IMAGE
<img width="1726" height="927" alt="image" src="https://github.com/user-attachments/assets/112a8a13-afd9-4861-a199-c7cfb5587c2a" />


---

## 📸 Preview

> Dashboard preview:



> If the screenshot is stored somewhere else, place the dashboard screenshot at:
>
> `public/dashboard-preview.png`

---

# ✨ Features

## 📊 Dashboard Overview

- Total ticket statistics
- Open ticket count
- In-progress ticket count
- Resolved ticket count
- System status indicator
- Recent ticket overview

## 🎫 Ticket Management

- View all support tickets
- Search tickets
- Filter tickets by status
- View detailed ticket information
- Update ticket status
- Update ticket priority
- Delete tickets
- Add new tickets
- Assign tickets to support members

## 🔎 Search

Tickets can be searched using information such as:

- Ticket ID
- Ticket title
- Customer name
- Customer email
- Ticket description

## 🎯 Status Filtering

Available ticket filters:

- All
- Open
- In Progress
- Resolved
- Closed

## ⚡ State Management

The application uses **Redux Toolkit** for centralized state management.

Redux manages:

- Ticket data
- Search state
- Status filters
- Ticket updates
- Ticket deletion
- Ticket creation
- Ticket priority changes

## 🌌 UI / UX

- Dark modern dashboard
- Nebula-inspired visual design
- Cyan accent system
- Responsive layout
- Interactive cards
- Loading states
- Smooth transitions
- Accessible buttons and controls
- Responsive ticket management interface

---

# 🛠️ Technology Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Lucide React

## State Management

- Redux Toolkit
- React Redux

## Data / API

- JSON Server
- `db.json`
- REST-style API

## Development Tools

- Node.js
- npm
- Git
- GitHub
- VS Code

---

# 🏗️ Project Architecture

The project follows a component-based Next.js architecture with centralized Redux state management.

```text
                         ┌──────────────────────┐
                         │      User / UI        │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      Next.js App     │
                         │       app/page.tsx   │
                         └──────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
      ┌──────────────┐      ┌───────────────┐     ┌──────────────┐
      │ UI Components│      │ Redux Store    │     │ Utility Layer│
      │              │      │               │     │              │
      │ TicketTable  │      │ ticketsSlice  │     │ lib/utils    │
      │ TicketRow    │      │ store         │     │              │
      │ TicketDetail │      │               │     │              │
      │ Filters      │      │               │     │              │
      │ StatCard     │      │               │     │              │
      └──────┬───────┘      └───────┬───────┘     └──────────────┘
             │                       │
             └──────────────┬────────┘
                            │
                            ▼
                  ┌─────────────────────┐
                  │     Fake REST API   │
                  │     JSON Server     │
                  │     localhost:4000  │
                  └──────────┬──────────┘
                             │
                             ▼
                       ┌───────────┐
                       │  db.json  │
                       │ Ticket DB │
                       └───────────┘
📁 Project Structure
support-ticket-dashboard/
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ui/
│   │
│   ├── DashboardNavbar.tsx
│   ├── DashboardSidebar.tsx
│   ├── LoadingSpinner.tsx
│   ├── NebulaBackground.tsx
│   ├── ReduxProvider.tsx
│   ├── StatCard.tsx
│   ├── TicketDetails.tsx
│   ├── TicketFilters.tsx
│   ├── TicketRow.tsx
│   └── TicketTable.tsx
│
├── lib/
│   └── utils.ts
│
├── public/
│   ├── dashboard-preview.png
│   └── ...
│
├── store/
│   ├── store.ts
│   └── ticketsSlice.ts
│
├── types/
│   └── ticket.ts
│
├── db.json
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── .gitignore
images on FAKE API TESTING
<img width="1856" height="1042" alt="image" src="https://github.com/user-attachments/assets/c53de951-ac03-45ff-a0eb-22d5e3f41730" />
📂 Folder Responsibilities
app/

Contains the Next.js application-level files.

page.tsx

Main dashboard page.

Responsible for combining:

Dashboard navigation
Statistics
Search
Filters
Ticket table
Ticket management UI
layout.tsx

Root application layout.

Responsible for:

Global layout
Metadata
Redux provider integration
Global styling
globals.css

Contains global styles and the application's visual theme.

🧩 components/

Contains reusable UI components.

DashboardNavbar.tsx

Top navigation bar containing dashboard branding and user/action controls.

DashboardSidebar.tsx

Dashboard navigation/sidebar component.

StatCard.tsx

Reusable statistics card used for:

Total Tickets
Open Tickets
In Progress
Resolved
TicketFilters.tsx

Provides ticket status filtering.

All
Open
In Progress
Resolved
Closed
TicketTable.tsx

Displays the ticket collection in a structured table.

TicketRow.tsx

Represents an individual ticket inside the ticket table.

TicketDetails.tsx

Displays detailed information about a selected ticket.

LoadingSpinner.tsx

Reusable loading indicator.

NebulaBackground.tsx

Provides the application's visual background effect.

ReduxProvider.tsx

Provides the Redux store to the React application.

🧠 Redux Architecture

Redux Toolkit is used to maintain centralized application state.

React Component
      │
      ▼
 dispatch(action)
      │
      ▼
 ticketsSlice
      │
      ▼
 Redux Store
      │
      ▼
 useSelector()
      │
      ▼
 React Component
🗃️ Redux Store

The Redux store is located at:

store/store.ts

It registers the ticket reducer:

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});
🎫 Ticket Slice

Located at:

store/ticketsSlice.ts

The slice manages:

Ticket collection
Search query
Status filter
Ticket creation
Ticket updates
Ticket deletion
Status updates
Priority updates

Example actions include:

setSearch
setStatusFilter
addTicket
updateTicket
deleteTicket
updateTicketStatus
updateTicketPriority
📝 Ticket Type

Ticket types are defined in:

types/ticket.ts

Example:

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
🔌 Fake API

This project uses JSON Server as a lightweight fake REST API.

The database is:

db.json

JSON Server runs locally on:

http://localhost:4000

The tickets endpoint is:

http://localhost:4000/tickets
📡 API Endpoints
Get all tickets
GET /tickets

Example:

http://localhost:4000/tickets
Get a specific ticket
GET /tickets/:id

Example:

GET /tickets/SUP-1024
Create a ticket
POST /tickets

Example request:

{
  "id": "SUP-1025",
  "title": "Unable to access dashboard",
  "description": "Customer cannot access the support dashboard.",
  "category": "Technical",
  "priority": "High",
  "status": "Open",
  "customer": "John Doe",
  "email": "john@example.com",
  "createdAt": "2026-09-30T10:00:00.000Z",
  "updatedAt": "2026-09-30T10:00:00.000Z",
  "assignedTo": "Support Team"
}
Update a ticket
PUT /tickets/:id
Partially update a ticket
PATCH /tickets/:id
Delete a ticket
DELETE /tickets/:id
💾 Database Structure

The fake database is stored in:

db.json

Example:

{
  "tickets": [
    {
      "id": "SUP-1024",
      "title": "Unable to access account",
      "description": "Customer is unable to log into their account.",
      "category": "Account",
      "priority": "High",
      "status": "Open",
      "customer": "Alex Johnson",
      "email": "alex.johnson@example.com",
      "createdAt": "2026-09-30T09:30:00.000Z",
      "updatedAt": "2026-09-30T09:30:00.000Z",
      "assignedTo": "Support Team"
    }
  ]
}
🚀 Installation
Prerequisites

Make sure the following are installed:

Node.js 18+
npm
Git

Check your versions:

node -v
npm -v
git --version
📥 Clone the Repository

Clone the project:

git clone git@github.com:bedarshi/TICKETSCANNER.git

Move into the project:

cd TICKETSCANNER
📦 Install Dependencies

Run:

npm install

This installs all dependencies defined in:

package.json
▶️ Start the Fake API

Open a terminal inside the project directory and run:

npx json-server db.json --port 4000

The API will be available at:

http://localhost:4000

Tickets endpoint:

http://localhost:4000/tickets
▶️ Start the Next.js Application

Open another terminal.

Run:

npm run dev

The application will normally be available at:

http://localhost:3000
🖥️ Development Setup

You need two processes running during development.

Terminal 1 — Fake API
npx json-server db.json --port 4000
Terminal 2 — Next.js
npm run dev

Then open:

http://localhost:3000
🧪 Production Build

Before deployment, create a production build:

npm run build

If the build succeeds, start the production server with:

npm run start
📜 Available Scripts

The project includes the following npm scripts:

npm run dev

Starts the Next.js development server.

npm run build

Creates an optimized production build.

npm run start

Starts the production server.

npm run lint

Runs ESLint checks.

🔐 Environment Variables

If environment variables are introduced in the future, create:

.env.local

Example:

NEXT_PUBLIC_API_URL=http://localhost:4000

Do not commit private environment variables to GitHub.

The project's .gitignore already excludes environment files.

🌐 Deployment
Frontend

The Next.js application can be deployed using:

Vercel
Render
Netlify
Other platforms supporting Next.js

For Vercel:

Push the project to GitHub.
Open Vercel.
Import the GitHub repository.
Select the TICKETSCANNER repository.
Select Next.js as the framework if it is not detected automatically.
Deploy.
⚠️ Fake API Deployment Note

The project currently uses JSON Server for development.

The local API is:

http://localhost:4000

This means the JSON Server is running on the developer's computer.

A Vercel deployment cannot access:

http://localhost:4000

from the public internet.

For a production deployment, the fake API should therefore be replaced with a real backend/API service or deployed separately.

Possible future solutions include:

Next.js Route Handlers
Supabase
PostgreSQL
MongoDB
Firebase
Dedicated REST API
Serverless API
🔄 Application Data Flow

The application follows this general flow:

User
 │
 ▼
Dashboard UI
 │
 ▼
React Components
 │
 ▼
Redux Actions
 │
 ▼
Redux Toolkit
 │
 ▼
Application State
 │
 ▼
JSON Server API
 │
 ▼
db.json

For UI updates:

db.json
   │
   ▼
JSON Server
   │
   ▼
Redux Store
   │
   ▼
React Components
   │
   ▼
Updated Dashboard
🔍 Search Flow

The search system follows:

User enters search
        │
        ▼
setSearch()
        │
        ▼
Redux State
        │
        ▼
Ticket filtering
        │
        ▼
Filtered ticket list
        │
        ▼
TicketTable

Search can be performed using:

Ticket ID
Title
Customer
Email
Description
🎯 Filter Flow

The status filter works as:

User selects status
        │
        ▼
setStatusFilter()
        │
        ▼
Redux Store
        │
        ▼
Ticket filtering
        │
        ▼
Filtered tickets

