"use client";

import { useRouter } from "next/navigation";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { WriteButton } from "./WriteButton";
import { LogOut } from "lucide-react";

export const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Exemple : supprimer token
    localStorage.removeItem("token");
    // Redirection après déconnexion
    router.push("/login");
  };

  return (
    <div className="fixed bg-white z-50 h-20 w-full md:px-12 px-4 py-4 flex items-center justify-between border-b-slate-400 shadow">
      <Logo />
      <NavMenu />
      <WriteButton />

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-4 py-2 bg-red-500/90 text-white rounded hover:bg-red-600 transition"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
};
