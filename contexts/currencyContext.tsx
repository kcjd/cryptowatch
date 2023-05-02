import { createContext, useContext, useState } from "react";

type CurrencyContextType = {
  currency: string;
  currencies: string[];
  setCurrency: (currency: string) => void;
};

const CurrencyContext = createContext({} as CurrencyContextType);

const currencies = ["USD", "EUR", "JPY"];
const defaultCurrency = currencies[0];

export function CurrencyProvider({ children }: React.PropsWithChildren) {
  const [currency, setCurrency] = useState(defaultCurrency);

  return (
    <CurrencyContext.Provider value={{ currency, currencies, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
