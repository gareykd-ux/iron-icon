import { CONTACT_EMAIL } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground md:flex-row md:px-6">
        <p>
          &copy; {new Date().getFullYear()} Iron Icon Industries LLC &middot; Veteran Owned
        </p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  )
}
