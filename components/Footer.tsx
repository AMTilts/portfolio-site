'use client'; // Add directive for consistency/future use
    import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Example icons

    const Footer = () => {
      return (
        <footer className="bg-gray-100 dark:bg-gray-800 mt-12 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
            <div className="flex justify-center space-x-6 mb-4">
               <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                 <FaGithub size={24} />
               </a>
               <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                 <FaLinkedin size={24} />
               </a>
               {/* Add other social links */}
            </div>
            <p>© {new Date().getFullYear()} Matthew Price. All rights reserved.</p>
          </div>
        </footer>
      );
    };

    export default Footer;
