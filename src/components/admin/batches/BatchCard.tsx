"use client";

import Link from "next/link";

import { Batch } from "@/types/batch";
import StatusBadge from "@/components/admin/shared/StatusBadge";

type Props = {
  batch: Batch;
};

export default function BatchCard({
  batch,
}: Props) {
  return (
    <Link
      href={`/admin/batches/${batch.id}`}
      className="
        block
        rounded-[32px]
        bg-white
        p-6
        shadow-lg
        transition-all
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-sm
            font-medium
            text-[#6b5e5e]/60
          "
        >
          {batch.batch_code}
        </span>

        <StatusBadge
          status={batch.status}
        />
      </div>

      <h2
        className="
          mt-4
          text-2xl
          font-semibold
          text-[#6b5e5e]
        "
      >
        {batch.batch_id}
      </h2>

      <p
        className="
          mt-3
          text-[#6b5e5e]/80
        "
      >
        {batch.batch_name}
      </p>

      <div
        className="
          mt-6
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-xs
            text-[#6b5e5e]/50
          "
        >
          Created
        </span>

        <span
          className="
            text-xs
            text-[#6b5e5e]/60
          "
        >
          {new Date(
            batch.created_at
          ).toLocaleDateString()}
        </span>
      </div>
    </Link>
  );
}