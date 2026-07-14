import { SimpleGrid, Center, Text } from '@mantine/core'
import { pastProducts } from '../consts/pastProducts'
import { ProductCard } from './productCards'
import { useEffect, useState } from 'react'

export function MappedProductCards() {
  const [filteredType, setFilteredType] = useState(
    localStorage.getItem('selectedType') || ''
  )

  useEffect(() => {
    const handleStorage = () => {
      setFilteredType(localStorage.getItem('selectedType') || '')
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const filtered = filteredType
    ? pastProducts.filter((p) => p.category.slug === filteredType)
    : pastProducts

  if (filtered.length === 0) {
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
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  )
}
