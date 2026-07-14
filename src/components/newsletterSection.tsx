import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import {
  RiSendPlane2Line,
  RiShieldCheckLine,
  RiTruckLine,
  RiRefreshLine,
} from '@remixicon/react'

const features = [
  {
    icon: RiTruckLine,
    title: 'Bepul yetkazib berish',
    desc: "50 000 so'mdan ortiq buyurtmalarda",
  },
  {
    icon: RiShieldCheckLine,
    title: 'Sifat kafolati',
    desc: '30 kun ichida qaytarish imkoniyati',
  },
  {
    icon: RiRefreshLine,
    title: 'Osongina almashtirish',
    desc: 'Hajm va rangni bepul almashtirish',
  },
]

export function NewsletterSection() {
  return (
    <Box bg="brand.6" py={80} mt={40}>
      <Container size="xl">
        {/* Features */}
        <Flex justify="center" gap={60} wrap="wrap" mb={60}>
          {features.map((f, idx) => {
            const Icon = f.icon
            return (
              <Flex key={idx} gap={14} align="center" maw={280}>
                <Box
                  w={50}
                  h={50}
                  style={{
                    borderRadius: '14px',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color="white" />
                </Box>
                <Box>
                  <Text fw={600} c="white" size="md">
                    {f.title}
                  </Text>
                  <Text size="sm" c="brand.2">
                    {f.desc}
                  </Text>
                </Box>
              </Flex>
            )
          })}
        </Flex>

        {/* Newsletter */}
        <Box
          bg="white"
          py={50}
          px={{ base: 30, md: 80 }}
          style={{ borderRadius: '40px' }}
        >
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={3} size={28} c="dark" mb={12}>
                Yangi to'plamlardan xabardor bo'ling
              </Title>
              <Text c="dimmed" size="md">
                Obuna bo'ling va birinchi bo'lib chegirmalar, yangi
                kolleksiyalar va eksklyuziv takliflar haqida xabar oling
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Flex gap={12} align="center" wrap="wrap">
                <TextInput
                  placeholder="Email manzilingiz"
                  size="lg"
                  radius="xl"
                  style={{ flex: 1, minWidth: 200 }}
                />
                <Button
                  color="brand"
                  radius="xl"
                  size="lg"
                  px={32}
                  rightSection={<RiSendPlane2Line size={18} />}
                >
                  Obuna bo'lish
                </Button>
              </Flex>
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
