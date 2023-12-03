import { SxProps, Theme, Box } from '@mui/material'
// import { useContext } from 'react'

import MainBar from '@components/app.bar'
import SearchBar from '@components/search/search.bar'
import CategoryFilter from '@components/search/category.filter'

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
      <CategoryFilter />
      <MainBar />
    </Box>
  )
}
