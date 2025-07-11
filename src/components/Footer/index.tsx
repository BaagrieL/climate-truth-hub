'use client'

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white px-6 py-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Climate Truth Hub. Todos os direitos reservados.
        </p>

        <div className="flex space-x-4">
          <Link href="https://github.com/BaagrieL/climate-truth-hub" target="_blank">
            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
          </Link>

          <Link href="https://www.linkedin.com/in/baagriel/" target="_blank">
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </Link>

          <Link href="https://www.instagram.com/baagriel/" target="_blank">
            <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
          </Link>

        </div>
      </div>
    </footer>
  )
}
