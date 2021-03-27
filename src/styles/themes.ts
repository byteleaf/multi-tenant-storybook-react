import { Theme } from './ThemeProvider'

export const defaultTenant: Theme = {
  fontFamily: 'string',
  button: {
    color: '#000',
    radius: '0px',
    backgroundColor: '#e0e0e0',
    backgroundImage: 'none',
    padding: '6px 16px',
    fontSize: '14px',
    border: 'none',
  },
}

export const modernTenant: Theme = {
  fontFamily: 'string',
  button: {
    color: '#000',
    radius: '0',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    padding: '12px 40px',
    fontSize: '14px',
    border: '1px solid #000',
  },
}

export const fancyTenant: Theme = {
  fontFamily: 'string',
  button: {
    color: '#fff',
    radius: '60px',
    backgroundColor: 'none',
    backgroundImage: 'linear-gradient(272deg, #f892dc, #ea38d7)',
    padding: '12px 40px',
    fontSize: '16px',
    border: 'none',
  },
}
