import { SxProps, Theme, Box } from '@mui/material'
// import { useContext } from 'react'

import AppToolbar from '@components/app.bar'

export default function Home() {
  const containerStyle: SxProps<Theme> = {
    maxWidth: '100vw',
    minHeight: '100vh',
    // bgcolor: 'background.default',
    // color: 'text.primary',
  }

  return (
    <Box component='main' sx={containerStyle}>
      <AppToolbar />
    </Box>
  )
}
