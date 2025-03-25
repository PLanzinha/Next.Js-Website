import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <SocialIcons />
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} Designed by Pedro Lanzinha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer