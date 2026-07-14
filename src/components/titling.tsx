import { Box, Breadcrumbs, Flex, Title } from '@mantine/core'
import { Link } from 'react-router'

export function Titleing({
  title,
  breadcrumbs,
}: {
  title: string
  breadcrumbs: { title: string; href: string }[]
}) {
  const items = breadcrumbs.map((item, index) => (
    <Link style={{ color: '#000000' }} to={`/${item.href}`} key={index}>
      {item.title}
    </Link>
  ))
  return (
    <Box>
      <Flex p="50px" w={'100%'} mx={'auto'} direction={'column'} gap={10}>
        <Title size={'40px'} ta="center">
          {title}
        </Title>
        <Breadcrumbs mx={'auto'}>{items}</Breadcrumbs>
      </Flex>
    </Box>
  )
}
