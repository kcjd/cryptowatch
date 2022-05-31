import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { usePreferences } from '../../context/preferencesContext'
import { Search } from '@styled-icons/ionicons-solid'
import Button from '../Button'
import Container from '../Container'
import Select from '../Select'
import { CURRENCIES } from '../../constants'

type Props = {
  toggleSearchBar: Dispatch<SetStateAction<boolean>>
}

const Header = ({ toggleSearchBar }: Props) => {
  const { preferences, setCurrency } = usePreferences()

  return (
    <Wrapper>
      <Inner>
        <Link href="/" passHref>
          <Logo>
            <Image src="/logo.svg" width={20} height={20} alt="" /> Cryptowatch
          </Logo>
        </Link>

        <Options>
          <Select value={preferences.currency} options={CURRENCIES} onChange={setCurrency} />
          <Button onClick={() => toggleSearchBar(true)}>
            <Search size={16} />
          </Button>
        </Options>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(30px);
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
  font-weight: ${({ theme }) => theme.fontWeights[700]};
`

const Options = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes[200]};
`

export default Header
