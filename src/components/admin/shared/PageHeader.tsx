import Link from "next/link";

type Props = {
  badge: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function PageHeader({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
}: Props) {
  return (
    <div
      className="
        mb-8
        flex
        items-start
        justify-between
      "
    >
      <div>
        <span
          className="
            inline-flex
            rounded-full
            bg-[#e8b4b8]/20
            px-3
            py-1
            text-sm
            font-medium
            text-[#6b5e5e]
          "
        >
          {badge}
        </span>

        <h1
          className="
            mt-3
            text-4xl
            font-semibold
            text-[#6b5e5e]
          "
        >
          {title}
        </h1>

        {description && (
          <p
            className="
              mt-2
              text-[#6b5e5e]/70
            "
          >
            {description}
          </p>
        )}
      </div>

      {buttonHref && buttonText && (
        <Link
          href={buttonHref}
          className="
            rounded-2xl
            bg-[#e8b4b8]
            px-5
            py-3
            font-medium
            text-[#6b5e5e]
            shadow-lg
            transition-all
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}