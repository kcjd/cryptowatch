import { AppProps } from 'next/app'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import ProgressBar from 'nextjs-progressbar'
import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'
import theme from '../theme'
import { SWRConfig } from 'swr'
import { API_URL } from '../helpers/constants'

axios.defaults.baseURL = API_URL
const fetcher = (url: string, params?: any) => axios.get(url, { params }).then((res) => res.data)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProgressBar color={theme.colors.primary} options={{ showSpinner: false }} />
        <Layout currency={pageProps.currency}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default App
