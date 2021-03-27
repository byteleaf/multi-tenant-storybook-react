import React from 'react'
import { ThemeProvider } from './styles/ThemeProvider'
import { germanTheme } from './styles/themes'
import { Button } from './components/Button'

const App = () => (
  <ThemeProvider theme={germanTheme}>
    <h1>Byteleaf</h1>
    <Button>Test</Button>
  </ThemeProvider>
)

export default App
