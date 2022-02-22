import {
  blue,
  green,
  orange,
  pink,
  purple,
  red,
  yellow,
} from 'lbn-core/dist/assets/colors';
import { Stat } from 'lbn-core/dist/types';
import React, { FC } from 'react';
import XwingFont from './fonts/xwing';

export const colorForStat = (stat: string) => {
  switch (stat) {
    case 'attack':
      return red;
    case 'agility':
      return green;
    case 'hull':
      return yellow;
    case 'initiative':
      return orange;
    case 'shields':
      return blue;
    case 'Force Power':
      return purple;
    case 'charge':
      return yellow;
    case 'energy':
      return pink;

    default:
      break;
  }
};

const renderValue = (
  stat: { value: number; recovers?: number; arc?: string },
  type: string
) => {
  console.log(stat);
  const recovers = new Array(Math.abs(stat.recovers || 0)).fill(0);
  const color = colorForStat(type);
  return (
    <div
      className="ml-1 flex items-center justify-center"
      key={`${type}_${stat.value}`}
    >
      {stat.arc && <XwingFont icon={stat.arc} color={color} />}
      {!stat.arc && type !== 'initiative' && (
        <XwingFont icon={type} color={color} />
      )}
      {recovers.length === 1 && <XwingFont icon={'recurring'} color={color} />}
      {recovers.length >= 2 && (
        <XwingFont icon={'doublerecurring'} color={color} />
      )}

      <span
        className="text-xs sm:text-sm font-medium"
        style={{ color }}
      >{`${stat.value}`}</span>
    </div>
  );
};

type Props = {
  initiative?: number;
  engagement?: number;
  stats?: Stat[];
  force?: { value: number; recovers: number };
  charges?: { value: number; recovers: number };
  vertical?: boolean;
};

export const StatsComponent: FC<Props> = ({
  initiative,
  engagement,
  stats,
  force,
  charges,
  vertical,
}) => (
  <div className={`flex items-center ${vertical && 'flex-col'}`}>
    {initiative && renderValue({ value: initiative }, 'initiative')}
    {engagement && renderValue({ value: engagement }, 'engagement')}
    {stats && stats.map((stat) => renderValue(stat, stat.type))}
    {charges && renderValue(charges, 'charge')}
    {force && renderValue(force, 'Force Power')}
  </div>
);

export default StatsComponent;
