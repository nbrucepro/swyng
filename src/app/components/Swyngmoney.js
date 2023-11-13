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
        <div className="flex md:flex-row flex-col">
          {option == 1 ? (
            <>
              <Swyngcard imgsrc={"./images/driver.png"}/>
              <Swyngmopts
                swyngmoptp={[
                  {
                    title: "Drive and earn money",
                    description: "Drive more, earn more",
                    additionalInfo:
                      "Our 150+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.",
                  },
                  {
                    description: "Set your schedule",
                    additionalInfo:
                      "Drive for as long and as often as you like. Weekdays; weekends; evenings — fit driving around your lifestyle.",
                  },
                  {
                    description: "Get paid each week",
                    additionalInfo:
                      "You’ll receive your earnings at the end of each week — no need to wait around for payday.",
                  },
                ]}
              />
            </>
          ) : option == 2 ? (
            <>
              <Swyngcard imgsrc={"./images/courier.png"}/>
              <Swyngmopts
                swyngmoptp={[
                  {
                    title: "Make money delivering food",
                    description: "Earn extra income, fast",
                    additionalInfo:
                      "There’s no subscription fee. You’ll receive your earnings at the end of each week.",
                  },
                  {
                    description: "Make money whenever you like",
                    additionalInfo:
                      "You decide when and how often you deliver — weekdays, evenings, weekends, or just the occasional hour — it’s up to you.",
                  },
                  {
                    description: "Deliver your way",
                    additionalInfo:
                      "Bike, scooter or car — you choose how to make deliveries.",
                  },
                ]}
              />
            </>
          ) : option == 3 ? (
            <>
              <Swyngcard imgsrc={"./images/restaurant-store-owner.png"}/>
              <Swyngmopts
                swyngmoptp={[
                  {
                    title: "Increase your sales",
                    description: "Reach new customers",
                    additionalInfo:
                      "Millions of our users are ordering food or goods from restaurants and stores just like yours.",
                  },
                  {
                    description: "Increase your earnings",
                    additionalInfo:
                      "Our large network of users brings more customers and business to you.",
                  },
                  {
                    description: "Let us handle delivery",
                    additionalInfo:
                      "We’ll take care of the logistics, while you focus on running your business.",
                  },
                ]}
              />
            </>
          ) : (
            <>
              <Swyngcard imgsrc={"./images/fleet-owner.png"}/>
              <Swyngmopts
                swyngmoptp={[
                  {
                    title: "Grow your transport business",
                    description: "Boost your earnings",
                    additionalInfo:
                      "Our large rider community means more orders per day and higher earnings.",
                  },
                  {
                    description: "Manage your assets",
                    additionalInfo:
                      "Easily view your vehicles, drivers and their current status.",
                  },
                  {
                    description: "Keep track of performance",
                    additionalInfo:
                      "Get easy access to each driver’s completed trips, invoices, and payout information.",
                  },
                ]}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Swyngmoney;
