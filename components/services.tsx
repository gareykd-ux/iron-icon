import { Bike, PenTool, Wrench, type LucideIcon } from 'lucide-react'
import { SERVICES } from '@/lib/site'

const ICONS: Record<string, LucideIcon> = {
  'replacement-parts': Wrench,
  'motorcycle-accessories': Bike,
  'signage-engraving': PenTool,
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="border-b border-border bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mb-10 flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services</p>
          <h2 id="services-heading" className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Services &amp; Pricing
          </h2>
        </div>
        <ul className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.id]
            return (
              <li key={service.id} className="flex flex-col gap-5 rounded-lg border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-md bg-secondary">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-xl font-semibold">{service.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
                <dl className="mt-auto flex flex-col divide-y divide-border border-t border-border">
                  {service.items.map((item) => (
                    <div key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-sm">{item.name}</dt>
                      <dd className="font-heading text-lg font-semibold whitespace-nowrap text-primary">
                        {item.price}
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
