import { createContext, PropsWithChildren, useContext, useState } from 'react'

type Preferences = {
  currency: string
}

type PreferencesContextType = {
  preferences: Preferences
  setCurrency: (currency: string) => void
}

const defaultPreferences: Preferences = {
  currency: 'USD'
}

const PreferencesContext = createContext<PreferencesContextType>({} as PreferencesContextType)

const PreferencesProvider = ({ children }: PropsWithChildren<{}>) => {
  const [preferences, setPreferences] = useState(defaultPreferences)

  const setCurrency = (currency: string) => setPreferences({ ...preferences, currency })

  return <PreferencesContext.Provider value={{ preferences, setCurrency }}>{children}</PreferencesContext.Provider>
}

export const usePreferences = () => useContext(PreferencesContext)

export default PreferencesProvider
