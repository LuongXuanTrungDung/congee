import { createContext, PropsWithChildren, useState } from 'react'
import { emptyProduct } from '@utils/emptyObjects'
import { IProduct } from '@interfaces/product.interface';

const initialState = {
  findProduct: (code: string) => emptyProduct,
  fetchProducts: () => [emptyProduct]
}

export const ProductContext = createContext(initialState)
export function ProductProvider(props: PropsWithChildren) {
  const [products, setProducts] = useState<IProduct[]>([]);

  const findProduct = (code: string) => {
    const index = products.findIndex((p) => p.code === code)
    return index > -1 ? products[index] : emptyProduct
  }

  const fetchProducts = () => {
    const result: IProduct[] = []
    products.forEach((p) => {
      const foundProduct = findProduct(p.code)
      if (foundProduct && !result.includes(foundProduct)) {
        result.push(foundProduct)
      }
    })
    return result
  }

  return (
    <ProductContext.Provider value={{ findProduct, fetchProducts }}>
      {props.children}
    </ProductContext.Provider>
  )
}
