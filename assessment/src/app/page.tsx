import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center justify-center max-h-full px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <div className="mb-6">
        <Image
          src="/pedro.jpg"
          alt="Pedro Lanzinha"
          width={300}
          height={300}
          className="rounded-full object-cover mx-auto shadow-lg border-2 border-gray-300 dark:border-gray-700"
          priority
        />
      </div>
      <p className="text-xl mb-8 max-w-2xl">
        My name is Pedro Lanzinha, and I&apos;m a passionate Analyst, SQL Developer, Engineer who is aiming to learn and understand more so as to create better experiences for real world problems by using real world solutions.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/portfolio"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition shadow"
        >
          Contact Me
        </Link>
      </div>
    </div>
  )
}