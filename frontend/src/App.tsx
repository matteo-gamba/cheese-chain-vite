
import styled, { ThemeProvider } from "styled-components"

import Navbar from "./components/Navbar"
import useThemeMode from "./hooks/useThemeMode"
import { lightTheme, darkTheme } from "./styles/themes"
import { GlobalStyle } from "./styles/global"
import ContractInteractions from "./components/ContractComponent/ContractInteractions"
import { LotHistory } from "./components/LotHistory"
import ContractProvider from "./providers/ContractProvider"
import FunctionsProvider from "./providers/FunctionsProvider"
import { LocationProvider } from "./providers/LocationProvider"

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  const { theme, themeToggler } = useThemeMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
        <LocationProvider>
          <GlobalStyle />
          <AppWrapper>
            <Navbar themeToggler={themeToggler} />
            <ContractProvider>
              <FunctionsProvider>
                <ContractInteractions />
                <LotHistory />
              </FunctionsProvider>
            </ContractProvider>
          </AppWrapper>
        </LocationProvider>
    </ThemeProvider>
  )
}

export default App
