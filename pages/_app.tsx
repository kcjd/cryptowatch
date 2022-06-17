import { AppProps } from 'next/app'

import ProgressBar from 'nextjs-progressbar'

import GlobalStyle from 'components/GlobalStyle'
import Layout from 'components/Layout'
import Providers from 'components/Providers'

import 'lib/dayjs'
import theme from 'lib/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <GlobalStyle />
      <ProgressBar
        color={theme.colors.primary}
        options={{ showSpinner: false }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

export default App
