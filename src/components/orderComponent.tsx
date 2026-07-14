import {
  Button,
  Card,
  Group,
  NativeSelect,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import {
  RiMapPinLine,
  RiShoppingBag3Line,
  RiUserLine,
  RiPhoneLine,
} from '@remixicon/react'

export function OrderComponent() {
  return (
    <Card shadow="xl" radius="xl" p="xl" w={460} withBorder bg="white">
      {/* Card Header */}
      <Group mb="md" gap={10}>
        <RiShoppingBag3Line size={28} color="var(--mantine-color-brand-6)" />
        <div>
          <Text fw={700} size="22px" c="dark">
            Tezkor buyurtma
          </Text>
          <Text size="sm" c="dimmed">
            Biz bilan bog'laning, qolganini biz hal qilamiz
          </Text>
        </div>
      </Group>

      <form>
        <Stack gap="md">
          <NativeSelect
            label="Mahsulot turi"
            leftSection={<RiShoppingBag3Line size={18} />}
            data={[
              'Erkaklar kiyimlari',
              'Ayollar kiyimlari',
              'Poyabzallar',
              'Aksessuarlar',
              'Bolalar kiyimlari',
            ]}
          />

          <TextInput
            label="Ismingiz"
            placeholder="Ismingizni kiriting"
            leftSection={<RiUserLine size={18} />}
          />

          <TextInput
            label="Telefon raqamingiz"
            placeholder="+998 XX XXX XX XX"
            leftSection={<RiPhoneLine size={18} />}
          />

          <TextInput
            label="Yetkazib berish manzili"
            placeholder="Manzilni kiriting"
            leftSection={<RiMapPinLine size={18} />}
          />

          <Button
            type="submit"
            color="brand"
            radius="xl"
            h={50}
            mt="xs"
            fullWidth
            size="lg"
            fw={600}
          >
            Buyurtma berish
          </Button>

          <Text size="xs" c="dimmed" ta="center">
            Tez orada siz bilan bog'lanamiz
          </Text>
        </Stack>
      </form>
    </Card>
  )
}
