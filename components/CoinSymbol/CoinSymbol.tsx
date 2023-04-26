import styled from "styled-components";

const CoinSymbol = styled.span`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: uppercase;
  white-space: nowrap;
`;

export default CoinSymbol;
