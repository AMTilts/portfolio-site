import ProjectCard from '@/components/ProjectCard';

    // DUMMY DATA - Replace with your actual projects
    const webProjects = [
      {
        title: 'Multi-LLM Chatbot',
        description: 'Developed a full-stack web application enabling users to query multiple Large Language Models simultaneously with real-time streaming responses.',
        imageUrl: '/placeholder-project.jpg', // Replace with actual screenshot path later
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Clerk', 'PostgreSQL', 'Vercel AI SDK'],
        liveUrl: '#', // Add link if deployed
        repoUrl: 'https://github.com/yourgithub/your-chatbot-repo', // Add repo link
      },
       {
        title: 'High School CMS (Legacy)',
        description: 'Created a custom CMS-like system enabling staff content updates for the Centennial High School website (circa 2004-2005).',
        imageUrl: '/placeholder-project.jpg',
        techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        // No live/repo link likely
      },
      {
        title: 'Another Cool Project',
        description: 'Brief description of another web project you built. Focus on the problem solved or key features.',
        imageUrl: '/placeholder-project.jpg',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: '#',
        repoUrl: '#',
      },
       // Add more projects...
    ];


    export default function WebDevPage() {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl mb-12">
            Web Development Showcase
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      );
    }
