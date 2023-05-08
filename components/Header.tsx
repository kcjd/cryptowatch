import Image from "next/image";
import Link from "next/link";
import { Search } from "@styled-icons/ionicons-solid";
import styled from "styled-components";
import Button from "components/Button";
import Select from "components/Select";
import { useCurrency } from "contexts/currencyContext";

type Props = {
  setSearchOpen: (isOpen: boolean) => void;
};

const Header = ({ setSearchOpen }: Props) => {
  const { currency, currencies, setCurrency } = useCurrency();

  return (
    <StyledHeader>
      <StyledLogo href="/">
        <Image src="/logo.svg" width={20} height={20} alt="" /> Cryptowatch
      </StyledLogo>
      <StyledButtonGroup>
        <Select value={currency} options={currencies} onChange={setCurrency} />
        <Button onClick={() => setSearchOpen(true)} aria-label="Open search">
          <Search size={16} />
        </Button>
      </StyledButtonGroup>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: ${(props) => props.theme.sizes[450]};
`;

const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.sizes[200]};
  font-weight: 600;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes[200]};
`;

export default Header;
