import React from "react";

function Card({ customClass, children }) {
  return (
    <div
      className={`${customClass} flex flex-col justify-center items-center p-5 w-52 rounded-2xl shadow-black shadow-md overflow-hidden`}
    >
      {children}
    </div>
  );
}

export default Card;
