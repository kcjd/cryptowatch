import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Search } from '@styled-icons/ionicons-solid'
import { setCookie } from 'nookies'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

import Button from 'components/Button'
import ButtonGroup from 'components/ButtonGroup'
import Container from 'components/Container'
import Select from 'components/Select'

import { CURRENCIES } from 'lib/constants'

type Props = {
  currency: string
  toggleSearchBar: Dispatch<SetStateAction<boolean>>
}

const Header = ({ currency, toggleSearchBar }: Props) => {
  const router = useRouter()

  const handleCurrencyChange = (currency: string) => {
    setCookie(null, 'currency', currency, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    router.reload()
  }

  return (
    <Wrapper>
      <Link href="/" passHref>
        <Logo>
          <Image src="/logo.svg" width={20} height={20} alt="" /> Cryptowatch
        </Logo>
      </Link>

      <ButtonGroup>
        <Select
          value={currency}
          options={CURRENCIES}
          onChange={handleCurrencyChange}
        />
        <Button onClick={() => toggleSearchBar(true)} aria-label="Recherche">
          <Search size={16} />
        </Button>
      </ButtonGroup>
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
