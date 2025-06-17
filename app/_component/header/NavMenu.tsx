import { SearchIcon } from "@/app/_assets/icon";

const navLinks = [
  { label: "Food hub", href: "/blabla" },
  { label: "Fitness & health hub", href: "/blabla" },
  { label: "Tech hub", href: "/blabla" },
  { label: "Money hub", href: "/blabla" },
];

export const NavMenu = () => {
  return (
    <div className="w-4xl flex h-full justify-center items-center">
      <ul className="flex-1 hidden md:flex justify-around items-center text-slate-500 capitalize">

        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="hover:text-slate-800 transition-colors duration-200 text-2xl font-semibold"
              aria-label={label}
            >
              {label}
            </a>
          </li>
        ))}
    
      </ul>
      <div className="h-8 w-8 cursor-pointer">
        <SearchIcon />
      </div>
    </div>
  );
};
