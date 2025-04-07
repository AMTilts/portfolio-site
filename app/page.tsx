import HeroSection from '@/components/HeroSection';

    export default function Home() {
      return (
        <div>
          <HeroSection />
          {/* You could add brief intro sections below the hero later */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
             <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-6">
                Bridging Development & Operations
             </h2>
             <p className="text-xl text-gray-600 dark:text-gray-300">
                 Explore my journey through building dynamic web applications and managing robust, secure infrastructure.
             </p>
          </div>
        </div>
      );
    }
