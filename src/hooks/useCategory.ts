import { useQuery } from '@tanstack/react-query'
import { categoriesApi } from '../api/products.ts'

export const PRODUCTS_KEY = 'products-key'

export const useCategory = () =>
  useQuery({
    queryKey: [PRODUCTS_KEY], // адрес данных в кеше
    queryFn: categoriesApi.get,
  })
