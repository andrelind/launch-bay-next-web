import { blue, purple, red } from 'lbn-core/dist/assets/colors';
import React from 'react';
import XwingFont from '../fonts/xwing';

const colorForValue = (value: string) => {
  switch (value) {
    case 'B':
      return blue;
    case 'R':
      return red;
    case 'P':
      return purple;
  }
};

const iconForValue = (d: any) => {
  switch (d[1]) {
    case 'T':
      return { index: 0, data: d[2] + 'turnleft' };
    case 'B':
      return { index: 1, data: d[2] + 'bankleft' };
    case 'F':
      return { index: 2, data: d[2] + 'straight' };
    case 'N':
      return { index: 3, data: d[2] + 'bankright' };
    case 'Y':
      return { index: 4, data: d[2] + 'turnright' };
    case 'O':
      return { index: 2, data: d[2] + 'stop' };
    case 'K':
      return { index: 5, data: d[2] + 'kturn' };
    case 'L':
      return { index: 6, data: d[2] + 'sloopleft' };
    case 'P':
      return { index: 7, data: d[2] + 'sloopright' };
    case 'E':
      return { index: 8, data: d[2] + 'trollleft' };
    case 'R':
      return { index: 9, data: d[2] + 'trollright' };
    case 'A':
      return { index: 10, data: d[2] + 'reversebankleft' };
    case 'S':
      return { index: 11, data: d[2] + 'reversestraight' };
    case 'D':
      return { index: 12, data: d[2] + 'reversebankright' };
    default:
    // console.log('UNKNOWN MANUEVER', d[1]);
  }
};

type Props = {
  data: string[];
  row: string;
};

export const RowComponent = ({ data, row }: Props) => {
  const rowData = [
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
    'D',
  ];
  data.forEach((d) => {
    const v = iconForValue(d);
    if (v) {
      rowData[v.index] = v.data;
    }
  });
  for (var i = rowData.length; i >= 5; i--) {
    if (rowData[i] === 'D') {
      rowData.splice(i, 1);
    }
  }

  return (
    <div className="flex items-center h-5">
      <span className="mr-1 w-5 font-medium text-xs sm:text-sm">{row}</span>
      {rowData.map((d, index) => {
        if (d === 'D') {
          return <div className="w-5" key={'row_value_' + index} />;
        } else {
          return (
            <XwingFont
              key={'row_value_' + index}
              color={colorForValue(d.slice(0, 1))}
              icon={d.slice(1)}
              className="w-5 text-center"
            />
          );
        }
      })}
    </div>
  );
};

export default RowComponent;
