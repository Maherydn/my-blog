"use client";

import Link from "next/link";
import { logout } from "../../_lib/axios";
import ThemeToggle from "../ThemeToggle";

interface NavMenuMobileProps {
  closeMenu: () => void;
}

const navLinks = [
  { label: "Food", href: "/food" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Tech", href: "/tech" },
  { label: "Money", href: "/money" },
];

const NavMenuMobile = ({ closeMenu }: NavMenuMobileProps) => {
  const handleLogout = async () => {
    closeMenu();
    await logout();
  };

  return (
    <div className="fixed top-0 right-0 w-full h-screen bg-gray-900/80 backdrop-blur-md p-10 flex flex-col items-center justify-center gap-10 text-white lg:hidden capitalize z-20">
      <div className="absolute top-6 left-6">
        <ThemeToggle />
      </div>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={closeMenu}
          className="text-2xl hover:text-yellow-300"
        >
          {link.label}
        </Link>
      ))}

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500/80 h-12 w-40 text-lg rounded-md capitalize hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default NavMenuMobile;
