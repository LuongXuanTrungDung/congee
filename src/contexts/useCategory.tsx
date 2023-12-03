import { createContext, PropsWithChildren, useState } from 'react'
import { emptyCategory } from '@utils/emptyObjects'
import { ICategory } from '@interfaces/category.interface';

const initialState = {
  findCategory: (code: string) => emptyCategory,
  fetchCategories: () => [emptyCategory]
}

export const CategoryContext = createContext(initialState)
export function CategoryProvider(props: PropsWithChildren) {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const findCategory = (code: string) => {
    const index = categories.findIndex((p) => p.code === code)
    return index > -1 ? categories[index] : emptyCategory
  }

  const fetchCategories = () => {
    const result: ICategory[] = []
    categories.forEach((p) => {
      const foundCategory = findCategory(p.code)
      if (foundCategory && !result.includes(foundCategory)) {
        result.push(foundCategory)
      }
    })
    return result
  }

  return (
    <CategoryContext.Provider value={{ findCategory, fetchCategories }}>
      {props.children}
    </CategoryContext.Provider>
  )
}
