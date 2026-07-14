import { Button, Flex, Text, Title } from '@mantine/core'
import { OrderComponent } from './orderComponent'

export const HeroHomepage = () => {
  return (
    <Flex
      h={620}
      justify={'space-between'}
      gap={60}
      align={'center'}
      style={{ borderRadius: '60px', overflow: 'hidden' }}
      mt={'xl'}
      px={80}
      bg={'brand.6'}
      pos={'relative'}
    >
      {/* Left content */}
      <Flex
        direction={'column'}
        gap={24}
        maw={520}
        pos="relative"
        style={{ zIndex: 1 }}
      >
        <Title size={'58px'} c={'white'} lh={1.1}>
          Experience the road like never before
        </Title>

        <Text c={'brand.2'} size="lg" lh={1.6}>
          Eng so'nggi moda tendensiyalari, sifatli kiyimlar va aksessuarlar
          faqat Anor Shop'da. O'z uslubingizni toping va har kuni yangi
          ko'rinishda bo'ling.
        </Text>

        <Flex gap={16} mt={8}>
          <Button
            variant="filled"
            color="yellow"
            radius="xl"
            px={36}
            h={52}
            size="lg"
            fw={600}
          >
            Xarid qilish
          </Button>
        </Flex>
      </Flex>

      <OrderComponent />
    </Flex>
  )
}
