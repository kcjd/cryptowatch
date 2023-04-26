import { AppProps } from "next/app";
import { CurrencyProvider } from "contexts/currencyContext";
import ProgressBar from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import GlobalStyle from "components/GlobalStyle";
import Layout from "components/Layout";
import axios from "lib/axios";
import "lib/dayjs";
import theme from "lib/theme";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={{ fetcher }}>
        <CurrencyProvider>
          <GlobalStyle />
          <ProgressBar
            color={theme.colors.primary}
            options={{ showSpinner: false }}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CurrencyProvider>
      </SWRConfig>
    </ThemeProvider>
  );
};

export default App;
