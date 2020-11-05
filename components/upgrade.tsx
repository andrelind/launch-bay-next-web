import React from "react";
import { purple, red, yellow } from "../assets/colors";
import conditionData from "../assets/data/conditions";
import { Upgrade } from "../types";
import Error from "./error";
import XwingFont from "./fonts/xwing";
import FormattedText from "./formatted-text";
import Grants from "./grants";

type Props = {
  upgrade: Upgrade;
  side: number;
  showType: boolean;
  count?: number;
  limitWarning?: boolean;
  minimized: boolean;
};

const UpgradeComponent = ({
  upgrade,
  side,
  showType,
  count,
  limitWarning,
  minimized,
}: Props) => {
  let errorText;
  if (limitWarning) {
    errorText = `Only ${upgrade.limited} allowed in a squadron`;
  }

  let upgradeSide = upgrade.sides[side || 0];
  if (!upgradeSide) {
    upgradeSide = upgrade.sides[0];
  }
  const { attack, charges, force, device, conditions, grants } = upgradeSide;

  return (
    <div className="flex flex-1 flex-row items-center">
      {showType && (
        <div className="flex flex-col justify-center">
          {upgradeSide.slots.map((s, i) => (
            <XwingFont className="mr-1" key={`${s}_${i}`} icon={s} />
          ))}
        </div>
      )}

      <div className="flex flex-1 flex-col justify-center mx-1">
        <div className="flex flex-row items-center">
          <span className="text-sm font-medium">
            {upgrade.limited > 0 && `${"•".repeat(upgrade.limited)} `}
            {upgradeSide.title.en}
            {count !== undefined && (
              <span className="text-grey-400"> ({count})</span>
            )}
          </span>

          {force && (
            <div className="flex flex-row items-center ml-1">
              <XwingFont icon="Force Power" color={purple} />
              {force.recovers === 1 && (
                <XwingFont icon="recurring" color={purple} />
              )}
              <span className="text-sm" style={{ color: purple }}>
                {force.value}
              </span>
            </div>
          )}

          {charges && (
            <div className="flex flex-row items-center ml-1">
              <XwingFont icon="charge" color={yellow} />
              {charges.recovers === 1 && (
                <XwingFont icon="recurring" color={yellow} />
              )}
              <span className="text-sm" style={{ color: yellow }}>
                {charges.value}
              </span>
            </div>
          )}
        </div>

        {!minimized && upgradeSide.ability && (
          <FormattedText text={upgradeSide.ability.en} />
        )}
        {!minimized && upgradeSide.text && (
          <FormattedText text={upgradeSide.text.en} fontStyle="italic" />
        )}

        {!minimized && device && (
          <FormattedText text={`<strong>Effect:</strong> ${device.effect}`} />
        )}

        {!minimized &&
          conditions &&
          conditions.map((c) => {
            const condition = conditionData.find((cc) => cc.xws === c);
            return (
              <FormattedText
                key={c}
                text={`<strong>${condition?.name}:</strong> ${condition?.ability}`}
              />
            );
          })}

        {errorText && <Error text={errorText} />}
      </div>

      <div className="flex flex-col items-end ml-1">
        <span className="text-sm font-medium">{upgrade.finalCost}</span>
        {!minimized && attack && attack.ordnance && (
          <XwingFont icon="ordnance" />
        )}
        {!minimized && attack && (
          <div className="flex flex-grow flex-col justify-center ml-1 mt-1">
            <span className="text-center">
              <XwingFont icon={attack.arc} color={red} />
              <span className="font-medium text-lbnred">{attack.value}</span>
            </span>
            <span className="font-medium text-center mt-1">
              {attack.minrange !== attack.maxrange &&
                `${attack.minrange}-${attack.maxrange}`}
              {attack.minrange === attack.maxrange && `${attack.minrange}`}
            </span>
          </div>
        )}
        {!minimized && grants && <Grants grants={grants} />}
      </div>
    </div>
  );
};

export default UpgradeComponent;
