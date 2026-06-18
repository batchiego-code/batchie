type FeatureCardProps = {
  emoji: string;
  title: string;
  description: string;
  featured?: boolean;
};

export default function FeatureCard({
  emoji,
  title,
  description,
  featured = false,
}: FeatureCardProps) {
  return (
    <div
      className={`
  rounded-[32px]
  border
  border-white/50
  ${
    featured
      ? "bg-gradient-to-r from-white to-[#fff6f7]"
      : "bg-white/80"
  }
  backdrop-blur-md
  shadow-[0_10px_40px_rgba(198,183,226,0.12)]
  transition-all
  duration-300
  hover:-translate-y-1
  hover:shadow-[0_20px_60px_rgba(198,183,226,0.18)]
  ${
    featured
      ? "p-9 scale-[1.03] border-[#e8b4b8]/50"
      : "p-7"
  }
`}
    >
      <div className="flex items-start gap-5">

        <div
          className={`
            ${
              featured
                ? "text-5xl"
                : "text-4xl"
            }
          `}
        >
          {emoji}
        </div>

        <div className="flex-1">
            {featured && (
  <div
    className="
      mb-3
      inline-flex
      rounded-full
      bg-[#e8b4b8]/20
      px-3
      py-1
      text-xs
      font-medium
      text-[#6b5e5e]
    "
  >
    ✨ Featured
  </div>
)}
          <h3
            className={`
              font-semibold
              text-[#6b5e5e]
              ${
                featured
                  ? "text-3xl"
                  : "text-2xl"
              }
            `}
          >
            {title}
          </h3>

          <p
            className="
              mt-2
              text-base
              text-[#6b5e5e]/70
            "
          >
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}