"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Batch = {
  id: string;
  batch_id: string;
  batch_code: string;
  batch_name: string;
  status: string;
  notes: string | null;
  created_at: string;
};

const statuses = [
  "OPEN",
  "ORDERED",
  "SHIPPING_TO_WH",
  "ARRIVED_WH",
  "SHIPPING_TO_INA",
  "ARRIVED_INA",
  "ARRIVED_ADMIN",
  "SHIPPED",
  "COMPLETED",
  "CANCELLED",
  "REFUNDED",
];

export default function BatchDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [batch, setBatch] =
    useState<Batch | null>(null);

  const [status, setStatus] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadBatch();
  }, []);

  async function loadBatch() {
    const { data, error } =
      await supabase
        .from("batches")
        .select("*")
        .eq("id", params.id)
        .single();

    if (error) {
      console.error(error);
      return;
    }

    setBatch(data);
    setStatus(data.status);
    setLoading(false);
  }

  async function updateStatus() {
    const { error } =
      await supabase
        .from("batches")
        .update({
          status,
        })
        .eq("id", params.id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Status updated 🎉");
  }

  if (loading) {
    return (
      <main className="p-8">
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
          max-w-4xl
        "
      >
        <div
          className="
            rounded-[32px]
            bg-white
            p-8
            shadow-lg
          "
        >
          <h1
            className="
              text-4xl
              font-semibold
              text-[#6b5e5e]
            "
          >
            {batch?.batch_id}
          </h1>

          <p
            className="
              mt-2
              text-[#6b5e5e]/60
            "
          >
            {batch?.batch_code}
          </p>

          <div className="mt-8 space-y-4">

            <div>
              <p className="text-sm text-[#6b5e5e]/60">
                Batch Name
              </p>

              <p className="text-lg">
                {batch?.batch_name}
              </p>
            </div>

            <div>
              <p className="text-sm text-[#6b5e5e]/60">
                Notes
              </p>

              <p>
                {batch?.notes ||
                  "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-[#6b5e5e]/60 mb-2">
                Status
              </p>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#e8b4b8]/40
                  p-3
                "
              >
                {statuses.map(
                  (item) => (
                    <option
                      key={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>
            </div>

            <button
              onClick={
                updateStatus
              }
              className="
                mt-4
                rounded-2xl
                bg-[#e8b4b8]
                px-6
                py-3
                text-[#6b5e5e]
                font-medium
              "
            >
              Save Status
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}