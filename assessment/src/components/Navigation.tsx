import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="hover:text-gray-300 transition">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/resume" className="hover:text-gray-300 transition">
            Resume
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;