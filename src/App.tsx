import React from 'react'
import { ThemeProvider } from './styles/ThemeProvider'
import { defaultTenant } from './styles/themes'
import { Button } from './components/Button'

const App = () => (
  <ThemeProvider theme={defaultTenant}>
    <h1>Byteleaf</h1>
    <Button>Test</Button>
  </ThemeProvider>
)

export default App
