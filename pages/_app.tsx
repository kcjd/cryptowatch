import { AppProps } from "next/app";
import { CurrencyProvider } from "contexts/currencyContext";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import GlobalStyle from "components/GlobalStyle";
import Layout from "components/Layout";
import theme from "lib/theme";

const apiUrl = "https://api.coingecko.com/api/v3";

const fetcher = (url: string) => fetch(apiUrl + url).then((res) => res.json());

const App = ({ Component, pageProps }: AppProps) => {
  return (
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
  );
};

export default App;
