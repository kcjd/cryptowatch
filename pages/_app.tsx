import { AppProps } from 'next/app'

import ProgressBar from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'components/GlobalStyle'
import Layout from 'components/Layout'

import theme from 'lib/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProgressBar
        color={theme.colors.primary}
        options={{ showSpinner: false }}
      />
      <Layout currency={pageProps.currency}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
