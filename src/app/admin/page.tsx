"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (!profile) {
        window.location.href = "/login";
        return;
      }

      if (profile.role !== "admin") {
        window.location.href = "/dashboard";
        return;
      }

      setLoading(false);
    };

    checkAdmin();
  }, []);

  if (loading) {
    return (
      <main className="p-10">
        Loading...
      </main>
    );
  }

  return (
  <main
    className="
      min-h-screen
      bg-[#f7f3ef]
      p-8
    "
  >
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <p
          className="
            text-sm
            text-[#6b5e5e]/60
          "
        >
          Batchie Operations
        </p>

        <h1
          className="
            text-4xl
            font-semibold
            text-[#6b5e5e]
          "
        >
          Admin Dashboard 🐿️
        </h1>
      </div>

      <div
        className="
          rounded-[32px]
          bg-white
          p-8
          shadow-lg
        "
      >
        <h2
          className="
            text-2xl
            font-semibold
            text-[#6b5e5e]
          "
        >
          Batch Management
        </h2>

        <p
          className="
            mt-2
            text-[#6b5e5e]/70
          "
        >
          Ready to manage batches,
          orders, payments & shipments.
        </p>
      </div>
    </div>
  </main>
);
}