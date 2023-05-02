import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import GlobalStyle from "components/GlobalStyle";
import Layout from "components/Layout";
import { CurrencyProvider } from "contexts/currencyContext";
import theme from "lib/theme";

const apiUrl = "https://api.coingecko.com/api/v3";

const fetcher = (url: string) => fetch(apiUrl + url).then((res) => res.json());

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Cryptowatch</title>
        <meta
          name="description"
          content="Watch cryptocurrencies in real-time : prices, market caps, historical charts and more."
        />
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher,
            revalidateOnFocus: false,
            shouldRetryOnError: false,
            revalidateIfStale: false,
          }}
        >
          <CurrencyProvider>
            <GlobalStyle />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CurrencyProvider>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
};

export default App;
