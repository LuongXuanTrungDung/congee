import { ICategory } from "@interfaces/category.interface";
import { emptyBase } from './emptyObjects'
import { IProduct } from "@interfaces/product.interface";

const ALL_CATEGORY: ICategory = { ...emptyBase, code: 'ALL', name: 'All' }

export const TEST_CATEGORIES: ICategory[] = [
  ALL_CATEGORY,
  { ...emptyBase, code: 'T', name: 'Tea' },
  { ...emptyBase, code: 'C', name: 'Coffee' }
]