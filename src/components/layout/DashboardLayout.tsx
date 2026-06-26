"use client";

import { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type Props = {
  title: string;
  children: ReactNode;
};

export default function DashboardLayout({
  title,
  children,
}: Props) {
  return (
    <div
      className="
        relative
        flex
        min-h-screen
        overflow-hidden
        bg-[#f7f3ef]
      "
    >
      {/* Pink Glow */}

      <div
        className="
          absolute
          -left-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          opacity-30
          blur-[140px]
        "
        style={{
          background: "#e8b4b8",
        }}
      />

      {/* Purple Glow */}

      <div
        className="
          absolute
          right-0
          top-0
          h-[420px]
          w-[420px]
          rounded-full
          opacity-30
          blur-[140px]
        "
        style={{
          background: "#c6b7e2",
        }}
      />

      <Sidebar />

      <div
        className="
          relative
          z-10
          flex-1
        "
      >
        <Topbar title={title} />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}