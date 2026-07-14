import { Flex, Text, Title } from '@mantine/core'
import { Benfits } from '../consts/HeroConstData'

export function HeroBenefits() {
  return (
    <Flex align={'center'} justify={'space-evenly'} p={'80px'} w="100%">
      {Benfits.map((e) => {
        const Icon = e.icon
        return (
          <Flex direction={'column'} gap={20} align={'center'}>
            <Icon size={40} color={'#000000'} />
            <Title order={4}>{e.title}</Title>
            <Text>{e.description}</Text>
          </Flex>
        )
      })}
    </Flex>
  )
}
