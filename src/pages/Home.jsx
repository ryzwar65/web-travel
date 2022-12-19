import React from "react";
import BackgroundDecore from "../assets/BackgroundDecore";
import ImageDecorate from "../assets/ImageDecorate";
import Button from "../components/Button";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="flex flex-col md:hidden">
        <div className="absolute w-full">
          <BackgroundDecore />
        </div>
        <div className="z-10">
          <Navbar />
        </div>
        <div className="flex flex-col z-10 p-3">
          <p className="font-bold uppercase text-[#DF6951] text-md">
            Best Destinations around the world
          </p>
          <p className="font-bold text-[#181E4B] text-6xl py-3">
            Travel, enjoy and live a new and full life
          </p>
          <p className="font-bold text-[#5E6282] text-lg">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex space-x-4 py-5">
            <Button
              type={"button"}
              customClass={`text-white bg-[#F1A501] shadow w-18`}
            >
              Find out More
            </Button>
            <Button
              type={"button"}
              customClass={`text-white bg-[#F1A501] shadow w-18`}
            >
              Find out More
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col md:w-screen md:min-w-full md:max-w-screen-lg md:px-36">
        <div className="absolute top-0 bottom-0 right-0 z-0">
          <BackgroundDecore width={704} height={724} />
        </div>
        <div className="flex z-10">
          <Navbar />
        </div>
        <div className="flex  items-center justify-evenly z-10">
          <div className="flex flex-col">
            <p className="font-bold uppercase text-[#DF6951] text-xl">
              Best Destinations around the world
            </p>
            <p className="font-bold text-[#181E4B] text-6xl py-10">
              Travel, enjoy and live a new and full life
            </p>
            <p className="font-bold text-[#5E6282] text-lg">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="flex space-x-10 py-10">
              <Button
                type={"button"}
                customClass={`text-white bg-[#F1A501] shadow w-44`}
              >
                Find out More
              </Button>
              <Button
                type={"button"}
                customClass={`text-white bg-[#F1A501] shadow w-44`}
              >
                Find out More
              </Button>
            </div>
          </div>
          <div className="flex px-16">
            <ImageDecorate />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
