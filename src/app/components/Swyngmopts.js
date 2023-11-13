import React from "react";
import Swyngbutton from "./Swyngbutton";

const Swyngmopts = ({swyngmoptp}) => {
 return (
    <div className="sm:m-10 px-10 sm:block hidden">
     {swyngmoptp?.map((swyngmoptp,index)=>(
      <>
      <h1 className="text-3xl text-gray-800 font-bold mb-5">         
        {swyngmoptp?.title}        
      </h1>
      <div className="flex gap-x-3">
        <div className="relative w-10 h-7 flex justify-center items-center rounded-full bg-green-500">
          {index + 1}
        </div>
        <div className="grow pt-0.5 pb-2">
          <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-black">
            {swyngmoptp?.description}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {swyngmoptp?.additionalInfo}     
          </p>
        </div>
      </div>
      </>
      ))}
      <Swyngbutton sbgcolor={"bg-gray-100"} stxtcolor={"text-black"} swidth={"w-30"} spadding={"py-3 mt-5 px-5"} slabel={"Learn More"}/>
    </div>
  );
};

export default Swyngmopts;
