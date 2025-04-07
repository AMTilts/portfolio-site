'use client'; // Add directive as it uses Image and Links
    import Image from 'next/image'; // Use Next.js Image component
    import Link from 'next/link';
    import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

    interface ProjectCardProps {
      title: string;
      description: string;
      imageUrl: string;
      techStack: string[];
      liveUrl?: string;
      repoUrl?: string;
    }

    const ProjectCard: React.FC<ProjectCardProps> = ({
      title,
      description,
      imageUrl,
      techStack,
      liveUrl,
      repoUrl,
    }) => {
      return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col">
          <div className="relative w-full h-48 sm:h-56">
            {/* Use placeholder image */}
            <Image
              src={imageUrl || '/placeholder-project.jpg'} // Use imported placeholder
              alt={`${title} screenshot`}
              fill // Use fill prop instead of layout="fill"
              style={{ objectFit: 'cover' }} // Use style object for objectFit
              className="bg-gray-200 dark:bg-gray-700" // Background while loading
              priority={false} // Optional: set priority=true for above-the-fold images
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{description}</p>
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-4">
              {repoUrl && (
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaGithub size={20} aria-label="GitHub Repository"/>
                </a>
              )}
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  <FaExternalLinkAlt size={20} aria-label="Live Demo"/>
                </a>
              )}
            </div>
          </div>
        </div>
      );
    };

    export default ProjectCard;
