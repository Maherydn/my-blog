import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { WriteButton } from "./WriteButton";

export const Header = () => {
  return (
    <div className="h-20 w-full px-12 py-4 flex items-center justify-between border-b-slate-400 shadow ">
      <Logo />
      <NavMenu />
      <WriteButton />
    </div>
  );
};
