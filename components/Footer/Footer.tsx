import { LogoGithub } from '@styled-icons/ionicons-solid'
import dayjs from 'dayjs'
import styled from 'styled-components'
import Container from '../Container'

const Footer = () => {
  return (
    <Wrapper as="footer">
      <div>Cryptowatch — {dayjs().year()}</div>
      <a href="https://github.com/kcjd/crypowatch" target="_blank" rel="noreferrer">
        <LogoGithub size={24} />
      </a>
    </Wrapper>
  )
}

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: ${({ theme }) => theme.sizes[600]};
  font-size: ${({ theme }) => theme.fontSizes[300]};
  font-weight: ${({ theme }) => theme.fontWeights[500]};
  color: ${({ theme }) => theme.colors.textLight};
`

export default Footer
