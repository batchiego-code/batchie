"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import DashboardLayout from "@/components/layout/DashboardLayout";

type Profile = {
  name: string;
  user_code: string;
  role: string;
};

export default function AdminPage() {
  const [loading, setLoading] =
    useState(true);

  const [profile, setProfile] =
    useState<Profile | null>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    const { data } = await supabase
      .from("profiles")
      .select("name,user_code,role")
      .eq("id", user.id)
      .single();

    if (!data) {
      window.location.href = "/login";
      return;
    }

    if (data.role !== "admin") {
      window.location.href = "/dashboard";
      return;
    }

    setProfile(data);
    setLoading(false);
  }

  if (loading) {
    return (
      <main className="p-10">
        Loading...
      </main>
    );
  }

  return (
    <DashboardLayout title="Admin Dashboard 🐿️">
      <div className="space-y-8">
        <div
          className="
            rounded-[36px]
            bg-white
            p-8
            shadow-lg
          "
        >
          <p className="text-sm text-[#6b5e5e]/60">
            Welcome back,
          </p>

          <h1
            className="
              mt-2
              text-5xl
              font-bold
              text-[#6b5e5e]
            "
          >
            {profile?.name}
          </h1>

          <div className="mt-5 flex gap-3">
            <span
              className="
                rounded-full
                bg-[#e8b4b8]/25
                px-4
                py-2
                text-sm
                text-[#6b5e5e]
              "
            >
              🪪 {profile?.user_code}
            </span>

            <span
              className="
                rounded-full
                bg-[#c6b7e2]/25
                px-4
                py-2
                text-sm
                text-[#6b5e5e]
              "
            >
              👑 Admin
            </span>
          </div>
        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          <div className="rounded-[32px] bg-white p-6 shadow-lg">
            <div className="text-4xl">📦</div>

            <h3 className="mt-4 text-xl font-semibold text-[#6b5e5e]">
              Batches
            </h3>

            <p className="mt-2 text-[#6b5e5e]/60">
              Manage all batches
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-lg">
            <div className="text-4xl">🩷</div>

            <h3 className="mt-4 text-xl font-semibold text-[#6b5e5e]">
              Orders
            </h3>

            <p className="mt-2 text-[#6b5e5e]/60">
              Manage customer orders
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-lg">
            <div className="text-4xl">💳</div>

            <h3 className="mt-4 text-xl font-semibold text-[#6b5e5e]">
              Payments
            </h3>

            <p className="mt-2 text-[#6b5e5e]/60">
              Verify payments
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-6 shadow-lg">
            <div className="text-4xl">🚚</div>

            <h3 className="mt-4 text-xl font-semibold text-[#6b5e5e]">
              Shipments
            </h3>

            <p className="mt-2 text-[#6b5e5e]/60">
              Track deliveries
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}