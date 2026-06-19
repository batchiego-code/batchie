"use client";

import Link from "next/link";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import AuthCard from "@/components/auth/AuthCard";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Account created successfully. Please check your email."
    );
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
      {/* PINK GLOW */}
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

      {/* LILAC GLOW */}
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
              text-3xl
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
            Create your collector space.
          </p>

        </div>

        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-4"
        >

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
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
              shadow-lg
              shadow-[#e8b4b8]/30
              hover:shadow-xl
              py-4
              font-medium
              text-[#6b5e5e]
              transition-all
              hover:-translate-y-1
            "
          >
            Create Account
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
          Already have an account?{" "}
          <Link
            href="/login"
            className="
              font-medium
              text-[#6b5e5e]
            "
          >
            Login
          </Link>
        </p>

      </AuthCard>
    </main>
  );
}