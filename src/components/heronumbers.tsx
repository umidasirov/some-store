import { Box, Flex, Text, Title } from '@mantine/core'
import { HeroConstNumbers } from '../consts/HeroConstData'

export function HeroNumbers() {
  return (
    <Box
      bg="brand.7"
      w="100%"
      h="100%"
      py={60}
      px={50}
      mt={50}
      style={{ borderRadius: '20px' }}
    >
      <Title order={2} c="white" ta={'center'} mb={20}>
        Our Numbers
      </Title>
      <Text c="brand.2" ta={'center'}>
        We have been in the business for over 10 years and have served over 1
        million customers worldwide. Our products are trusted by professionals
        and enthusiasts alike.
      </Text>
      <Flex justify={'space-between'} gap={20} mt={40}>
        {HeroConstNumbers.map((e, idx) => {
          const Icon = e.icon
          return (
            <Flex
              key={idx}
              bg="brand.6"
              p={20}
              align={'center'}
              gap={20}
              mt={20}
              style={{ borderRadius: '10px' }}
            >
              <Flex
                align={'center'}
                bg="#FF9E0C"
                w={68}
                h={60}
                c="white"
                fs={'10px'}
                style={{
                  borderRadius: '50%',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Icon size={30} />
              </Flex>
              <Box>
                <Title order={3} c="white">
                  {e.title}
                </Title>
                <Text c="brand.2">{e.description}</Text>
              </Box>
            </Flex>
          )
        })}
      </Flex>
    </Box>
  )
}
