import React from 'react'
import { ThemeProvider } from '../src/styles/ThemeProvider'
import { defaultTenant, modernTenant, fancyTenant } from '../src/styles/themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const globalTypes = {
  tenant: {
    name: 'Tenant',
    description: 'Tenant',
    defaultValue: 'default',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'default', title: 'default tenant', left: '👩' },
        { value: 'modern', title: 'modern tenant', left: '👩‍💼' },
        { value: 'fancy', title: 'fancy tenant', left: '👩‍🎨' },
      ],
    },
  },
}

const withThemeProvider = (Story, { globals: { tenant } }) => {
  let selectedTheme
  switch (tenant) {
    default:
    case 'default':
      selectedTheme = defaultTenant
      break
    case 'modern':
      selectedTheme = modernTenant
      break
    case 'fancy':
      selectedTheme = fancyTenant
      break
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]
