import { Box, Flex, Text, Group, Container } from '@mantine/core'
import { navLinks } from '../consts/menuLinks.tsx'
import { Link, NavLink } from 'react-router'
import { RiPhoneFill, RiShoppingBag3Line } from '@remixicon/react'

export function HeaderComponents() {
  return (
    <Box bg={'white'} style={{ borderBottom: '1px solid #f0f0f0' }} py={'sm'}>
      <Container size="xl">
        <Flex justify="space-between" align={'center'} h={70}>
          {/* Logo */}
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Group gap={8} align="center">
              <Box
                bg="brand.6"
                style={{ borderRadius: '10px' }}
                w={42}
                h={42}
                display="flex"
                ta="center"
              >
                <RiShoppingBag3Line
                  size={22}
                  color="white"
                  style={{ margin: 'auto' }}
                />
              </Box>
              <Box>
                <Text
                  fw={800}
                  size="24px"
                  c="brand.7"
                  style={{
                    fontFamily: '"Work Sans", sans-serif',
                    lineHeight: 1,
                    letterSpacing: '1px',
                  }}
                >
                  Anor
                </Text>
                <Text
                  fw={600}
                  size="10px"
                  c="dimmed"
                  style={{ lineHeight: 1, letterSpacing: '3px' }}
                >
                  SHOP
                </Text>
              </Box>
            </Group>
          </Link>

          {/* Navigation */}
          <Flex gap={32} align={'center'}>
            {navLinks.map((enu, idx) => (
              <NavLink
                className={'navlinks_header'}
                key={idx}
                to={enu.path}
                style={{ textDecoration: 'none' }}
              >
                <Text size="16px" c="dark" fw={500}>
                  {enu.title}
                </Text>
              </NavLink>
            ))}
          </Flex>

          {/* Contact */}
          <Flex align={'center'} gap={12}>
            <Flex
              justify={'center'}
              align={'center'}
              bg="brand.6"
              w={44}
              h={44}
              style={{ borderRadius: '50%' }}
            >
              <RiPhoneFill size={20} style={{ color: 'white' }} />
            </Flex>
            <Box>
              <Text size="xs" c="dimmed" fw={400}>
                Need help?
              </Text>
              <Link to="tel:+998901234567" style={{ textDecoration: 'none' }}>
                <Text fw={600} c="dark" size="md">
                  +998 90 123 45 67
                </Text>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
