import { Button, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Stack component='section' sx={{ p: 2 }} flexDirection='row'>
      <TextField
        id="search-input" label="Search for products"
        sx={{ width: '100%', mr: 1 }} />
      <Button color="inherit" sx={{ ml: 1 }}><SearchIcon /></Button>
    </Stack>
  )
}