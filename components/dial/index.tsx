import React, { memo } from 'react';

import Row from './row';

type Props = {
  dial: string[];
};

export const DialComponent = ({ dial }: Props) => {
  const rows = ['5', '4', '3', '2', '1', '0'];
  const data = rows.map(index => {
    const data = dial.filter(d => d[0] === index);
    if (data.length === 0) {
      return null;
    }

    return <Row key={'row' + index} data={data} row={index} />;
  });

  return <div>{data}</div>;
};

export default memo(DialComponent);
