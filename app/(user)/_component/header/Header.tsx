"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { LogOut, LogIn } from "lucide-react";
import NavMenuMobile from "./NavMenuMobile";
import BurgerButton from "./BurgerButton";
import { logout } from "../../_lib/axios";
import ThemeToggle from "../ThemeToggle";

export const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  // Vérifie le token au montage du composant
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  // Fonction handleClick corrigée : async
  const handleClick = async () => {
    if (token) {
      // Déconnexion via API
      await logout();
      setToken(null); // met à jour l'état
    } else {
      // Redirection vers login
      router.push("/login");
    }
  };

  return (
    <div className="fixed bg-white z-50 h-20 w-full md:px-12 px-4 py-4 flex items-center justify-between border-b border-slate-400 shadow dark:bg-[#1f1f1f]">
      <Logo />
      <NavMenu />

      {/* Menu mobile */}
      {isOpen && <NavMenuMobile closeMenu={() => setIsOpen(false)} />}

      {/* Burger button */}
      <BurgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      <div className="hidden lg:block">
        <ThemeToggle />
      </div>

      {/* Login / Logout */}
      <button
        onClick={handleClick}
        className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-full transition cursor-pointer ${
          token
            ? "bg-red-500/90 text-white hover:bg-red-600"
            : "bg-blue-500/90 text-white hover:bg-blue-600"
        }`}
      >
        {token ? <LogOut size={20} /> : <LogIn size={20} />}
        {token ? "Logout" : "Login"}
      </button>
    </div>
  );
};
