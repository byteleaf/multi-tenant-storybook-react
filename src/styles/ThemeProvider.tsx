import React from 'react'
import styled, { ThemedStyledInterface, ThemeProvider as Provider } from 'styled-components'

export interface Theme {
  mainColor: string
  fontColor: string
  buttonBorderRadius: string
}

interface ThemeProviderProps {
  children: React.ReactNode
  theme: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return <Provider theme={theme}>{children}</Provider>
}

export const themeStyled = styled as ThemedStyledInterface<Theme>
