import { Flex, Box, Title, Text } from '@mantine/core'
import img from '../assets/Component 1.jpg'
import google from '../assets/Google Play.jpg'
import appstore from '../assets/App Store.jpg'
export function AboutApp() {
  return (
    <Flex p={'80px'} align={'center'} justify={'space-between'}>
      <Box>
        <Title size={'50px'} w="300px" mb={'40px'}>
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
      <Box>
        <img src={img} alt="About App" />
      </Box>
    </Flex>
  )
}
