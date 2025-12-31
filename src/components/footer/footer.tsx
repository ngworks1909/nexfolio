export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-background-dark py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/ngworks1909"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary transition-colors duration-300"
            >
              @ngworks1909
            </a>
            . © 2025 All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="https://github.com/ngworks1909" target="_blank">
            GitHub
          </a>
          <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/k-nithin-kumar-reddy-847284205/" target="_blank">
            LinkedIn
          </a>
          <a className="hover:text-primary transition-colors" href="https://x.com/NithinKumar1909" target="_blank">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
