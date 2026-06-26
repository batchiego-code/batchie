import { batchStatusMap } from "@/lib/constants/batchStatus";

type Props = {
  status: string;
};

export default function StatusBadge({
  status,
}: Props) {
  const config =
    batchStatusMap[status] ?? {
      label: status,
      color: "bg-zinc-100 text-zinc-700",
    };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        ${config.color}
      `}
    >
      {config.label}
    </span>
  );
}