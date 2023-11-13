import React from "react";

const Swyngservicecard = () => {
  return (
    <div class="relative flex max-w-[24rem] flex-col rounded-3xl bg-gray-100 bg-clip-border text-gray-700">
      <div class="p-6">
        <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Rides
        </h4>
        <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed w-[15rem] text-gray-400">
         Request in second, ride in minutes
        </p>
      </div>
      <div class="flex justify-between">
        <div></div>
        <div className="w-[8rem]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="services"
            className="h-100 w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Swyngservicecard;
