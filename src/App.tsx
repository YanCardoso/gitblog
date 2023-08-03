import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes/Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { GitContextProvider } from './context/GitContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GitContextProvider>
          <Router />
        </GitContextProvider>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
