import { IBase } from './base.interface'

export interface IProduct extends IBase {
  name: string
  description: string
  price: number
  sizes: string[]
}
