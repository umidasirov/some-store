import { Box } from '@mantine/core'
import { Titleing } from '../components/titling'
import ContactHero from '../components/contactHero'
import { BlogComponent } from '../components/blogComponent'
import Brands from '../components/brands'

export const Contact = () => {
  const items = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: 'contact' },
  ]
  return (
    <Box>
      <Titleing title={'Contact Us'} breadcrumbs={items} />
      <ContactHero />
      <BlogComponent />
      <Brands />
    </Box>
  )
}
