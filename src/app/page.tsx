import Hero from "@/components/landing/Hero";
import FeaturePanel from "@/components/landing/FeaturePanel";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f3ef]">

      {/* DOT PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#6b5e5e 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

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
          opacity: 0.65,
        }}
      />

      {/* LILAC GLOW */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[550px]
          h-[550px]
          rounded-full
          blur-[160px]
        "
        style={{
          background: "#c6b7e2",
          opacity: 0.65,
        }}
      />

      {/* SPARKLES */}

<div className="absolute top-28 left-[18%] text-[#c6b7e2] text-2xl animate-pulse">
  ✦
</div>

<div className="absolute top-40 left-[35%] text-[#e8b4b8] text-xl animate-pulse">
  ✧
</div>

<div className="absolute top-48 right-[28%] text-[#e8b4b8] text-3xl animate-pulse">
  ✦
</div>

<div className="absolute top-24 right-[15%] text-[#c6b7e2] text-xl animate-pulse">
  ✧
</div>

<div className="absolute top-[38%] right-[8%] text-[#e8b4b8] text-xl animate-pulse">
  ✦
</div>

<div className="absolute top-[55%] left-[8%] text-[#c6b7e2] text-lg animate-pulse">
  ✧
</div>

<div className="absolute bottom-36 right-[12%] text-[#c6b7e2] text-2xl animate-pulse">
  ✦
</div>

<div className="absolute bottom-24 right-[28%] text-[#e8b4b8] text-xl animate-pulse">
  ✧
</div>

<div className="absolute bottom-20 left-[12%] text-[#e8b4b8] text-xl animate-pulse">
  ✦
</div>

<div className="absolute bottom-40 left-[25%] text-[#c6b7e2] text-lg animate-pulse">
  ✧
</div>

      {/* NAVBAR */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div
              className="
                w-14
                h-14
                rounded-full
                bg-[#e8b4b8]
                flex
                items-center
                justify-center
              "
            >
              🐿️
            </div>

            <h2
              className="
                text-3xl
                font-semibold
                tracking-tight
                text-[#6b5e5e]
              "
            >
              Batchie GO
            </h2>

          </div>

          <div className="flex items-center gap-4">

            <a
              href="/login"
              className="
                px-5
                py-3
                text-[#6b5e5e]
              "
            >
              Login
            </a>

            <a
              href="/register"
              className="
                rounded-2xl
                bg-[#e8b4b8]/80
                px-5
                py-3
                text-sm
                font-medium
                transition-all
                hover:bg-[#e8b4b8]
              "
            >
              Register
            </a>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10">
        <div
          className="
            max-w-7xl
            mx-auto
            px-8
            pt-12
            pb-24
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >
          <Hero />
          <FeaturePanel />
        </div>
      </section>

    </div>
  );
}