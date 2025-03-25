import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8">
        I&apos;m a passionate web developer learning more so as to create better experiences for real world problems using real world solutions.
      </p>
      <div className="flex justify-center gap-4">
        <Link 
          href="/portfolio" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View My Work
        </Link>
        <Link 
          href="/contact" 
          className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Contact Me
        </Link>
      </div>
    </div>
  )
}