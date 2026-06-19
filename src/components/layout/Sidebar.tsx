"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Profile = {
  name: string;
  user_code: string;
};

export default function Sidebar() {
  const pathname = usePathname();

  const [profile, setProfile] =
    useState<Profile | null>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("profiles")
      .select("name,user_code")
      .eq("id", user.id)
      .single();

    setProfile(data);
  }

  async function handleLogout() {
    await supabase.auth.signOut();

    window.location.href = "/";
  }

  const menu = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "🏠",
    },
    {
      name: "Batches",
      href: "/batches",
      icon: "📦",
    },
    {
      name: "Orders",
      href: "/orders",
      icon: "🩷",
    },
    {
      name: "Payments",
      href: "/payments",
      icon: "💳",
    },
    {
      name: "Shipment",
      href: "/shipment",
      icon: "🚚",
    },
  ];

  return (
    <aside
      className="
        w-72
        border-r
        border-[#e8b4b8]/20
        bg-white/40
        backdrop-blur-sm
        flex
        flex-col
      "
    >
      {/* Logo */}

      <div className="p-6">
        <h1
          className="
            whitespace-nowrap
            text-3xl
            font-bold
            leading-none
            text-[#6b5e5e]
          "
        >
          🐿️ Batchie GO
        </h1>

        <p
          className="
            mt-2
            text-xs
            text-[#6b5e5e]/50
          "
        >
          Home for every batch ✦
        </p>
      </div>

      {/* Menu */}

      <nav className="px-4 space-y-2">
        {menu.map((item) => {
          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex
                items-center
                gap-3
                rounded-2xl
                px-4
                py-3
                transition-all

                ${
                  active
                    ? `
                      bg-[#e8b4b8]/20
                      border
                      border-[#e8b4b8]/50
                      text-[#6b5e5e]
                      shadow-sm
                    `
                    : `
                      text-[#6b5e5e]/60
                      hover:bg-white/60
                    `
                }
              `}
            >
              <span>{item.icon}</span>

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="mt-auto p-4">
        <div
          className="
            rounded-[28px]
            border
            border-[#e8b4b8]/30
            bg-white/80
            backdrop-blur-sm
            p-4
            shadow-sm
          "
        >
          {/* User */}

          <div className="flex items-center gap-3">
            <div
              className="
                h-12
                w-12
                rounded-full
                bg-[#e8b4b8]/40
                flex
                items-center
                justify-center
                text-xl
              "
            >
              🐿️
            </div>

            <div>
              <p
                className="
                  font-semibold
                  text-[#6b5e5e]
                "
              >
                {profile?.name}
              </p>

              <p
                className="
                  text-xs
                  text-[#6b5e5e]/60
                "
              >
                {profile?.user_code}
              </p>
            </div>
          </div>

          {/* Collector Level */}

          <div
            className="
              mt-4
              rounded-2xl
              bg-[#f7f3ef]
              p-3
            "
          >
            <p
              className="
                text-xs
                text-[#6b5e5e]/60
              "
            >
              Collector Level
            </p>

            <p
              className="
                mt-1
                font-medium
                text-[#6b5e5e]
              "
            >
              🌱 Seedling Collector
            </p>

            {/* Progress */}

            <div className="mt-3">
              <div
                className="
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-[#e8b4b8]/20
                "
              >
                <div
                  className="
                    h-full
                    w-[35%]
                    rounded-full
                    bg-[#e8b4b8]
                  "
                />
              </div>

              <p
                className="
                  mt-2
                  text-[11px]
                  text-[#6b5e5e]/60
                "
              >
                Progress to Blossom 🌸
              </p>
            </div>
          </div>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="
              mt-4
              w-full
              rounded-2xl
              bg-[#e8b4b8]
              py-3
              font-medium
              text-[#6b5e5e]
              transition-all
              hover:scale-[1.02]
              hover:shadow-md
            "
          >
            ↪ Logout
          </button>
        </div>
      </div>
    </aside>
  );
}