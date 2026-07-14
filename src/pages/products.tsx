import { Box, Container, Flex, Text, Title } from '@mantine/core'
import { ProductsFilter } from '../components'
import { MappedProductCards } from '../components/mappedProductCards'
import Brands from '../components/brands'

export const Products = () => {
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
        <ProductsFilter />
        <MappedProductCards />
      </Container>
      <Box my={40}>
        <Brands />
      </Box>
    </Box>
  )
}
