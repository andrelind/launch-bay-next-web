import styled from 'styled-components';

import XWing from '../../fonts/xwing';

export const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: -3px;
`;

export const Number = styled.span`
  margin-right: 5px;
  width: 10px;
  color: ${p => p.theme.text};
`;

export const Dummy = styled.div`
  width: 20px;
  align-items: center;
  padding-top: 2px;
  padding-bottom: -2px;
`;

export const Icon = styled(XWing)`
  font-size: 20px;
`;
