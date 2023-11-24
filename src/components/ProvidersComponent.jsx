'use client'
import { ThemeProvider } from '@material-tailwind/react'

const ProvidersComponent = ({ children }) => {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}

export default ProvidersComponent;