import { AppProps } from 'next/app'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../components/GlobalStyle'
import Layout from '../components/Layout'
import PreferencesProvider from '../context/preferencesContext'
import theme from '../theme'
import { SWRConfig } from 'swr'
import { API_URL } from '../constants'

axios.defaults.baseURL = API_URL
const fetcher = (url: string, params?: any) => axios.get(url, { params }).then((res) => res.data)

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider theme={theme}>
        <PreferencesProvider>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PreferencesProvider>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default App
