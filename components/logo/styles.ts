import styled from 'styled-components';

import XWing from '../fonts/xwing';

export const TopWrapper = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 10px;
`;

export const Icon = styled(XWing)`
  font-size: 25px;
  align-self: center;
  color: ${p => p.theme.unread};
  margin-right: 5px;
`;

export const NameWrapper = styled.div`
  align-self: center;
`;

export const Name = styled.div`
  color: ${p => p.theme.textSecondary};
  font-size: 13px;
  font-weight: 200;
`;

export const TopTitle = styled.div`
  color: ${p => p.theme.unread};
  font-size: 17px;
  font-weight: 400;
`;

export const TopTitleThin = styled.span`
  font-weight: 100;
`;
