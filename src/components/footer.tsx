import {
  ActionIcon,
  Box,
  Container,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core'

import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeFill,
  RiMapPin2Line,
  RiMailLine,
  RiPhoneLine,
  RiShoppingBag3Line,
} from '@remixicon/react'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <Box bg="#1a1a1a" py={70} mt={80}>
      <Container size="xl">
        <Flex justify="space-between" wrap="wrap" gap={40}>
          {/* Brand */}

          <Stack maw={300}>
            <Group gap={10}>
              <ThemeIcon color="brand" radius="lg" size={44}>
                <RiShoppingBag3Line size={22} />
              </ThemeIcon>
              <Box>
                <Text
                  fw={800}
                  size="xl"
                  c="white"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    letterSpacing: '1px',
                  }}
                >
                  Anor
                </Text>
                <Text size="9px" c="gray.5" style={{ letterSpacing: '3px' }}>
                  SHOP
                </Text>
              </Box>
            </Group>

            <Text c="gray.5" size="sm" lh={1.7}>
              Zamonaviy kiyimlar, aksessuarlar va kundalik uslub uchun eng
              yaxshi mahsulotlarni bir joyda toping.
            </Text>

            <Group mt="sm">
              <ActionIcon variant="filled" color="gray.8" radius="xl" size={40}>
                <RiFacebookCircleFill size={18} />
              </ActionIcon>
              <ActionIcon variant="filled" color="gray.8" radius="xl" size={40}>
                <RiInstagramLine size={18} />
              </ActionIcon>
              <ActionIcon variant="filled" color="gray.8" radius="xl" size={40}>
                <RiTwitterXLine size={18} />
              </ActionIcon>
              <ActionIcon variant="filled" color="gray.8" radius="xl" size={40}>
                <RiYoutubeFill size={18} />
              </ActionIcon>
            </Group>
          </Stack>

          {/* Quick Links */}

          <Stack gap={12}>
            <Text fw={700} size="lg" c="white" mb={4}>
              Sahifalar
            </Text>

            <Link to="/" style={{ textDecoration: 'none' }}>
              <Text
                c="gray.5"
                size="sm"
                style={{ cursor: 'pointer' }}
                _hover={{ color: 'brand.5' }}
              >
                Bosh sahifa
              </Text>
            </Link>
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <Text c="gray.5" size="sm" style={{ cursor: 'pointer' }}>
                Mahsulotlar
              </Text>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Text c="gray.5" size="sm" style={{ cursor: 'pointer' }}>
                Biz haqimizda
              </Text>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Text c="gray.5" size="sm" style={{ cursor: 'pointer' }}>
                Bog'lanish
              </Text>
            </Link>
          </Stack>

          {/* Categories */}

          <Stack gap={12}>
            <Text fw={700} size="lg" c="white" mb={4}>
              Kategoriyalar
            </Text>

            <Text c="gray.5" size="sm" style={{ cursor: 'pointer' }}>
              Erkaklar
            </Text>
            <Text c="gray.5" size="sm" style={{ cursor: 'pointer' }}>
              Ayollar
            </Text>
            <Text c="gray.5" size="sm" style={{ cursor: 'pointer' }}>
              Bolalar
            </Text>
            <Text c="gray.5" size="sm" style={{ cursor: 'pointer' }}>
              Poyabzal
            </Text>
            <Text c="gray.5" size="sm" style={{ cursor: 'pointer' }}>
              Aksessuarlar
            </Text>
          </Stack>

          {/* Contact */}

          <Stack gap={18} maw={280}>
            <Text fw={700} size="lg" c="white" mb={4}>
              Biz bilan aloqa
            </Text>

            <Group align="flex-start" gap={12}>
              <ThemeIcon color="brand.6" radius="xl" size={38}>
                <RiMapPin2Line size={18} />
              </ThemeIcon>
              <div>
                <Text fw={600} size="sm" c="white">
                  Manzil
                </Text>
                <Text c="gray.5" size="sm">
                  Toshkent shahri, Chilonzor tumani
                </Text>
              </div>
            </Group>

            <Group align="flex-start" gap={12}>
              <ThemeIcon color="brand.6" radius="xl" size={38}>
                <RiMailLine size={18} />
              </ThemeIcon>
              <div>
                <Text fw={600} size="sm" c="white">
                  Email
                </Text>
                <Text c="gray.5" size="sm">
                  info@Anorshop.uz
                </Text>
              </div>
            </Group>

            <Group align="flex-start" gap={12}>
              <ThemeIcon color="brand.6" radius="xl" size={38}>
                <RiPhoneLine size={18} />
              </ThemeIcon>
              <div>
                <Text fw={600} size="sm" c="white">
                  Telefon
                </Text>
                <Text c="gray.5" size="sm">
                  +998 90 123 45 67
                </Text>
              </div>
            </Group>
          </Stack>
        </Flex>

        <Divider my={40} color="gray.8" />

        <Text ta="center" c="gray.6" size="sm">
          © 2026 Anor Shop. Barcha huquqlar himoyalangan.
        </Text>
      </Container>
    </Box>
  )
}
