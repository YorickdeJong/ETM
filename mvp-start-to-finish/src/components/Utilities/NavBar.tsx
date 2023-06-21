// NavBar.tsx
'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image';

const NavBar = () => {
  const pathname = usePathname()
  
  return (
    <nav style={{ position: 'absolute', left: '-10vw', width: '100%', zIndex: 100 }}>
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6"> {/** Adjusted padding here */}
      <div className="relative flex items-center justify-between h-16">
        <div className="flex justify-between w-full px-2 lg:px-0">
          <div className="flex-shrink-0 flex">
  
                <Link href="/"
                className={`px-3 py-2 mt-1 rounded-md text-sm font-medium ${pathname === "/" ? "text-white" : "text-gray-400 hover:text-white border-opacity-50"}`}>
                    <h2 className = 'text-4xl'>Home</h2>
                </Link>
            </div>
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
 
            <div className="hidden lg:block">
              <div className="flex space-x-4 mt-1">
                    <Link href="/projects"
                    className={`px-3 py-2 rounded-md text-xl font-medium ${pathname === "/projects" ? " text-white" : "text-gray-300 hover:text-white"}`}>
                        <h2 className = 'text-4xl'>Projecten</h2>
                    </Link>

                    <Link href="/process"
                    className={`px-3 py-2 rounded-md text-xl font-medium ${pathname === "/process" ? " text-white" : "text-gray-300 hover:text-white"}`}>
                        <h2 className = 'text-4xl'>Process</h2>
                    </Link>

                    <Link href="/prices"
                    className={`px-3 py-2 rounded-md text-xl font-medium ${pathname === "/prices" ? " text-white" : "text-gray-300 hover:text-white"}`}>
                        <h2 className = 'text-4xl'>Prijzen</h2>
                    </Link>

                    <Link href="/contact"
                    className={`px-3 py-2 rounded-md text-xl font-medium ${pathname === "/contact" ? "text-white" : "text-gray-300 hover:text-white"}`}>
                        <h2 className = 'text-4xl'>Contact</h2>
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