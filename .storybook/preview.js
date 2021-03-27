import React from 'react'
import { ThemeProvider } from '../src/styles/ThemeProvider'
import { germanTheme, englishTheme, japaneseTheme } from '../src/styles/themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme',
    defaultValue: 'german',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'german', title: '🇩🇪 Deutsch' },
        { value: 'english', title: '🇬🇧 English' },
        { value: 'japanese', title: '🇯🇵 日本語' },
      ],
    },
  },
}

const withThemeProvider = (Story, { globals: { theme } }) => {
  let selectedTheme
  switch (theme) {
    default:
    case 'german':
      selectedTheme = germanTheme
      break
    case 'english':
      selectedTheme = englishTheme
      break
    case 'japanese':
      selectedTheme = japaneseTheme
      break
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]
