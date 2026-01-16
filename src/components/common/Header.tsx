import { User } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { Session } from "next-auth";

interface Props {
  session: Session | null;
}

const Header = ({ session }: Props) => {
  return (
    <header className="border-b flex justify-between items-center p-4">
      <div></div>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <div className="flex items-center gap-3 pl-3 border-l border-slate-200/60">
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
