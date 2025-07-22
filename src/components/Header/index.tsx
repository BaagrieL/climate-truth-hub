"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header fixo */}
      <header className="fixed top-0 left-0 w-full h-16 bg-trasnparent backdrop-blur-sm shadow-md flex items-center justify-between px-8 z-50">
        <div className="font-bold text-green-600"><Link href={"/"}>ClimateTruth</Link></div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="hidden md:flex gap-6">
          <Link href={"/about"} className="hover:text-green-600">Sobre</Link>
          <Link href={"/facts"} className="hover:text-green-600">Fatos</Link>
          <Link href={"/login"} className="hover:text-green-600">Login</Link>
        </nav>
      </header>

      {/*  Espaço para evitar que o conteúdo fique atrás do Header */}
      <div className="h-15"></div>

      {/* Dropdown fora do fluxo do Header, com backdrop-blur funcional */}
      {menuOpen && (
        <nav className="fixed top-16 left-0 w-full backdrop-blur-md bg-transparent shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <Link href={"/about"} className="hover:text-green-600">Sobre</Link>
          <Link href={"/facts"} className="hover:text-green-600">Fatos</Link>
          <Link href={"/login"} className="hover:text-green-600">Login</Link>
        </nav>
      )}
    </>
  );
}
