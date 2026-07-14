import { Accordion } from '@mantine/core'
import data from '../json/faq.json'

export function Faq() {
  const datas = data as { value: string; description: string }[]
  const items = datas.map((item) => (
    <Accordion.Item
      key={item.value}
      value={item.value}
      p={'20px'}
      bg={'#F8F8F8'}
      mb={'10px'}
    >
      <Accordion.Control style={{ fontWeight: '700', fontSize: '26px' }}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ))

  return (
    <Accordion
      variant="separated"
      chevronIconSize={20}
      disableChevronRotation
      order={4}
      defaultValue="Apples"
    >
      {items}
    </Accordion>
  )
}
