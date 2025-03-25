import Link from 'next/link';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Pedro Lanzinha
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header;