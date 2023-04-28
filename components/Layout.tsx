import { useState } from "react";
import styled from "styled-components";
import Footer from "components/Footer";
import Header from "components/Header";
import SearchBar from "components/SearchBar";

const Layout = ({ children }: React.PropsWithChildren) => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <StyledBackground />
      <StyledLayout>
        <Header setSearchOpen={setSearchOpen} />
        <main>{children}</main>
        <Footer />
        <SearchBar isOpen={isSearchOpen} setOpen={setSearchOpen} />
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: ${(props) => props.theme.sizes[600]};
  width: ${(props) => props.theme.sizes.container};
  min-height: 100vh;
  margin-inline: auto;
`;

const StyledBackground = styled.div`
  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-size: max(100%, 70rem) auto;
    background-repeat: no-repeat;
  }

  &::before {
    background-image: url("/bg-top.png");
    background-position: top left;
  }

  &::after {
    background-image: url("/bg-bottom.png");
    background-position: bottom left;
  }
`;

export default Layout;
