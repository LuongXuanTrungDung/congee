// import { useContext } from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountIcon from '@mui/icons-material/AccountCircle';
// import { LanguageContext } from '@contexts/useLanguage'

export default function MainBar() {
  // const { translate } = useContext(LanguageContext)
  // const currentYear = new Date().getFullYear()

  return (
    <AppBar position="static" sx={{ mt: 2 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open about & policy info drawer"
          sx={{ mr: 'auto' }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open cart page"
          sx={{ mx: 'auto' }}
        >
          <ShoppingCartIcon />
        </IconButton>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open settings & account menu"
          sx={{ ml: 'auto' }}
        >
          <AccountIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
