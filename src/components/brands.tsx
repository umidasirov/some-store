import { Flex } from '@mantine/core'
import { brands } from '../assets/brands'

export default function Brands() {
  return (
    <Flex w={'100%'} h={100} justify={'space-between'} px="md">
      {brands.map((e) => (
        <img style={{ height: '80px', fontSize: '40px' }} src={e} />
      ))}
    </Flex>
  )
}
