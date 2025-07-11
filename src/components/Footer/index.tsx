'use client'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-6 py-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Climate Truth Hub. Todos os direitos reservados.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/BaagrieL/climate-truth-api"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-sm"
          >
            GitHub API
          </a>
          <a
            href="https://github.com/BaagrieL/climate-truth-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-sm"
          >
            GitHub Frontend
          </a>
        </div>
      </div>
    </footer>
  )
}
