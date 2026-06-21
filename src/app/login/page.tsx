"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import AuthCard from "@/components/auth/AuthCard";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleLogin = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  const { error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    alert(error.message);
    return;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    alert("User not found");
    return;
  }

  const { data: profile } =
    await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

  if (!profile) {
    alert("Profile not found");
    return;
  }

  if (profile.role === "admin") {
    window.location.href = "/admin";
  } else {
    window.location.href = "/dashboard";
  }
};

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f7f3ef]
        flex
        items-center
        justify-center
        px-6
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          blur-[150px]
        "
        style={{
          background: "#e8b4b8",
          opacity: 0.6,
        }}
      />

      <div
        className="
          absolute
          top-0
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          blur-[150px]
        "
        style={{
          background: "#c6b7e2",
          opacity: 0.6,
        }}
      />

      {/* Sparkles */}
      <div className="absolute top-32 left-1/4 text-[#c6b7e2] animate-pulse">
        ✦
      </div>

      <div className="absolute top-40 right-1/4 text-[#e8b4b8] animate-pulse">
        ✧
      </div>

      <div className="absolute bottom-40 left-1/3 text-[#e8b4b8] animate-pulse">
        ✦
      </div>

      <div className="absolute bottom-28 right-1/3 text-[#c6b7e2] animate-pulse">
        ✧
      </div>

      <AuthCard>
        <div className="text-center">

          <div
            className="
              mb-4
              inline-flex
              rounded-full
              border
              border-[#e8b4b8]
              px-4
              py-2
              text-sm
              text-[#6b5e5e]
            "
          >
            🐿️ Welcome Back
          </div>

          <div
            className="
              mx-auto
              mb-4
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-[#e8b4b8]
            "
          >
            🐿️
          </div>

          <h1
            className="
              text-4xl
              font-semibold
              text-[#6b5e5e]
            "
          >
            Batchie GO
          </h1>

          <p
            className="
              mt-3
              text-[#6b5e5e]/70
            "
          >
            Welcome back, bestie.
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-4"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              border
              border-[#e8b4b8]/40
              bg-white/70
              px-4
              py-3
              outline-none
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              border
              border-[#e8b4b8]/40
              bg-white/70
              px-4
              py-3
              outline-none
            "
          />

          <button
            type="submit"
            className="
              w-full
              rounded-2xl
              bg-[#e8b4b8]
              py-4
              font-medium
              text-[#6b5e5e]
              shadow-lg
              shadow-[#e8b4b8]/30
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Login
          </button>

        </form>

        <p
          className="
            mt-6
            text-center
            text-sm
            text-[#6b5e5e]/70
          "
        >
          Need an account?{" "}
          <Link
            href="/register"
            className="
              font-medium
              text-[#6b5e5e]
            "
          >
            Register
          </Link>
        </p>

      </AuthCard>
    </main>
  );
}