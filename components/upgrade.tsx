import { red } from 'lbn-core/dist/assets/colors';
import { Upgrade } from 'lbn-core/dist/types';
import React, { FC } from 'react';
import XwingFont from './fonts/xwing';
import { FormattedText } from './formatted-text';
import Grants from './grants';
import { SlimUpgrade } from './slim/upgrade';

type Props = {
  upgrade: Upgrade;
  count?: number;
  limitWarning?: boolean;
};

// TODO: Should show BOTH sides of a card!

const UpgradeComponent: FC<Props> = ({ upgrade }) => {
  // let errorText;
  // if (limitWarning) {
  //   errorText = `Only ${upgrade.limited} allowed in a squadron`;
  // }

  return (
    <div className="divide-y divide-gray-200">
      {upgrade.sides.map((upgradeSide, i) => {
        const { attack, device, grants } = upgradeSide;
        return (
          <div key={`${upgradeSide.type}_${i}`} className="py-2 px-2">
            <SlimUpgrade upgrade={upgrade} side={i} />

            <div className="flex flex-1 flex-row items-center text-xs sm:text-sm">
              <div className="flex flex-1 flex-col justify-center sm:mx-1">
                {upgradeSide.ability && (
                  <FormattedText text={upgradeSide.ability.en} />
                )}
                {upgradeSide.text && (
                  <FormattedText
                    text={upgradeSide.text.en}
                    fontStyle="italic"
                  />
                )}

                {device && (
                  <FormattedText
                    text={`<strong>Effect:</strong> ${device.effect}`}
                  />
                )}
              </div>

              <div className="flex flex-col items-end ml-1">
                {attack && attack.ordnance && <XwingFont icon="ordnance" />}
                {attack && (
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
                {grants && <Grants grants={grants} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpgradeComponent;
