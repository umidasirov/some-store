import { Box, Button, Flex, SimpleGrid, Title } from '@mantine/core'
import { RiArrowRightLine } from '@remixicon/react'
import { Link } from 'react-router'
import { pastProducts } from '../consts/pastProducts'
import { ProductCard } from './productCards'
export function HeroProducts() {
  const products = pastProducts.slice(0, 8)
  return (
    <Box>
      <Flex justify={'space-between'} align={'flex-end'}>
        <Title order={1} w="500" size={42} c="brand.0">
          Choose the car that suits you
        </Title>
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <Button
            variant="gradient"
            color="brand.0"
            rightSection={<RiArrowRightLine size={14} />}
            mt={20}
          >
            View All Products
          </Button>
        </Link>
      </Flex>

      <SimpleGrid mt={40} cols={4}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
