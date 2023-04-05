import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-[#DFDFDF] bg-[#6B705C] rounded-[10px] outline-none ${styles}`}>
    <a href="https://formaloo.net/vwxmt">Sign up</a>
  </button>
);

export default Button;