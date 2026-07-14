import type { filterCategoryies } from '../types/menuLinktype'
import {
  RiTShirt2Line,
  RiComputerLine,
  RiSofaLine,
  RiFootprintLine,
  RiApps2Line,
  RiToolsLine,
  RiUbuntuFill,
} from '@remixicon/react'

export const filterLinks: filterCategoryies[] = [
  {
    id: 0,
    name: 'View all',
    slug: '',
    icon: RiUbuntuFill,
  },
  {
    id: 1,
    name: 'Clothes',
    slug: 'clothes',
    icon: RiTShirt2Line,
  },
  {
    id: 2,
    name: 'Electronics',
    slug: 'electronics',
    icon: RiComputerLine,
  },
  {
    id: 3,
    name: 'Furniture',
    slug: 'furniture',
    icon: RiSofaLine,
  },
  {
    id: 4,
    name: 'Shoes',
    slug: 'shoes',
    icon: RiFootprintLine,
  },
  {
    id: 5,
    name: 'Miscellaneous',
    slug: 'miscellaneous',
    icon: RiApps2Line,
  },
  {
    id: 6,
    name: 'Testing Category',
    slug: 'testing-category',
    icon: RiToolsLine,
  },
]
