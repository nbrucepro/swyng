import React from "react";

const Banner = () => {
  return (
    <div className="w-screen border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-col flex-wrap mx-auto p-4">
        <p className="text-5xl bold mt-16">Go wherever,</p>
        <p className="text-5xl bold mt-4">whenever</p>
        <p className="text-2xl my-12 w-[50%] text-gray-300">Swyng is the all-in-one mobility app. Get picked up by a top-rated driver in minutes and enjoy a comfortable ride to wherever you’re going; or skip the traffic entirely on one of our industry-leading scooters.</p>
        <button className="bg-green-400 rounded-full w-40 p-3">Get the app</button>
      </div>
    </div>
  );
};

export default Banner;
