import { CategoryContext } from "@contexts/useCategory";
import { Stack } from "@mui/material";
import { useContext } from "react";
import CategoryPill from "./category.pill";

export default function CategoryFilter() {
  const { fetchCategories } = useContext(CategoryContext);
  const filters = fetchCategories();
  const setupMargin = (index: number) => {
    if (index === 0) return { mr: 1 }
    else if (index === filters.length - 1) return { ml: 1 }
    else return { mx: 1 }
  }

  return (
    <Stack flexDirection='row' component='section' sx={{ p: 2 }}>
      {filters.map((category, index) =>
        <CategoryPill key={index} category={category} sxStyle={setupMargin(index)} />)
      }
    </Stack>
  )
}