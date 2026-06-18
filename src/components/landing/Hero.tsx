import Link from "next/link";

export default function Hero() {
  return (
    <div className="max-w-2xl">

      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-[#e8b4b8]
          bg-white/60
          px-5
          py-3
          text-sm
          text-[#6b5e5e]
          backdrop-blur-md
        "
      >
        🐿️ Your Batch Bestie
      </div>

      <h1
        className="
          mt-8
          text-5xl
          xl:text-7xl
          font-semibold
          tracking-tight
          leading-[1.05]
          text-[#6b5e5e]
        "
      >
        A cozy place for
        <br />
        every{" "}
        <span className="text-[#e8b4b8]">
          wishlist.
        </span>
      </h1>

      <p
        className="
          mt-8
          max-w-lg
          text-xl
          leading-9
          text-[#6b5e5e]/80
        "
      >
        Whether you're hunting for albums,
        merch, photocards, or rare finds,
        Batchie keeps everything organized
        so you can enjoy collecting without
        the chaos.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">

        <Link
          href="/register"
          className="
            rounded-2xl
            bg-[#e8b4b8]
            px-8
            py-4
            font-medium
            text-[#6b5e5e]
            shadow-xl
            shadow-[#e8b4b8]/40
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            hover:scale-[1.02]
          "
        >
          🩷 Explore Batches
        </Link>

        <Link
          href="/login"
          className="
            rounded-2xl
            border
            border-[#c6b7e2]
            bg-white/70
            backdrop-blur-md
            px-8
            py-4
            text-[#6b5e5e]
            transition-all
            duration-300
            hover:-translate-y-1
          "
        >
          📦 My Stash
        </Link>

      </div>

    </div>
  );
}