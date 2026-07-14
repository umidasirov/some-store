import {
  Box,
  Container,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { RiCheckLine } from '@remixicon/react'

const features = [
  'Premium Luxury Cars',
  '24/7 Customer Support',
  'Flexible Rental Plans',
  'Trusted by Thousands',
]

export default function WhyChooseUs() {
  return (
    <Box py={100}>
      <Container size="xl">
        <Flex
          justify="space-between"
          align="center"
          gap={80}
          direction={{ base: 'column', lg: 'row' }}
        >
          {/* Left Side */}
          <Box flex={1}>
            <Flex
              h={42}
              px={28}
              bg="#C4005A"
              c="white"
              fw={700}
              fz={14}
              ta="center"
              align="center"
              justify="center"
              w={200}
              style={{ borderRadius: 100 }}
            >
              WHY CHOOSE US
            </Flex>

            <Title mt={25} fw={700} fz={{ base: 40, md: 60 }} lh={1.2}>
              Drive with
              <br />
              confidence,
              <br />
              every mile.
            </Title>

            <Text mt={20} c="#B0B0B0" maw={520} fz={17} lh={1.8}>
              Experience the perfect combination of luxury, comfort, and
              performance. Our premium vehicles are maintained to the highest
              standards, ensuring every journey is smooth, safe, and
              unforgettable.
            </Text>

            <SimpleGrid cols={2} spacing={35} mt={45}>
              {features.map((feature) => (
                <Group key={feature} gap="md" align="center">
                  <ThemeIcon
                    size={34}
                    radius="xl"
                    styles={{
                      root: {
                        backgroundColor: '#C4005A',
                        color: '#fff',
                      },
                    }}
                  >
                    <RiCheckLine size={18} />
                  </ThemeIcon>

                  <Text c="#B0B0B0" fw={500}>
                    {feature}
                  </Text>
                </Group>
              ))}
            </SimpleGrid>
          </Box>

          {/* Right Side */}
          <Box
            flex={1}
            maw={560}
            w="100%"
            style={{
              borderRadius: 24,
              overflow: 'hidden',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
              h={650}
              fit="cover"
              alt="Luxury Car"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
