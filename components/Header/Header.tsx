import Image from 'next/image'
import Link from 'next/link'

import { Search } from '@styled-icons/ionicons-solid'
import { useState } from 'react'
import styled from 'styled-components'

import Button from 'components/Button'
import ButtonGroup from 'components/ButtonGroup'
import Container from 'components/Container'
import CurrencySelect from 'components/CurrencySelect'
import SearchBar from 'components/SearchBar'

const Header = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false)

  return (
    <Wrapper>
      <Link href="/" passHref>
        <Logo>
          <Image src="/logo.svg" width={20} height={20} alt="" /> Cryptowatch
        </Logo>
      </Link>
      <ButtonGroup>
        <CurrencySelect />
        <Button onClick={() => setIsSearchBarOpen(true)} aria-label="Recherche">
          <Search size={16} />
        </Button>
      </ButtonGroup>
      <SearchBar isOpen={isSearchBarOpen} toggle={setIsSearchBarOpen} />
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: ${({ theme }) => theme.sizes[450]};
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[200]};
  font-weight: ${({ theme }) => theme.fontWeights[600]};
`

export default Header
