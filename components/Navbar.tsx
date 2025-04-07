'use client'; // Add this directive for client-side components in App Router
    import Link from 'next/link';

    const Navbar = () => {
      return (
        <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  Matthew Price
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/web-dev" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Web Development
                  </Link>
                  <Link href="/sysadmin" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Systems Admin
                  </Link>
                  {/* Add Contact or About later if needed */}
                </div>
              </div>
              {/* Add Mobile Menu Button Here if needed */}
            </div>
          </div>
        </nav>
      );
    };

    export default Navbar;
