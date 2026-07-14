import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Text,
  Title,
  Badge,
  SimpleGrid,
  Divider,
} from '@mantine/core'
import { useParams, Link } from 'react-router'
import { pastProducts } from '../consts/pastProducts'
import {
  RiArrowLeftLine,
  RiShoppingCartLine,
  RiTruckLine,
  RiExchangeFundsLine,
  RiShieldCheckLine,
} from '@remixicon/react'
import { ProductCard } from './productCards'

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>()
  const product = pastProducts.find((p) => p.slug === slug)

  if (!product) {
    return (
      <Container size="xl" py={80}>
        <Flex direction="column" align="center" gap={20}>
          <Title order={2} c="dimmed">
            Mahsulot topilmadi
          </Title>
          <Button
            component={Link}
            to="/products"
            variant="light"
            color="brand"
            leftSection={<RiArrowLeftLine size={16} />}
          >
            Mahsulotlar sahifasiga qaytish
          </Button>
        </Flex>
      </Container>
    )
  }

  const imageUrl = product.images?.[0] || 'https://i.imgur.com/QkIa5tT.jpeg'
  const otherImages = product.images?.slice(1, 4) || []

  const relatedProducts = pastProducts
    .filter(
      (p) => p.category.slug === product.category.slug && p.id !== product.id
    )
    .slice(0, 4)

  return (
    <Box>
      <Box bg="brand.6" py={30}>
        <Container size="xl">
          <Button
            component={Link}
            to="/products"
            variant="white"
            size="sm"
            leftSection={<RiArrowLeftLine size={16} />}
            style={{ color: 'var(--mantine-color-brand-7)' }}
          >
            Mahsulotlar
          </Button>
        </Container>
      </Box>

      <Container size="xl" py={50}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Box
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={imageUrl}
                alt={product.title}
                h={450}
                fit="cover"
                radius="lg"
              />
            </Box>
            {otherImages.length > 0 && (
              <Flex gap={12} mt={16}>
                {otherImages.map((img, i) => (
                  <Box
                    key={i}
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '2px solid var(--mantine-color-gray-2)',
                    }}
                  >
                    <Image src={img} alt="" h={100} w={120} fit="cover" />
                  </Box>
                ))}
              </Flex>
            )}
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Flex direction="column" gap={20}>
              <Badge
                variant="light"
                color="brand"
                size="lg"
                style={{ alignSelf: 'flex-start' }}
              >
                {product.category.name}
              </Badge>

              <Title order={1} size={36} c="brand.0">
                {product.title}
              </Title>

              <Text fw={700} size="42px" c="brand.7">
                ${product.price}
              </Text>

              <Divider />

              <Text size="md" c="dimmed" lh={1.8}>
                {product.description}
              </Text>

              <Divider />

              <Group gap="md" grow>
                <Button
                  variant="filled"
                  color="brand"
                  size="lg"
                  radius="xl"
                  leftSection={<RiShoppingCartLine size={20} />}
                  h={54}
                >
                  Savatga qo'shish
                </Button>
              </Group>

              <Flex gap={24} wrap="wrap" mt={10}>
                <Flex gap={10} align="center">
                  <RiTruckLine size={24} color="var(--mantine-color-brand-6)" />
                  <Box>
                    <Text size="sm" fw={600}>
                      Bepul yetkazib berish
                    </Text>
                    <Text size="xs" c="dimmed">
                      3-7 ish kuni
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={10} align="center">
                  <RiExchangeFundsLine
                    size={24}
                    color="var(--mantine-color-brand-6)"
                  />
                  <Box>
                    <Text size="sm" fw={600}>
                      Bepul qaytarish
                    </Text>
                    <Text size="xs" c="dimmed">
                      30 kun ichida
                    </Text>
                  </Box>
                </Flex>
                <Flex gap={10} align="center">
                  <RiShieldCheckLine
                    size={24}
                    color="var(--mantine-color-brand-6)"
                  />
                  <Box>
                    <Text size="sm" fw={600}>
                      Kafolat
                    </Text>
                    <Text size="xs" c="dimmed">
                      2 yil
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>

        {relatedProducts.length > 0 && (
          <Box mt={80}>
            <Title order={2} size={32} mb={10} className="section-title">
              O'xshash mahsulotlar
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} mt={40}>
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </SimpleGrid>
          </Box>
        )}
      </Container>
    </Box>
  )
}
