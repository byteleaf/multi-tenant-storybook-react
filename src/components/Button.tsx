import React from 'react'
import { themeStyled } from '../styles/ThemeProvider'

const StyledButton = themeStyled.button`
  color: ${({ theme }) => theme.fontColor};
  border-radius: ${({ theme }) => theme.buttonBorderRadius};
`

export const Button: React.FC = ({ children }) => <StyledButton>{children}</StyledButton>
