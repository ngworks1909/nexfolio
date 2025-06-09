import Link from 'next/link'
import FooterButton from './FooterButton'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="https://github.com/ngworks1909"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              @ngworks1909
            </Link>
            . © 2025 All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <FooterButton type='github'/>
          <FooterButton type='twitter'/>
          <FooterButton type='linkedin'/>
        </div>
      </div>
    </footer>
  )
}
