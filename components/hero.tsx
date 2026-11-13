import { Mail, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CAPABILITIES, CONTACT_EMAIL } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-col gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
            Veteran Owned
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Iron Icon Industries LLC
          </h1>
          <ul className="flex flex-wrap gap-2" aria-label="Capabilities">
            {CAPABILITIES.map((capability) => (
              <li
                key={capability}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium"
              >
                {capability}
              </li>
            ))}
          </ul>
          <p className="max-w-prose text-lg leading-relaxed text-muted-foreground text-pretty">
            Replacement parts, motorcycle accessories, and signage &amp; engraving.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button render={<a href="#services" />} nativeButton={false} size="lg" className="px-4">
              View Services &amp; Pricing
            </Button>
            <Button
              render={<a href={`mailto:${CONTACT_EMAIL}`} />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="px-4"
            >
              <Mail data-icon="inline-start" aria-hidden="true" />
              {CONTACT_EMAIL}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
