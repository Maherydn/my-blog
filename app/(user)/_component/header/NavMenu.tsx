// import { SearchIcon } from "../../_assets/icon";

const navLinks = [
  { label: "Food", href: "/food" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Tech", href: "/tech" },
  { label: "Money", href: "/money" },
];

export const NavMenu = () => {
  return (
    <div className="md:w-4xl lg:flex h-full justify-center items-center hidden ">
      <ul className="flex-1 hidden md:flex justify-around items-center text-slate-500 dark:text-white/80 capitalize">
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
      {/* <div className="h-8 w-8 cursor-pointer">
        <SearchIcon />
      </div> */}
    </div>
  );
};
