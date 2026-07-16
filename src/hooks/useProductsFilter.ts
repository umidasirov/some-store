import { useQuery } from '@tanstack/react-query'
import { productsApi } from '../api/products'
import type { TProductParams } from '../types/product'

export const useFilterProducts = (params: TProductParams) =>
  useQuery({
    queryKey: ['products', params],
    queryFn: () => productsApi.getFiltered(params).then((res) => res.data),
  })
