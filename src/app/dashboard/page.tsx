"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import DashboardLayout from "@/components/layout/DashboardLayout";

type Profile = {
  name: string;
  email: string;
  role: string;
  user_code: string;
};

export default function DashboardPage() {
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
      .select("*")
      .eq("id", user.id)
      .single();

    setProfile(data);
    if (data?.role === "admin") {
  window.location.href = "/admin";
  return;
}
  }

  return (
    <DashboardLayout title="Treasure Tracker ✦">
      <div className="relative space-y-8">
        {/* Sparkles */}

        <div className="absolute top-2 right-12 text-[#e8b4b8] text-xl opacity-60">
          ✦
        </div>

        <div className="absolute top-24 left-1/3 text-[#c6b7e2] text-lg opacity-50">
          ✧
        </div>

        <div className="absolute top-80 right-32 text-[#e8b4b8] text-xl opacity-40">
          ✦
        </div>

        {/* Hero Section */}

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Welcome */}

          <div
            className="
              lg:col-span-2
              rounded-[36px]
              bg-white/85
              backdrop-blur-sm
              p-8
              shadow-lg
            "
          >
            <p className="text-sm text-[#6b5e5e]/60">
              Hello again 👋
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

            <p
              className="
                mt-4
                text-xl
                text-[#6b5e5e]/80
              "
            >
              Ready to join your next
              batch today? 🩷
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
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
                ✨ {profile?.role}
              </span>
            </div>

            <div
              className="
                mt-6
                rounded-2xl
                bg-[#f7f3ef]
                px-5
                py-4
                text-[#6b5e5e]/70
              "
            >
              {profile?.email}
            </div>
          </div>

          {/* Collector Level */}

          <div
            className="
              rounded-[36px]
              bg-white
              p-8
              shadow-lg
            "
          >
            <p className="text-sm text-[#6b5e5e]/60">
              Collector Level
            </p>

            <div className="mt-4 text-5xl">
              🌱
            </div>

            <h3
              className="
                mt-4
                text-2xl
                font-semibold
                text-[#6b5e5e]
              "
            >
              Seedling
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-[#6b5e5e]/60
              "
            >
              Your collecting journey
              has just begun.
            </p>

            <div
              className="
                mt-6
                rounded-2xl
                bg-[#f7f3ef]
                p-4
              "
            >
              <p className="text-sm">
                🌸 Next Level:
              </p>

              <p className="font-medium">
                Blossom Collector
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-3">
          <div
            className="
              rounded-[32px]
              bg-white
              p-6
              shadow-lg
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            <div className="text-4xl">
              📦
            </div>

            <p
              className="
                mt-4
                text-6xl
                font-bold
                text-[#6b5e5e]
              "
            >
              0
            </p>

            <h3
              className="
                mt-2
                text-xl
                font-medium
              "
            >
              Active Batches
            </h3>

            <p className="text-[#6b5e5e]/60">
              No active batches
            </p>
          </div>

          <div
            className="
              rounded-[32px]
              bg-white
              p-6
              shadow-lg
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div className="text-4xl">
              🩷
            </div>

            <p
              className="
                mt-4
                text-6xl
                font-bold
                text-[#6b5e5e]
              "
            >
              0
            </p>

            <h3
              className="
                mt-2
                text-xl
                font-medium
              "
            >
              My Orders
            </h3>

            <p className="text-[#6b5e5e]/60">
              No orders yet
            </p>
          </div>

          <div
            className="
              rounded-[32px]
              bg-white
              p-6
              shadow-lg
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <div className="text-4xl">
              💳
            </div>

            <p
              className="
                mt-4
                text-6xl
                font-bold
                text-[#6b5e5e]
              "
            >
              0
            </p>

            <h3
              className="
                mt-2
                text-xl
                font-medium
              "
            >
              Payments
            </h3>

            <p className="text-[#6b5e5e]/60">
              No payments yet
            </p>
          </div>
        </div>

        {/* Recent Activity */}

        <div
          className="
            rounded-[36px]
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
            Recent Activity
          </h2>

          <div
            className="
              mt-6
              rounded-3xl
              bg-[#f7f3ef]
              p-6
            "
          >
            <p
              className="
                text-lg
                font-medium
                text-[#6b5e5e]
              "
            >
              🌱 Your collecting journey
              starts here.
            </p>

            <p
              className="
                mt-2
                text-[#6b5e5e]/70
              "
            >
              Join your first batch and
              your activity timeline
              will appear here.
            </p>
          </div>
        </div>

        <div
  className="
    rounded-[36px]
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
    🌸 Upcoming Batches
  </h2>

  <div
    className="
      mt-6
      rounded-3xl
      bg-[#f7f3ef]
      p-6
    "
  >
    <p
      className="
        font-medium
        text-[#6b5e5e]
      "
    >
      No upcoming batches yet.
    </p>

    <p
      className="
        mt-2
        text-[#6b5e5e]/70
      "
    >
      New group orders will appear
      here when they open.
    </p>
  </div>
</div>
      </div>
    </DashboardLayout>
  );
}