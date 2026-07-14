import { Flex, Box, Title, Text } from '@mantine/core'
import img from '../assets/telefon1.svg'
import google from '../assets/Google Play.jpg'
import appstore from '../assets/App Store.jpg'
export function AboutApp2() {
  return (
    <Flex
      p={'20px'}
      h="500px"
      mt={'120px'}
      align={'center'}
      style={{ borderRadius: '30px' }}
      bg="brand.6"
      justify={'space-between'}
    >
      <Flex justify={'center'} w="50%" ta={'center'}>
        <img src={img} alt="About App" style={{ marginBottom: '150px' }} />
      </Flex>
      <Box>
        <Title size={'50px'} c={'brand.1'} w="300px" mb={'40px'}>
          Download mobile app
        </Title>
        <Text mb={'40px'} w={'600px'} c="brand.2">
          Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
          turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet
          cras hendrerit enim condimentum. Condimentum interdum risus bibendum
          urna
        </Text>
        <Box>
          <button
            style={{
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              background: 'transparent',
            }}
          >
            <img style={{ width: '100%' }} src={google} alt="Google Play" />
          </button>
          <button
            style={{
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              background: 'transparent',
            }}
          >
            <img src={appstore} alt="App Store" />
          </button>
        </Box>
      </Box>
    </Flex>
  )
}
