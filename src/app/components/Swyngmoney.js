"use client";
import React, { useState } from "react";
import Swyngbutton from "./Swyngbutton";
import Swyngcard from "./Swyngcard";
import Swyngmopts from "./Swyngmopts";

const Swyngmoney = () => {
  const [option, setOption] = useState(1);
  return (
    <div className="w-screen border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-col flex-wrap mx-auto p-4 my-20">
        <div className="flex flex-col w-100 mx-auto mb-10">
          <h3 className="text-black text-5xl font-bold mb-5">
            Earn Money With Swyng
          </h3>
          <div className="flex">
            <Swyngbutton
              handleClicked={() => setOption(1)}
              swidth={"w-30"}
              spadding={"px-5 py-1 mx-1"}
              sborder={"border border-1 border-gray-400"}
              stxtcolor={option == 1 ? "text-white" : "text-black"}
              sbgcolor={option == 1 ? "bg-black" : "bg-white"}
              slabel={"Driver"}
            />
            <Swyngbutton
              handleClicked={() => setOption(2)}
              swidth={"w-30"}
              spadding={"px-5 py-1 mx-1"}
              sborder={"border border-1 border-gray-400"}
              stxtcolor={option == 2 ? "text-white" : "text-black"}
              sbgcolor={option == 2 ? "bg-black" : "bg-white"}
              slabel={"Courier"}
            />
            <Swyngbutton
              handleClicked={() => setOption(3)}
              swidth={"w-30"}
              spadding={"px-5 py-1 mx-1"}
              sborder={"border border-1 border-gray-400"}
              stxtcolor={option == 3 ? "text-white" : "text-black"}
              sbgcolor={option == 3 ? "bg-black" : "bg-white"}
              slabel={"Retaurant or store owner"}
            />
            <Swyngbutton
              handleClicked={() => setOption(4)}
              swidth={"w-30"}
              spadding={"px-5 py-1 mx-1"}
              sborder={"border border-1 border-gray-400"}
              stxtcolor={option == 4 ? "text-white" : "text-black"}
              sbgcolor={option == 4 ? "bg-black" : "bg-white"}
              slabel={"Fleet owner"}
            />
          </div>
        </div>
        <div className="flex">
          {option == 1 ? (
            <>
              <Swyngcard />
              <Swyngmopts 
               swyngmoptp={[
                {
                  title: "Drive and earn money",
                  description: "Drive more, earn more",
                  additionalInfo:
                    "Our 150+ million riders will send you plenty of ride requests. When demand is high, you can earn even more."
                },
                {
                  description: "Set your schedule",
                  additionalInfo:
                    "Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving around your lifestyle."
                },
              ]}
              />
            </>
          ) : option == 2 ? (
            <>
              <Swyngcard />
              <Swyngmopts />
            </>
          ) : option == 3 ? (
            <>
              <Swyngcard />
              <Swyngmopts />
            </>
          ) : (
            <>
              <Swyngcard />
              <Swyngmopts />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Swyngmoney;
