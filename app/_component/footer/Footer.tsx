import LegalLinks from "./LegalLinks";
import Contact from "./Contact";
import Social from "./Social";
import Subscribe from "./Subscribe";

export const Footer = () => {
  return (
    <div className="space-y-2">
      <div className="md:h-96 w-full bg-black flex md:flex-row flex-col items-center justify-center gap-24 py-28 px-4">
        <Subscribe />
        {/* Separator responsive */}
        <div
          className="hidden md:block w-px h-full bg-slate-200"
          aria-hidden="true"
        />
        <div
          className="md:hidden w-full h-px bg-slate-200"
          aria-hidden="true"
        />
        <Social />
      </div>

      <div>
        <Contact />
        <LegalLinks />
      </div>
    </div>
  );
};
