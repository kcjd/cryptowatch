import { CaretDown, CaretUp } from "@styled-icons/ionicons-solid";
import styled from "styled-components";
import { useCurrency } from "contexts/currencyContext";
import { formatCurrency, formatPercentage } from "lib/utils";

export const Coin = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes[250]};
`;

export const CoinName = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${(props) => props.theme.fontWeights[600]};
`;

export const CoinSymbol = styled.span`
  margin-right: auto;
  color: ${(props) => props.theme.colors.textLight};
  text-transform: uppercase;
  white-space: nowrap;
`;

export const CoinPrice = ({ children }: { children: number }) => {
  const { currency } = useCurrency();

  return (
    <StyledCoinPrice>{formatCurrency(children, currency)}</StyledCoinPrice>
  );
};

const StyledCoinPrice = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights[500]};
`;

export const CoinChange = ({ children }: { children: number }) => {
  const isUp = children > 0;

  return (
    <StyledCoinChange isUp={isUp}>
      {isUp ? <CaretUp size={14} /> : <CaretDown size={14} />}
      {formatPercentage(children)}
    </StyledCoinChange>
  );
};

const StyledCoinChange = styled.span<{ isUp: boolean }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes[100]};
  color: ${(props) =>
    props.isUp ? props.theme.colors.success : props.theme.colors.danger};
  font-size: ${(props) => props.theme.fontSizes[400]};
  font-weight: ${(props) => props.theme.fontWeights[500]};
`;
