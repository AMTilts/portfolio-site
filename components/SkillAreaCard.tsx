'use client'; // Add directive as it uses Image and Icons
    import { IconType } from 'react-icons'; // Import IconType
    import Image from 'next/image';

    interface SkillAreaCardProps {
      title: string;
      description: string;
      icon?: IconType; // Make icon optional
      imageUrl?: string; // Optional specific image
      details: string[]; // List of specific skills/tools
    }

    const SkillAreaCard: React.FC<SkillAreaCardProps> = ({
      title,
      description,
      icon: Icon, // Destructure and rename prop
      imageUrl,
      details,
    }) => {
      return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col transition-shadow duration-300 hover:shadow-xl">
           <div className="flex items-center mb-4">
            {Icon && <Icon className="text-3xl mr-3 text-indigo-500" />}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          </div>
          {imageUrl && (
             <div className="relative w-full h-40 mb-4">
               <Image
                 src={imageUrl || '/placeholder-sysadmin.png'}
                 alt={`${title} illustration`}
                 fill // Use fill prop instead of layout="fill"
                 style={{ objectFit: 'contain' }} // Use style object for objectFit
                 className="rounded bg-gray-100 dark:bg-gray-700 p-2"
                 priority={false} // Optional: set priority=true for above-the-fold images
               />
             </div>
          )}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{description}</p>
          <div>
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">Key Skills & Tools</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    };

    export default SkillAreaCard;
