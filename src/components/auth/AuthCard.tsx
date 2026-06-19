type AuthCardProps = {
  children: React.ReactNode;
};

export default function AuthCard({
  children,
}: AuthCardProps) {
  return (
    <div
      className="
        w-full
        max-w-lg
        rounded-[32px]
        border
        border-white/50
        bg-white/80
        backdrop-blur-md
        p-8
        shadow-[0_10px_40px_rgba(198,183,226,0.15)]
      "
    >
      {children}
    </div>
  );
}