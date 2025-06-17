const links = [
  { label: "about", href: "#" },
  { label: "disclaimer", href: "#" },
  { label: "privacy policy", href: "#" },
  { label: "terms and condition", href: "#" },
];

const LegalLinks = () => (
  <div className="md:h-48 bg-white flex flex-col justify-center items-center gap-16 py-8">
    <nav className="w-xl flex md:flex-row flex-col items-center justify-between text-slate-800 capitalize ">
      {links.map(({ label, href }) => (
        <a key={label} href={href} className="hover:underline w-fit">
          {label}
        </a>
      ))}
    </nav>
    <p className="text-sm text-slate-500">2025 by mah</p>
  </div>
);

export default LegalLinks;
