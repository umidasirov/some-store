import { Box, Container, Flex, Text } from '@mantine/core'

const stats = [
  {
    value: '20k+',
    label: 'Our Happy Customer',
  },
  {
    value: '540+',
    label: 'Product Sold',
  },
  {
    value: '25+',
    label: 'Years Experience',
  },
]

export default function Stats() {
  return (
    <Box py={70}>
      <Container size="xl">
        <Flex justify="space-between" align="center" wrap="wrap" gap="xl">
          {stats.map((item) => (
            <Box key={item.label} ta="center">
              <Text fw={800} fz={{ base: 48, md: 72 }} c="#C3005A" lh={1}>
                {item.value}
              </Text>

              <Text mt="sm" c="brand.0" fz={{ base: 16, md: 20 }} fw={500}>
                {item.label}
              </Text>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
