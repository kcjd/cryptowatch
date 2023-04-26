import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CurrencyContextType = {
  currency: string;
  setCurrency: (currency: string) => void;
};

const CurrencyContext = createContext({} as CurrencyContextType);

type Props = {
  children: ReactNode;
};

export const CurrencyProvider = ({ children }: Props) => {
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const currencyFromStorage = localStorage.getItem("currency");
    if (!currencyFromStorage) return;
    setCurrency(currencyFromStorage);
  }, []);

  const setCurrencyInStorage = (currency: string) => {
    localStorage.setItem("currency", currency);
    setCurrency(currency);
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency: setCurrencyInStorage }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

const useCurrency = () => useContext(CurrencyContext);

export default useCurrency;
