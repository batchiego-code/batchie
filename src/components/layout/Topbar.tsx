type Props = {
  title: string;
};

export default function Topbar({
  title,
}: Props) {
  return (
    <header
      className="
        sticky
        top-0
        z-20
        border-b
        border-[#e8b4b8]/20
        backdrop-blur-md
      "
      style={{
        background: "transparent",
      }}
    >
      <div className="px-10 py-6">
        <h1
          className="
            text-3xl
            font-semibold
            text-[#6b5e5e]
          "
        >
          {title}
        </h1>

        <p
          className="
            mt-1
            text-sm
            text-[#6b5e5e]/60
          "
        >
          Track your batches, orders & treasures ✦
        </p>
      </div>
    </header>
  );
}