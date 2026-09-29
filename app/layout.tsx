import type { Metadata } from "next";

import "./globals.css";

import ReduxProvider from "@/components/ReduxProvider";

export const metadata: Metadata = {
  title: "Support Nexus",
  description: "Nebula Support Ticket Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}