import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { setCookie } from 'nookies'
import { Search } from '@styled-icons/ionicons-solid'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import Container from '../Container'
import Select from '../Select'
import { CURRENCIES } from '../../helpers/constants'

type Props = {
  currency: string
  toggleSearchBar: Dispatch<SetStateAction<boolean>>
}

const Header = ({ currency, toggleSearchBar }: Props) => {
  const router = useRouter()

  const handleCurrencyChange = (currency: string) => {
    setCookie(null, 'currency', currency, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })

    router.push(router.asPath)
  }

  return (
    <Wrapper>
      <Inner>
        <Link href="/" passHref>
          <Logo>
            <Image src="/logo.svg" width={20} height={20} alt="" /> Cryptowatch
          </Logo>
        </Link>

        <ButtonGroup>
          <Select value={currency} options={CURRENCIES} onChange={handleCurrencyChange} />
          <Button onClick={() => toggleSearchBar(true)} aria-label="Recherche">
            <Search size={16} />
          </Button>
        </ButtonGroup>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
`

const Inner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.sizes[800]};
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[200]};
  font-weight: ${({ theme }) => theme.fontWeights[600]};
`

export default Header
