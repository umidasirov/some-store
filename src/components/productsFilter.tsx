import { Button, Group, Text } from '@mantine/core'
import { filterLinks } from '../consts/filterCategory'
import { useState } from 'react'
export function ProductsFilter() {
  const [selectedType, setSelectedType] = useState<string>('')

  const handleSelectTypeChange = (selectedType1: string) => {
    setSelectedType(selectedType1)
    localStorage.setItem('selectedType', selectedType1)
  }
  return (
    <Group justify="space-evenly" align="center" mt="md" gap="xl">
      {filterLinks.map((e, idx) => {
        const Icon = e?.icon
        return (
          <Button
            radius="xl"
            w="12%"
            h="50px"
            bg={selectedType === e.slug ? 'brand.7' : 'brand.1'}
            c={selectedType === e.slug ? 'white' : 'brand.9'}
            key={idx}
            leftSection={Icon ? <Icon size={18} /> : undefined}
            onClick={() => handleSelectTypeChange(e.slug)}
          >
            <Text>{e.name}</Text>
          </Button>
        )
      })}
    </Group>
  )
}
