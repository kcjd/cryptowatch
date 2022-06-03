import { PropsWithChildren, useState } from 'react'
import styled from 'styled-components'
import Container from '../Container'
import Footer from '../Footer'
import Header from '../Header'
import SearchBar from '../SearchBar'

type Props = {
  currency: string
}

const Layout = ({ currency, children }: PropsWithChildren<Props>) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)

  return (
    <Wrapper>
      <Header currency={currency} toggleSearchBar={setIsSearchBarOpen} />
      <Container as="main">{children}</Container>
      <Footer />
      <SearchBar isOpen={isSearchBarOpen} toggle={setIsSearchBarOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[600]};
`

export default Layout
