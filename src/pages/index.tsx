import { SxProps, Theme, Box } from '@mui/material'
// import { useContext } from 'react'

import MainBar from '@components/app.bar'
import SearchBar from '@components/search.bar'

export default function Home() {
  const containerStyle: SxProps<Theme> = {
    maxWidth: '100vw',
    minHeight: '100vh',
    bgcolor: 'background.default',
    color: 'text.primary',
  }

  return (
    <Box component='main' sx={containerStyle}>
      <SearchBar />
      <MainBar />
    </Box>
  )
}
