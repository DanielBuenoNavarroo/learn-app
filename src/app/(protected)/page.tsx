import MainSidebar from "@/components/MainSidebar";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full flex flex-col">
      <header className="border-b flex justify-between items-center p-4">
        <div></div>
        <ModeToggle />
      </header>
      <main className="flex-1 grid grid-cols-[180px_auto]">
        <MainSidebar />
        Hola
      </main>
    </div>
  );
}
