import { Box } from '@mantine/core'
import { Titleing } from '../components/titling'
import { Faq } from '../components/faq'
import { AboutApp2 } from '../components/aboutApp2'
import Stats from '../components/stats'
import { AboutUsInfo } from '../components/aboutUsInfo'
import WhyChooseUs from '../components/whyChooseUs'

export function Aboutus() {
  const items = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: 'about' },
  ]
  return (
    <Box>
      <Titleing title={'About Us'} breadcrumbs={items} />
      <AboutUsInfo />
      <Stats />
      <WhyChooseUs />
      <AboutApp2 />
      <Faq />
    </Box>
  )
}
