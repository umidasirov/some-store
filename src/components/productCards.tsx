import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  Flex,
} from '@mantine/core'
import { RiShoppingCartLine, RiUpload2Line } from '@remixicon/react'
import { useNavigate } from 'react-router'
import type { IProduct } from '../types/product'

interface ProductCardProps {
  product: IProduct
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images?.[0] || 'https://i.imgur.com/QkIa5tT.jpeg'
  const navigate = useNavigate()
  const handleProductDetails = () => {
    navigate(`/products/${product.slug}`)
  }
  return (
    <Card
      my={'md'}
      shadow="sm"
      radius="lg"
      padding={0}
      withBorder
      className="product-card"
      style={{ overflow: 'hidden' }}
    >
      <Card.Section>
        <Image src={imageUrl} alt={product.title} h={260} fit="cover" />
      </Card.Section>

      <Group justify="space-between" px="md" pt="md" align="flex-start">
        <Text fw={600} size="md" lineClamp={1} style={{ flex: 1 }}>
          {product.title}
        </Text>
        <Badge
          variant="light"
          color="brand"
          size="sm"
          style={{ flexShrink: 0 }}
        >
          {product.category.name}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed" px="md" mt={6} lineClamp={2}>
        {product.description}
      </Text>

      <Group px="md" pb="md" mt="sm" justify="space-between" align="center">
        <Text fw={700} c="brand.7" size="xl">
          ${product.price}
        </Text>
        <Flex gap={10} align="center">
          <ActionIcon
            onClick={() => handleProductDetails()}
            variant="outline"
            radius={'sm'}
            aria-label="Settings"
          >
            <RiUpload2Line style={{ width: '70%', height: '70%' }} />
          </ActionIcon>
          <Button
            variant="light"
            color="brand"
            radius="xl"
            size="sm"
            leftSection={<RiShoppingCartLine size={16} />}
          >
            Savatga
          </Button>
        </Flex>
      </Group>
    </Card>
  )
}
