import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-[#DFDFDF] bg-[#6B705C] rounded-[10px] outline-none ${styles}`}>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSess0ebKx8aclb7T8vFoGTSgtQuDTuEQu5ZwdXnAi0f8nu3wA/viewform">Sign up</a>
  </button>
);

export default Button;