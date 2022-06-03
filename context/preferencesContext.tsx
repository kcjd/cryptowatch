import { createContext, PropsWithChildren, useContext, useState } from 'react'

type PreferencesContextType = {
  currency: string
  setCurrency: (currency: string) => void
  historyDays: number
  setHistoryDays: (historyDays: number) => void
}

const PreferencesContext = createContext<PreferencesContextType>({} as PreferencesContextType)

const PreferencesProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currency, setCurrency] = useState('USD')
  const [historyDays, setHistoryDays] = useState(1)

  return (
    <PreferencesContext.Provider value={{ currency, setCurrency, historyDays, setHistoryDays }}>
      {children}
    </PreferencesContext.Provider>
  )
}

export const usePreferences = () => useContext(PreferencesContext)

export default PreferencesProvider
