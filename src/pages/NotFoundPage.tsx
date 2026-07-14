import { Button, Container, Flex, Text, Title } from '@mantine/core'
import { Link } from 'react-router'
import { RiHome4Line } from '@remixicon/react'

export function NotFoundPage() {
  return (
    <Container size="xl" py={100}>
      <Flex direction="column" align="center" gap="md">
        <Text
          size="120px"
          fw={800}
          c="brand.6"
          style={{ fontFamily: '"Work Sans", sans-serif', lineHeight: 1 }}
        >
          404
        </Text>
        <Title order={2} size={32} ta="center">
          Sahifa topilmadi
        </Title>
        <Text c="dimmed" size="lg" ta="center" maw={450}>
          Qidirgan sahifangiz mavjud emas yoki ko'chirilgan bo'lishi mumkin.
          Bosh sahifaga qayting.
        </Text>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            color="brand"
            radius="xl"
            size="lg"
            leftSection={<RiHome4Line size={18} />}
            mt="md"
          >
            Bosh sahifaga qaytish
          </Button>
        </Link>
      </Flex>
    </Container>
  )
}
