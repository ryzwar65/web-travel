import React from "react";
import SettingsIcon from "../assets/SettingsIcon";
import Card from "../components/Card";
import DecorateOne from "../assets/DecorateOne";

function Category() {
  return (
    <div className="hidden md:w-full md:flex md:flex-col md:py-10 md:items-center md:justify-center md:space-x-10">
      <div className="flex">
        <div className="absolute right-0">
          <DecorateOne width={153} height={166} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="py-10">
            <p className="flex uppercase text-sm text-[#5E6282]">CATEGORY</p>
          </div>
          <div className="pb-28">
            <p className="flex text-5xl font-bold text-[#14183E]">
              We Offer Best Services
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-10">
        <Card>
          <SettingsIcon width={77} height={66} />
          <p className="font-bold pt-3">Calculated Weather</p>
          <p className="text-sm text-center py-3">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </Card>
        <Card>
          <SettingsIcon width={77} height={66} />
          <p className="font-bold pt-3">Best Flights</p>
          <p className="text-sm text-center py-3">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </Card>
        <Card>
          <SettingsIcon width={77} height={66} />
          <p className="font-bold pt-3">Local Events</p>
          <p className="text-sm text-center py-3">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </p>
        </Card>
        <Card>
          <SettingsIcon width={77} height={66} />
          <p className="font-bold pt-3">Customization</p>
          <p className="text-sm text-center py-3">
            We deliver outsourced aviation services for military customers
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Category;
