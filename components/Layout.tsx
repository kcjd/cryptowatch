import { useState } from "react";
import styled from "styled-components";
import Footer from "components/Footer";
import Header from "components/Header";
import SearchBar from "components/SearchBar";

const Layout = ({ children }: React.PropsWithChildren) => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <>
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

export default Layout;
