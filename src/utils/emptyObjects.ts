import { IBase } from '@interfaces/base.interface'
import { ICategory } from '@interfaces/category.interface'
import { IOrder } from '@interfaces/order.interface'
import { IProduct } from '@interfaces/product.interface'

const emptyBase: IBase = {
  code: '', isDeleted: false, createdTS: '', lastEditedTS: null
}
export const emptyProduct: IProduct = {
  ...emptyBase, name: '', description: '',
  sizes: ['S', 'M', 'L'], price: 0,
}
export const emptyCategory: ICategory = {
  ...emptyBase, name: '',
}
export const emptyOrder: IOrder = {
  ...emptyBase, amount: 0, size: '', billing: 0
}