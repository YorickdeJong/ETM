// NavBar.tsx
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image';

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className="bg-gradient bg-dark:blue-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex justify-between w-full px-2 lg:px-0">
            <div className="flex-shrink-0 flex">
              {/* Logo can go here */}
              <Image
                src="/app-logo-v1-3.png"
                alt="Vercel Logo"
                className="dark"
                width={55}
                height={24}
                priority
                />
                <Link href="/"
                className={`px-3 py-2 rounded-md text-sm ml-3 font-medium ${router.pathname === "/" ? "text-white" : "text-gray-400 hover:text-white border-opacity-50"}`}>
                    <h2 className = 'text-2xl'>Home</h2>
                </Link>
            </div>
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
 
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4">
                    <Link href="/projects"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "/projects" ? " text-white" : "text-gray-400 hover:text-white"}`}>
                        <h2 className = 'text-2xl'>Projecten</h2>
                    </Link>

                    <Link href="/process"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "/process" ? " text-white" : "text-gray-400 hover:text-white"}`}>
                        <h2 className = 'text-2xl'>Process</h2>
                    </Link>

                    <Link href="/prices"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "/prices" ? " text-white" : "text-gray-400 hover:text-white"}`}>
                        <h2 className = 'text-2xl'>Prijzen</h2>
                    </Link>

                    <Link href="/contact"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "/contact" ? "text-white" : "text-gray-400 hover:text-white"}`}>
                        <h2 className = 'text-2xl'>Contact</h2>
                    </Link>
                </div>
            </div>
            {/* Add more links as necessary */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;