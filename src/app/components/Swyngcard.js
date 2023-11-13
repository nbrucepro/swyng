import React from "react";

const Swyngcard = ({imgsrc}) => {
  return (
    <div className="max-h-100 max-w-lg rounded-2xl bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="max-h-100 rounded-2xl" src={imgsrc} alt="driver" />   
    </div>
  );
};

export default Swyngcard;
