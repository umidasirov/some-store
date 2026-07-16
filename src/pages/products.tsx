import { Box, Container, Flex, Text, Title } from '@mantine/core'
import { ProductsFilter } from '../components'
import { MappedProductCards } from '../components/mappedProductCards'
import Brands from '../components/brands'
import { useState, useMemo } from 'react'

export const Products = () => {
  const [categoryId, setCategoryId] = useState<number>(0)
  const [search, setSearch] = useState('')
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(0)

  // Faqat ishlatilgan filterlarnigina paramsga qo'shamiz
  const filterParams = useMemo(() => {
    const params: Record<string, string | number> = {}
    if (categoryId !== 0) params.categoryId = categoryId
    if (search) params.title = search
    if (priceMin > 0) params.price_min = priceMin
    if (priceMax > 0) params.price_max = priceMax
    return params
  }, [categoryId, search, priceMin, priceMax])

  const handleClearFilters = () => {
    setSearch('')
    setPriceMin(0)
    setPriceMax(0)
  }

  return (
    <Box>
      <Box bg="brand.6" style={{ borderRadius: '30px' }} mt="xs" py={60}>
        <Container size="xl">
          <Flex direction="column" align="center">
            <Text size="sm" c="brand.2" fw={500} tt="uppercase" mb={8}>
              Katalog
            </Text>
            <Title order={1} size={42} c="white" ta="center">
              Barcha mahsulotlar
            </Title>
            <Text c="brand.2" size="lg" mt={8} ta="center" maw={500}>
              Eng sara kiyimlar, poyabzallar va aksessuarlar
            </Text>
          </Flex>
        </Container>
      </Box>

      <Container size="xl" py={40}>
        <ProductsFilter
          categoryId={categoryId}
          onCategoryChange={setCategoryId}
          onSearchChange={setSearch}
          onPriceMinChange={setPriceMin}
          onPriceMaxChange={setPriceMax}
          onClearFilters={handleClearFilters}
        />
        <MappedProductCards filterParams={filterParams} />
      </Container>
      <Box my={40}>
        <Brands />
      </Box>
    </Box>
  )
}
