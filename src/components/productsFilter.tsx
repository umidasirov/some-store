import {
  Button,
  Flex,
  Group,
  Text,
  TextInput,
  NumberInput,
  CloseButton,
} from '@mantine/core'
import { useState } from 'react'
import { useCategory } from '../hooks/useCategory'
import type { ICategory } from '../types/product'

interface Props {
  categoryId: number
  onCategoryChange: (id: number) => void
  onSearchChange: (text: string) => void
  onPriceMinChange: (price: number) => void
  onPriceMaxChange: (price: number) => void
  onClearFilters: () => void
}

export function ProductsFilter({
  categoryId,
  onCategoryChange,
  onSearchChange,
  onPriceMinChange,
  onPriceMaxChange,
  onClearFilters,
}: Props) {
  const [search, setSearch] = useState('')
  const [priceMin, setPriceMin] = useState<number | string>('')
  const [priceMax, setPriceMax] = useState<number | string>('')
  const hasInputFilters = search !== '' || priceMin !== '' || priceMax !== ''

  const { data, isLoading } = useCategory()
  const all: ICategory = { id: 0, name: 'All', slug: 'all', icon: '' }
  const categories: ICategory[] = [all, ...(data?.data ?? [])]

  const handleSearch = (value: string) => {
    setSearch(value)
    onSearchChange(value)
  }

  const handlePriceMin = (value: number | string) => {
    setPriceMin(value)
    if (value !== '' && value !== undefined) {
      onPriceMinChange(Number(value))
    } else {
      onPriceMinChange(0)
    }
  }

  const handlePriceMax = (value: number | string) => {
    setPriceMax(value)
    if (value !== '' && value !== undefined) {
      onPriceMaxChange(Number(value))
    } else {
      onPriceMaxChange(0)
    }
  }

  const handleClear = () => {
    setSearch('')
    setPriceMin('')
    setPriceMax('')
    onClearFilters()
  }

  if (isLoading) {
    return <></>
  }

  return (
    <Flex direction="column" gap="lg">
      <Group align="flex-end">
        <TextInput
          label="Qidirish"
          placeholder="Mahsulot nomi..."
          value={search}
          onChange={(e) => handleSearch(e.currentTarget.value)}
          style={{ flex: 1 }}
        />
        <NumberInput
          label="Narx (min)"
          placeholder="Masalan: 100"
          value={priceMin}
          onChange={handlePriceMin}
          min={0}
          style={{ flex: 1 }}
        />
        <NumberInput
          label="Narx (max)"
          placeholder="Masalan: 1000"
          value={priceMax}
          onChange={handlePriceMax}
          min={0}
          style={{ flex: 1 }}
        />
        {hasInputFilters && (
          <Button
            variant="light"
            color="gray"
            onClick={handleClear}
            rightSection={<CloseButton size="xs" />}
          >
            Tozalash
          </Button>
        )}
      </Group>

      <Group justify="center" align="center" gap="md">
        {categories?.map((e) => (
          <Button
            radius="xl"
            w="12%"
            h="50px"
            bg={categoryId === e.id ? 'brand.7' : 'brand.1'}
            c={categoryId === e.id ? 'white' : 'brand.9'}
            key={e.id}
            onClick={() => onCategoryChange(e.id)}
          >
            <Text>{e.name}</Text>
          </Button>
        ))}
      </Group>
    </Flex>
  )
}
