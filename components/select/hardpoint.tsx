import React from "react";
import { components } from "react-select";
import { XwingFont } from "../fonts/xwing";

export const HardpointSingleValue = () => (
  <div className="flex flex-1">
    <div className="flex flex-1 flex-row items-center text-xs sm:text-sm">
      <div className="flex flex-col justify-center">
        <XwingFont className="mr-1" icon={"Hardpoint"} />
      </div>

      <div className="flex flex-1 flex-col justify-center mx-1">
        <div className="flex flex-row items-center">
          <span>{"Hardpoint"}</span>
        </div>
      </div>
    </div>
  </div>
);

export const HardpointOption = ({ data, ...rest }: any) => (
  // @ts-ignore
  <components.Option {...rest}>
    <div className="flex flex-1">
      <div className="flex flex-1 flex-row items-center">
        <div className="flex flex-col justify-center">
          <XwingFont className="mr-1" icon={data.label || "Hardpoint"} />
        </div>

        <div className="flex flex-1 flex-col justify-center mx-1">
          <div className="flex flex-row items-center">
            <span className="text-xs sm:text-sm">
              {data.label || "Hardpoint"}
            </span>
          </div>
        </div>
      </div>
    </div>
  </components.Option>
);

export const HardpointPlaceholder = (props: any) => (
  // @ts-ignore
  <components.Placeholder {...props}>
    <div className="flex flex-1">
      <div className="flex flex-1 flex-row items-center text-gray-500">
        <div className="flex flex-col justify-center">
          <XwingFont className="mr-1" icon={"Hardpoint"} />
        </div>

        <div className="flex flex-1 flex-col justify-center mx-1">
          <div className="flex flex-row items-center">
            <span className="text-xs sm:text-sm">{"Hardpoint"}</span>
          </div>
        </div>
      </div>
    </div>
  </components.Placeholder>
);
