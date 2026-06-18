"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Profile = {
  user_code: string;
  name: string;
  email: string;
  role: string;
};

export default function DashboardPage() {
  const [profile, setProfile] =
    useState<Profile | null>(null);

  useEffect(() => {
    const getProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } =
        await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

      if (error) {
        console.error(error);
        return;
      }

      setProfile(data);
    };

    getProfile();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      {profile && (
        <div className="space-y-2">
          <p>Name: {profile.name}</p>
          <p>Code: {profile.user_code}</p>
          <p>Role: {profile.role}</p>
          <p>Email: {profile.email}</p>
        </div>
      )}
    </main>
  );
}