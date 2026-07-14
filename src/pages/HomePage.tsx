import { Container } from '@mantine/core'
import { HeroHomepage } from '../components'
import { HeroBenefits } from '../components/heroBenefits'
import { HeroBenefitsWithImg } from '../components/heroBenefitsWithImg'
import { HeroProducts } from '../components/heroProducts'
import { HeroNumbers } from '../components/heronumbers'
import { AboutApp } from '../components/aboutApp'
import { LastSectionOfHome } from '../components/lastSectionOfHome'

export function HomePage() {
  return (
    <>
      <Container size="xl">
        <HeroHomepage />
        <HeroBenefits />
        <HeroBenefitsWithImg />
        <HeroProducts />
        <HeroNumbers />
        <AboutApp />
        <LastSectionOfHome />
      </Container>
    </>
  )
}
