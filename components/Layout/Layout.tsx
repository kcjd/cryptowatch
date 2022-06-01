import { PropsWithChildren, useState } from 'react'
import styled from 'styled-components'
import Container from '../Container'
import Header from '../Header'
import SearchBar from '../SearchBar'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)

  return (
    <Wrapper>
      <Header toggleSearchBar={setIsSearchBarOpen} />

      <Container as="main">{children}</Container>

      <SearchBar isOpen={isSearchBarOpen} toggle={setIsSearchBarOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.sizes[800]};
`

export default Layout
