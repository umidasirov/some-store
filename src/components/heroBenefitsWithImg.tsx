import { Box, Flex, Image, Text, Title } from '@mantine/core'
import { HeroConstDataWithImg } from '../consts/HeroConstData'
export function HeroBenefitsWithImg() {
  return (
    <Flex align={'center'} py={50} gap={50}>
      <Box>
        <Image
          src={
            'https://i.pinimg.com/736x/85/e1/a8/85e1a8f73ffd9d9421ff9332cafc71e0.jpg'
          }
        />
      </Box>
      <Box w={'50%'} h={'100%'}>
        <Flex direction={'column'} justify={'space-between'} gap={20}>
          {HeroConstDataWithImg.map((e, idx) => {
            return (
              <Box mb={10} key={idx}>
                <Flex gap={10} align={'center'} mb={4}>
                  <Box
                    mr={10}
                    ta={'center'}
                    my="auto"
                    display="flex"
                    c="white"
                    fs={'10px'}
                    w={30}
                    h={30}
                    bg={'brand.8'}
                    style={{
                      borderRadius: '50%',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    {idx + 1}
                  </Box>
                  <Title order={4}>{e.title}</Title>
                </Flex>
                <Text c="brand.2" fs="10px">
                  {e.description}
                </Text>
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}
