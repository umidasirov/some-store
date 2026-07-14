import type { RemixiconComponentType } from '@remixicon/react'
export interface navListType {
  path: string
  title: string
}

export interface filterCategoryies {
  id: number
  name: string
  slug: string
  icon: RemixiconComponentType
}
export interface faqType {
  value: string
  description: string
}
