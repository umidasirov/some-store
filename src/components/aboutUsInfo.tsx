import { Box, Button, Container, Stack, Text, Title } from '@mantine/core'

export function AboutUsInfo() {
  return (
    <Box bg="brand.7" style={{ borderRadius: '30px' }} py={100}>
      <Container size="md">
        <Stack align="center" gap="xl">
          <Title
            order={1}
            ta="center"
            c="white"
            fw={700}
            fz={{ base: 40, md: 72 }}
            maw={900}
            lh={1.15}
          >
            Where every drive
            <br />
            feels extraordinary
          </Title>

          <Text
            ta="center"
            c="gray.4"
            maw={650}
            fz={{ base: 16, md: 18 }}
            lh={1.8}
          >
            Explore our exquisite collection of luxury cars, where
            sophistication meets performance. Discover your dream ride and
            elevate your driving experience today.
          </Text>

          <Button
            radius="xl"
            size="lg"
            px={35}
            color="pink"
            styles={{
              root: {
                backgroundColor: '#C3005A',
              },
            }}
          >
            Explore Cars
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
