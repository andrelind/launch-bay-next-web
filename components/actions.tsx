import { purple, red } from 'lbn-core/dist/assets/colors';
import { Action, Difficulty } from 'lbn-core/dist/types';
import React, { FC } from 'react';
import XwingFont from './fonts/xwing';

type Props = {
  actions: Action[];
  vertical?: boolean;
};

export const ActionsComponent: FC<Props> = ({ actions, vertical }) => {
  const color = (difficulty: Difficulty) => {
    if (difficulty === 'Red') return red;
    if (difficulty === 'Purple') return purple;
    return undefined;
  };

  return (
    <div className={`flex items-center ${vertical && 'flex-col'}`}>
      {actions.map((a, index) => (
        <div
          className="flex items-center"
          key={`${a.type}_${a.difficulty}_${index}`}
        >
          <XwingFont icon={a.type} color={color(a.difficulty)} />
          {a.linked && ' -> '}
          {a.linked && (
            <XwingFont
              icon={a.linked.type}
              color={a.linked.difficulty === 'Red' ? red : undefined}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ActionsComponent;
