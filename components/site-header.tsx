import { Button } from '@/components/ui/button'
import { CONTACT_EMAIL } from '@/lib/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-md bg-primary font-heading text-sm font-bold text-primary-foreground"
          >
            II
          </span>
          <span className="font-heading text-base font-semibold leading-tight tracking-tight md:text-lg">
            Iron Icon Industries <span className="text-muted-foreground">LLC</span>
          </span>
        </a>
        <nav aria-label="Main" className="flex items-center gap-6">
          <a href="#services" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Services
          </a>
          <a href="#contact" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline">
            Contact
          </a>
          <Button render={<a href={`mailto:${CONTACT_EMAIL}`} />} nativeButton={false} size="sm">
            Email Us
          </Button>
        </nav>
      </div>
    </header>
  )
}
