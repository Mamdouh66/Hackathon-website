import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
const navbar = () => {
  return (
    <nav className="w-fill flex py-6 justift-between items-center navbar">
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />

      {/* continue here with ulr* */}
    </nav>
  );
};

export default navbar;
