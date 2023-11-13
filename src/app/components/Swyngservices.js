import React from "react";
import Swyngservicecard from "./Swyngservicecard";

const Swyngservices = () => {
  return (
    <div className="w-screen border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-col flex-wrap mx-auto p-4 my-20">
        <div className="flex flex-col w-100 mx-auto mb-10">
          <h3 className="text-black text-5xl font-bold mb-5">
             Our services
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3">
        <Swyngservicecard/>
        <Swyngservicecard/>
        <Swyngservicecard/>
        <Swyngservicecard/>
        <Swyngservicecard/>
        <Swyngservicecard/>
        </div>
      </div>
    </div>
  );
};

export default Swyngservices;
