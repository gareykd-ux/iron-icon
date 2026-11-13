import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
