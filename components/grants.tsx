import {
  blue,
  green,
  pink,
  purple,
  red,
  yellow,
} from 'lbn-core/dist/assets/colors';
import { Difficulty, Grant } from 'lbn-core/dist/types';
import React from 'react';
import XwingFont from './fonts/xwing';

type Props = {
  grants: Grant[];
};

const colorForType = (type: string | void) => {
  switch (type) {
    case 'attack':
      return red;
    case 'agility':
      return green;
    case 'hull':
      return yellow;
    case 'shields':
      return blue;
    case 'energy':
      return pink;
    default:
      break;
  }
};

const colorForDifficulty = (difficulty: Difficulty) => {
  if (difficulty === 'Red') return red;
  if (difficulty === 'Purple') return purple;
  return undefined;
};

const mod = (grant: Grant) => {
  if (grant.value > 0) {
    return `+${grant.value}`;
  }
  return grant.value;
};

const GrantsComponent = ({ grants }: Props) => {
  return (
    <div className="flex items-end">
      {grants.map((grant, index) => (
        <div className="flex items-center" key={`${grant.value}_${index}`}>
          {grant.slot && <XwingFont icon={grant.slot} />}
          {grant.stat && (
            <div className="flex items-center">
              <span
                className="font-medium"
                style={{ color: colorForType(grant.stat) }}
              >
                {mod(grant)}
              </span>
              <XwingFont icon={grant.stat} color={colorForType(grant.stat)} />
            </div>
          )}
          {grant.action && (
            <div className="flex items-center">
              <XwingFont
                icon={grant.action.type}
                color={colorForDifficulty(grant.action.difficulty)}
              />
              {grant.action.linked && ' -> '}
              {grant.action.linked && (
                <XwingFont
                  icon={grant.action.linked.type}
                  color={colorForDifficulty(grant.action.linked.difficulty)}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GrantsComponent;
