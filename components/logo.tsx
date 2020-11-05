import React from "react";
import XwingFont from "./fonts/xwing";

export const LogoComponent = () => (
  <div className="flex flex-row ml-2 items-center">
    <XwingFont icon={"Coordinate"} className="text-lbnred text-2xl mr-1" />
    <div>
      <div className="text-gray-400 text-sm font-thin">{"André Lind's"}</div>
      <div className="text-md font-medium text-lbnred">
        Launch Bay <span className="font-thin">NEXT</span>
      </div>
    </div>
  </div>
);

export default LogoComponent;
