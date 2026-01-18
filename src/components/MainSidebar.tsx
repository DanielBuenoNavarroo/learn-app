"use client";

import {
  BookOpen,
  BrainCircuit,
  FileText,
  LayoutDashboard,
  LogOut,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUI } from "@/hooks/use-ui";

const MainSidebar = () => {
  const { toggleSidebar, sidebarOpen } = useUI();
  const pathName = usePathname();

  const handleLogout = () => {};

  const navLinks = [
    { to: "/dashboard", icon: LayoutDashboard, text: "Dashboard" },
    { to: "/documents", icon: FileText, text: "Documents" },
    { to: "/flashcards", icon: BookOpen, text: "Flashcards" },
    { to: "/profile", icon: User, text: "Profile" },
  ];

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={toggleSidebar}
      ></div>
      <aside
        className={cn(
          "fixed top-0 left-0 h-full w-64 backdrop-blur-lg border-r z-50 md:relative md:w-64 md:shrink-0 md:flex md:flex-col md:translate-x-0 transition-transform ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo and close for mobile */}
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-linear-to-br from-emerald-400 to-teal-500 shadow-md shadow-emerald-500/20">
              <BrainCircuit size={20} strokeWidth={2.5} />
            </div>
            <h1 className="text-sm md:text-base font-bold tracking-tight">
              Learning App
            </h1>
          </div>
          <Button
            onClick={toggleSidebar}
            className="md:hidden"
            variant={"ghost"}
          >
            <X size={24} />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              onClick={toggleSidebar}
              className={cn(
                "group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200",
                pathName === link.to
                  ? "bg-linear-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/25 text-white"
                  : "hover:text-emerald-500/70",
              )}
            >
              <>
                <link.icon
                  size={18}
                  strokeWidth={2.5}
                  className={cn(
                    "transition-transform duration-200",
                    pathName === link.to ? "" : "group-hover:scale-110",
                  )}
                />
                {link.text}
              </>
            </Link>
          ))}
        </nav>

        {/* logout */}
        <div className="px-3 py-4 border-t">
          <Button
            onClick={handleLogout}
            className="group gap-3 w-full px-4 py-2.5 text-sm font-semibold hover:bg-red-50 hover:text-red-600 transition-all duration-200"
          >
            <LogOut
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            Logout
          </Button>
        </div>
      </aside>
    </>
  );
};

export default MainSidebar;
