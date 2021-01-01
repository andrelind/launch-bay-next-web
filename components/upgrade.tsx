import { purple, red, yellow } from 'lbn-core/dist/assets/colors';
import { Upgrade } from 'lbn-core/dist/types';
import React from 'react';
import XwingFont from './fonts/xwing';
import { FormattedText } from './formatted-text';
import Grants from './grants';

type Props = {
  upgrade: Upgrade;
  showType: boolean;
  count?: number;
  limitWarning?: boolean;
  minimized: boolean;
};

// TODO: Should show BOTH sides of a card!

const UpgradeComponent = ({ upgrade, showType, minimized }: Props) => {
  // let errorText;
  // if (limitWarning) {
  //   errorText = `Only ${upgrade.limited} allowed in a squadron`;
  // }

  return (
    <div className="divide-y divide-gray-200">
      {upgrade.sides.map((upgradeSide) => {
        const { attack, charges, force, device, grants } = upgradeSide;
        return (
          <div className="flex flex-1 flex-row items-center text-xs sm:text-sm">
            {showType && (
              <div className="flex flex-col justify-center hidden sm:visible">
                {upgradeSide.slots.map((s, i) => (
                  <XwingFont className="mr-1" key={`${s}_${i}`} icon={s} />
                ))}

                {force && (
                  <div className="flex flex-row items-center">
                    <XwingFont icon="Force Power" color={purple} />
                    {force.recovers === 1 && (
                      <XwingFont icon="recurring" color={purple} />
                    )}
                    <span style={{ color: purple }}>{force.value}</span>
                  </div>
                )}

                {charges && (
                  <div className="flex flex-row items-center ml-1">
                    <XwingFont icon="charge" color={yellow} />
                    {charges.recovers === 1 && (
                      <XwingFont icon="recurring" color={yellow} />
                    )}
                    <span style={{ color: yellow }}>{charges.value}</span>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-1 flex-col justify-center sm:mx-1">
              {!minimized && upgradeSide.ability && (
                <FormattedText text={upgradeSide.ability.en} />
              )}
              {!minimized && upgradeSide.text && (
                <FormattedText text={upgradeSide.text.en} fontStyle="italic" />
              )}

              {!minimized && device && (
                <FormattedText
                  text={`<strong>Effect:</strong> ${device.effect}`}
                />
              )}

              {/* {!minimized &&
          conditions &&
          conditions.map((c) => {
            const condition = conditionData.find((cc) => cc.xws === c);
            return (
              <FormattedText
                key={c}
                text={`<strong>${condition?.name}:</strong> ${condition?.ability}`}
              />
            );
          })} */}

              {/* {errorText && <Error text={errorText} />} */}
            </div>

            <div className="flex flex-col items-end ml-1">
              {!minimized && attack && attack.ordnance && (
                <XwingFont icon="ordnance" />
              )}
              {!minimized && attack && (
                <div className="flex flex-grow flex-col justify-center ml-1 mt-1">
                  <span className="text-center">
                    <XwingFont icon={attack.arc} color={red} />
                    <span className="font-medium text-lbnred">
                      {attack.value}
                    </span>
                  </span>
                  <span className="font-medium text-center mt-1">
                    {attack.minrange !== attack.maxrange &&
                      `${attack.minrange}-${attack.maxrange}`}
                    {attack.minrange === attack.maxrange &&
                      `${attack.minrange}`}
                  </span>
                </div>
              )}
              {!minimized && grants && <Grants grants={grants} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpgradeComponent;
