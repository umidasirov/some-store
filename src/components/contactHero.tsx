import { Flex } from '@mantine/core'
import { OrderComponent } from './orderComponent'

export default function ContactHero() {
  return (
    <Flex
      gap={50}
      align={'center'}
      justify={'center'}
      direction={{ base: 'column', md: 'row' }}
    >
      <OrderComponent />
      <img
        style={{ borderRadius: '30px', width: '60%', height: 'auto' }}
        src={
          'https://i.pinimg.com/736x/b6/f8/95/b6f8951839e496c8e5e45690c5bd3c44.jpg'
        }
        alt=""
      />
    </Flex>
  )
}
