import React from 'react'
import { styledWithTheme } from '../styles/ThemeProvider'

const StyledButton = styledWithTheme.button`
  color: ${({ theme }) => theme.button.color};
  border-radius: ${({ theme }) => theme.button.radius};
  background-color: ${({ theme }) => theme.button.backgroundColor};
  background-image: ${({ theme }) => theme.button.backgroundImage};
  padding: ${({ theme }) => theme.button.padding};
  font-size: ${({ theme }) => theme.button.fontSize};
  border: ${({ theme }) => theme.button.border};
  
  transition: all 100ms ease-in-out;
  &:hover {
    filter: invert(1);
  }
`

export const Button: React.FC = ({ children }) => <StyledButton>{children}</StyledButton>
