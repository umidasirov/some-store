import { RiCarLine, RiMapPinLine, RiWallet3Line } from '@remixicon/react'
interface Benefit {
  title: string
  description: string
  icon: React.ElementType
}
interface HeroConstData {
  title: string
  description: string
}
export const Benfits: Benefit[] = [
  {
    title: 'Benefit 1',
    description: 'Description for Benefit 1',
    icon: RiMapPinLine,
  },
  {
    title: 'Benefit 1',
    description: 'Description for Benefit 1',
    icon: RiCarLine,
  },
  {
    title: 'Benefit 2',
    description: 'Description for Benefit 2',
    icon: RiWallet3Line,
  },
]

export const HeroConstDataWithImg: HeroConstData[] = [
  {
    title: 'Benefit 1',
    description: 'Description for Benefit 1',
  },
  {
    title: 'Benefit 2',
    description: 'Description for Benefit 2',
  },
  {
    title: 'Benefit 3',
    description: 'Description for Benefit 3',
  },
  {
    title: 'Benefit 4',
    description: 'Description for Benefit 4',
  },
]

export const HeroConstNumbers: Benefit[] = [
  {
    title: '100+',
    description: 'Description for Benefit 1',
    icon: RiMapPinLine,
  },
  {
    title: '200+',
    description: 'Description for Benefit 2',
    icon: RiCarLine,
  },
  {
    title: '300+',
    description: 'Description for Benefit 3',
    icon: RiWallet3Line,
  },
  {
    title: '400+',
    description: 'Description for Benefit 4',
    icon: RiMapPinLine,
  },
]
