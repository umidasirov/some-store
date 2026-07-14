import { Flex } from '@mantine/core'
import { HeaderComponents } from '../components/headerComponents'
import { Outlet } from 'react-router'
import Footer from '../components/footer'

const Layout = () => {
  return (
    <Flex
      direction={'column'}
      w={'1440px'}
      mx={'auto'}
      mih={'100vh'}
      pos={'relative'}
    >
      <HeaderComponents />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  )
}

export default Layout
