import { SimpleGrid, Center, Text, Flex, Loader } from '@mantine/core'
import { ProductCard } from './productCards'
import { useFilterProducts } from '../hooks/useProductsFilter'
import type { TProductParams } from '../types/product'

interface Props {
  filterParams: TProductParams
}

export function MappedProductCards({ filterParams }: Props) {
  const params: TProductParams = { ...filterParams }
  if (params.categoryId === 0) {
    delete params.categoryId
  }

  const { data, isLoading } = useFilterProducts(params)
  const products = data ?? []

  if (isLoading) {
    return (
      <Flex w="100%" h="100%" p="50px" justify="center">
        <Loader color="red" />
      </Flex>
    )
  }

  if (products.length === 0) {
    return (
      <Center py={60}>
        <Text c="dimmed" size="lg">
          Bu kategoriyada mahsulot topilmadi
        </Text>
      </Center>
    )
  }

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="xl" mt="xl">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  )
}
