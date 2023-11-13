import React from "react";
import Swyngbutton from "./Swyngbutton";

const Listitem = ({itemname}) => {
   return (
    <li>
            {itemname == "Sign up" ? (
                        <a
                        // href="#"
                        className="py-2 px-3 rounded-full text-black bg-white"
                        >
                        {itemname}
                        </a>
            )
            :(
                <a
            href="#"
            className="block py-1 px-3 text-white rounded md:bg-transparent"
            >
            {itemname}
            </a>
            )}
    </li>
  );
};

export default Listitem;
