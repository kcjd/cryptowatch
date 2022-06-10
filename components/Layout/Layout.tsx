import { PropsWithChildren, useState } from 'react'
import styled from 'styled-components'

import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import SearchBar from 'components/SearchBar'

type Props = {
  currency: string
}

const Layout = ({ currency, children }: PropsWithChildren<Props>) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)

  return (
    <>
      <Background />
      <Wrapper>
        <Header currency={currency} toggleSearchBar={setIsSearchBarOpen} />
        <Container as="main">{children}</Container>
        <Footer />
        <SearchBar isOpen={isSearchBarOpen} toggle={setIsSearchBarOpen} />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[600]};
  overflow: hidden;
`

const Background = styled.div`
  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-size: max(100%, 70rem) auto;
    background-repeat: no-repeat;
  }

  &::before {
    background-image: url('/bg-top.png');
    background-position: top left;
  }

  &::after {
    background-image: url('/bg-bottom.png');
    background-position: bottom left;
  }
`

export default Layout
