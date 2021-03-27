import React from 'react'
import styled, { ThemedStyledInterface, ThemeProvider as Provider } from 'styled-components'

export interface Theme {
  fontFamily: string
  button: {
    color: string
    radius: string
    backgroundColor: string
    backgroundImage: string
    padding: string
    fontSize: string
    border: string
  }
}

interface ThemeProviderProps {
  children: React.ReactNode
  theme: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return <Provider theme={theme}>{children}</Provider>
}

export const styledWithTheme = styled as ThemedStyledInterface<Theme>
