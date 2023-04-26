import Image from "next/image";
import Link from "next/link";
import { Search } from "@styled-icons/ionicons-solid";
import useCurrency from "contexts/currencyContext";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
import Container from "components/Container";
import Select from "components/Select";
import { CURRENCIES } from "lib/constants";

type Props = {
  toggleSearchBar: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ toggleSearchBar }: Props) => {
  const { currency, setCurrency } = useCurrency();

  return (
    <Wrapper>
      <Logo href="/">
        <Image src="/logo.svg" width={20} height={20} alt="" /> Cryptowatch
      </Logo>

      <ButtonGroup>
        <Select value={currency} options={CURRENCIES} onChange={setCurrency} />
        <Button onClick={() => toggleSearchBar(true)} aria-label="Recherche">
          <Search size={16} />
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: ${({ theme }) => theme.sizes[450]};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[200]};
  font-weight: ${({ theme }) => theme.fontWeights[600]};
`;

export default Header;
