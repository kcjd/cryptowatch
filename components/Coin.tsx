import Image from "next/image";
import { CaretDown, CaretUp } from "@styled-icons/ionicons-solid";
import styled from "styled-components";
import { useCurrency } from "contexts/currencyContext";
import { formatCurrency, formatPercentage } from "lib/utils";

type Props = {
  image?: string;
  name?: string;
  symbol?: string;
  price?: number;
  change?: number;
};

const Coin = ({ image, name, symbol, price, change }: Props) => {
  const { currency } = useCurrency();
  const isChangeUp = change ? change > 0 : false;

  return (
    <StyledCoin>
      {image && <Image src={image} width={24} height={24} alt="" />}
      {name && <StyledCoinName>{name}</StyledCoinName>}
      {symbol && <StyledCoinSymbol>{symbol}</StyledCoinSymbol>}
      {price && (
        <StyledCoinPrice>{formatCurrency(price, currency)}</StyledCoinPrice>
      )}
      {change && (
        <StyledCoinChange isUp={isChangeUp}>
          {isChangeUp ? <CaretUp size={14} /> : <CaretDown size={14} />}
          {formatPercentage(change)}
        </StyledCoinChange>
      )}
    </StyledCoin>
  );
};

const StyledCoin = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes[250]};
`;

const StyledCoinName = styled.span`
  font-weight: 600;
`;

const StyledCoinSymbol = styled.span`
  color: ${(props) => props.theme.colors.neutral[400]};
  font-weight: 400;
  text-transform: uppercase;
`;

const StyledCoinPrice = styled.span`
  font-weight: 500;
`;

const StyledCoinChange = styled.span<{ isUp: boolean }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes[100]};
  color: ${(props) =>
    props.isUp
      ? props.theme.colors.success[400]
      : props.theme.colors.danger[400]};
  font-size: ${(props) => props.theme.fontSizes[400]};
  font-weight: 500;
`;

export default Coin;
