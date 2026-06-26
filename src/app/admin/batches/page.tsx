"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import { Batch } from "@/types/batch";

import PageHeader from "@/components/admin/shared/PageHeader";
import BatchCard from "@/components/admin/batches/BatchCard";

export default function AdminBatchesPage() {
  const [loading, setLoading] =
    useState(true);

  const [batches, setBatches] =
    useState<Batch[]>([]);

  useEffect(() => {
    checkAdmin();
  }, []);

  async function checkAdmin() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    const { data: profile } =
      await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

    if (
      !profile ||
      profile.role !== "admin"
    ) {
      window.location.href =
        "/dashboard";
      return;
    }

    loadBatches();
  }

  async function loadBatches() {
    const { data, error } =
      await supabase
        .from("batches")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) {
      console.error(error);
      return;
    }

    setBatches(data || []);
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
    <main
      className="
        min-h-screen
        bg-[#f7f3ef]
        p-8
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
        "
      >
        <PageHeader
          badge="📦 Batch Management"
          title="Batches"
          description="Manage all purchase batches for Batchie GO."
          buttonText="+ New Batch"
          buttonHref="/admin/batches/create"
        />

        {batches.length === 0 ? (
          <div
            className="
              rounded-[32px]
              bg-white
              p-10
              text-center
              shadow-lg
            "
          >
            <p
              className="
                text-[#6b5e5e]/70
              "
            >
              No batches found.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {batches.map(
              (batch) => (
                <BatchCard
                  key={batch.id}
                  batch={batch}
                />
              )
            )}
          </div>
        )}
      </div>
    </main>
  );
}