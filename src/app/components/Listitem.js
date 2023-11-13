import React from "react";

const Listitem = ({itemname}) => {
   return (
    <li>
            <a
            href="#"
            className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
            >
            {itemname}
            </a>
    </li>
  );
};

export default Listitem;
