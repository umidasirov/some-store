import { useQuery } from '@tanstack/react-query'
import { productsApi } from '../api/products.ts'

export const PRODUCTS_KEY = 'products-key'

export const useProducts = () =>
  useQuery({
    queryKey: [PRODUCTS_KEY], // адрес данных в кеше
    queryFn: () => productsApi.get().then((resp) => resp.data),
  })
