import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        Logo
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
