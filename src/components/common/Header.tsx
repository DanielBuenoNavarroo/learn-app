"use client";

import { Bell, Menu, User } from "lucide-react";
import { Session } from "next-auth";
import { Button } from "../ui/button";
import { useUI } from "@/hooks/use-ui";

interface Props {
  session: Session | null;
}

const Header = ({ session }: Props) => {
  const { toggleSidebar } = useUI();

  return (
    <header className="sticky top-0 z-40 w-full h-16 px-4 backdrop-blur-xl border-b flex justify-between items-center">
      <div className="flex items-center justify-between h-full">
        <Button variant={"ghost"} onClick={toggleSidebar} className="md:hidden">
          <Menu size={24} />
        </Button>
      </div>
      <div className="hidden md:block"></div>
      <div className="flex items-center gap-3">
        <Button className="relative inline group" variant={"ghost"}>
          <Bell
            size={20}
            strokeWidth={2}
            className="group-hover:scale-110 transition-transform duration-200"
          />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </Button>
        <div className="flex items-center gap-3 pl-3 border-l">
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-xl cursor-pointer group">
            <div className="w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-200">
              <User size={18} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-sm font-semibold">
                {session?.user.name || "User"}
              </p>
              <p className="text-xs">
                {session?.user.email || "user@example.com"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
