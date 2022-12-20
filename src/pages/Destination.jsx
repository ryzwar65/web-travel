import React from "react";

function Destination() {
  return (
    <div className="hidden md:w-full md:flex md:flex-col md:py-10 md:items-center md:justify-center md:space-x-10">
      <div className="flex">
        <div className="flex flex-col justify-center items-center">
          <div className="py-10">
            <p className="flex text-sm text-[#5E6282]">Top Selling</p>
          </div>
          <div className="pb-28">
            <p className="flex text-5xl font-bold text-[#14183E]">
              Top Destinations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
