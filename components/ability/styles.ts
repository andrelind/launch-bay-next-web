import styled from 'styled-components';

export const Ability = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${p => p.theme.text};
`;

export const AbilityText = styled(Ability)`
  font-weight: 400;
`;
