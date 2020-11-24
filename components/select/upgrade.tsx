import React from "react";
import { components } from "react-select";
import { XwingFont } from "../fonts/xwing";
import UpgradeComponent from "../upgrade";

export const UpgradeSingleValue = ({ data }: any) => (
  <div className="flex flex-1">
    <UpgradeComponent
      upgrade={data.upgrade}
      showType={true}
      side={0}
      count={undefined}
      minimized={true}
    />
  </div>
);

export const UpgradeOption = ({ data, ...rest }: any) => (
  // @ts-ignore
  <components.Option {...rest}>
    <div className="flex flex-1" key={data.upgrade.uid}>
      <UpgradeComponent
        upgrade={data.upgrade || ""}
        showType={true}
        side={0}
        count={undefined}
        minimized={true}
      />
    </div>
  </components.Option>
);

export const UpgradePlaceholder = (props: any) => (
  // @ts-ignore
  <components.Placeholder {...props}>
    <span className="text-gray-500">
      <XwingFont icon={props.children} className="mr-1" />
      <span className="text-xs sm:text-sm mx-1">{props.children}</span>
    </span>
  </components.Placeholder>
);
