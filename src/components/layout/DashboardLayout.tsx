import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function DashboardLayout({
  title,
  children,
}: Props) {
  return (
    <div
  className="
    min-h-screen
    flex
    relative
    overflow-hidden
  "
  style={{
    background:
      "#f7f3ef",
  }}
>
  <div
    className="
      absolute
      -top-32
      -left-32
      h-[500px]
      w-[500px]
      rounded-full
      opacity-20
      blur-3xl
    "
    style={{
      background: "#e8b4b8",
    }}
  />

  <div
    className="
      absolute
      top-0
      right-0
      h-[500px]
      w-[500px]
      rounded-full
      opacity-20
      blur-3xl
    "
    style={{
      background: "#c6b7e2",
    }}
  />

  <Sidebar />

  <div className="flex-1 relative z-10">
    <Topbar title={title} />

    <main
  className="
    p-8
    relative
    z-10
  "
>
      {children}
    </main>
  </div>
</div>
  );
}