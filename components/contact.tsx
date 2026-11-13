import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_EMAIL } from '@/lib/site'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 py-16 text-center md:px-6 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h2 id="contact-heading" className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
          Get in touch
        </h2>
        <p className="text-lg text-muted-foreground">
          Email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-foreground underline underline-offset-4 hover:text-primary">
            {CONTACT_EMAIL}
          </a>
        </p>
        <Button render={<a href={`mailto:${CONTACT_EMAIL}`} />} nativeButton={false} size="lg" className="px-5">
          <Mail data-icon="inline-start" aria-hidden="true" />
          Send an Email
        </Button>
      </div>
    </section>
  )
}
