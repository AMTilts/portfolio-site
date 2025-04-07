'use client'; // Add directive as it contains Links
    import Link from 'next/link';

    const HeroSection = () => {
      return (
        // Apply the animated gradient, adjust colors in tailwind.config.js
        <div className="relative text-white py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden min-h-[60vh] flex items-center justify-center
                        bg-hero-gradient-animated bg-400% animate-gradient-shift">
          <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional overlay for text contrast */}
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg">
              Matthew Price
            </h1>
            <p className="mt-6 max-w-md mx-auto text-xl sm:text-2xl md:mt-8 md:max-w-3xl drop-shadow-md">
              Full-Stack Developer & Systems Administrator
            </p>
            <p className="mt-4 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-2xl drop-shadow-md">
               Building innovative solutions and maintaining reliable infrastructure.
            </p>
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/web-dev"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 dark:text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
              >
                View Web Projects
              </Link>
              <Link
                href="/sysadmin"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-transparent dark:border-white dark:hover:bg-white dark:hover:text-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
              >
                Explore SysAdmin Skills
              </Link>
            </div>
          </div>
        </div>
      );
    };

    export default HeroSection;
