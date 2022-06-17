import { CurrencyProvider } from 'contexts/currencyContext'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'

import fetcher from 'lib/fetcher'
import theme from 'lib/theme'

type Props = {
  children: ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <CurrencyProvider>{children}</CurrencyProvider>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default Providers
