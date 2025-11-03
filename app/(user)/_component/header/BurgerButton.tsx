"use client";

import { MenuBurgerIcon } from "../../_assets/icon";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const BurgerButton = ({ isOpen, toggle }: Props) => (
  <div className="lg:hidden block w-fit h-fit z-50" onClick={toggle}>
    <MenuBurgerIcon isOpen={isOpen} />
  </div>
);

export default BurgerButton;
