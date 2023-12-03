import { ICategory } from "@interfaces/category.interface";
import { Button, SxProps, Theme } from "@mui/material";

interface pillProps {
  category: ICategory
  sxStyle: SxProps<Theme>
}

export default function CategoryPill(props: pillProps) {
  const { name } = props.category
  const buttonStyle = { py: 1, px: 2, backgroundColor: 'orangered', color: 'white', ...props.sxStyle }

  return (<Button sx={buttonStyle}>{name}</Button>)
}