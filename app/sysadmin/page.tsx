import SkillAreaCard from '@/components/SkillAreaCard';
    // Import specific icons you want to use
    import { FaServer, FaNetworkWired, FaLinux, FaDocker, FaShieldAlt, FaWindows, FaApple } from 'react-icons/fa';
    import { SiProxmox, SiVmware } from "react-icons/si"; // Example specific tech icons

    // DUMMY DATA - Replace and expand with your specifics
    const sysAdminSkills = [
      {
        title: 'Virtualization & Containerization',
        icon: FaServer, // Example Icon
        imageUrl: '/placeholder-sysadmin.png', // Or a diagram?
        description: 'Extensive experience designing, deploying, and managing multi-node virtualization clusters and containerized applications for efficient resource utilization and service deployment.',
        details: [
          'Proxmox VE (Clustering, HA, Backups)',
          'VMware ESXi / vSphere Basics',
          'Microsoft Hyper-V',
          'KVM, LXC',
          'Docker & Docker Compose',
          'Portainer',
          'GPU Passthrough Configuration',
        ],
      },
      {
        title: 'Networking & Security',
        icon: FaNetworkWired,
        description: 'Proficient in configuring and managing complex network infrastructure with a strong focus on security best practices, segmentation, and secure access.',
        details: [
          'VLAN Implementation & Management',
          'OpenWRT Firmware & Configuration',
          'Firewall Rules (iptables/nftables basics)',
          'Nginx Reverse Proxy & Load Balancing Concepts',
          'SSL/TLS Certificate Management (Let\'s Encrypt)',
          'DNS & DHCP Server Management',
          'VPN Setup (e.g., WireGuard)',
          'Cloudflare Proxying & Security (ACLs)',
          'Network Troubleshooting Tools',
        ],
      },
      {
        title: 'Operating System Administration',
        icon: FaLinux, // Primarily Linux focused based on description
        description: 'Deep hands-on expertise across major operating systems, specializing in Linux server administration, maintenance, and troubleshooting.',
        details: [
          'Linux (Debian/Ubuntu Expert, CentOS)',
          'Windows Server (AD Basics)',
          'macOS Administration',
          'Bash Scripting (Automation)',
          'System Monitoring & Log Analysis',
          'Patch Management & Updates',
          'User & Permissions Management',
          'ZFS Filesystem Management',
          'SMB/NFS Configuration',
        ],
      },
       {
        title: 'Hardware & Troubleshooting',
        icon: FaShieldAlt, // Using Shield as a general 'fixing' icon
        description: 'Skilled in diagnosing and resolving hardware issues, including component-level repair and recovery of non-responsive systems.',
        details: [
          'Server & PC Hardware Builds/Upgrades',
          'Component-Level Diagnostics',
          'Soldering & Rework Station Use',
          'Embedded System Recovery (UART)',
          'Android Device Rooting/Modification',
           'Router Firmware Flashing/Recovery (OpenWRT)',
        ],
      },
      // Add more areas like Automation, Cloud Basics (if applicable), etc.
    ];

    export default function SysAdminPage() {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl mb-12">
            Systems Administration Expertise
          </h1>
           <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Managing reliable, secure, and efficient IT infrastructure through hands-on experience and proactive problem-solving.
           </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sysAdminSkills.map((skill, index) => (
              <SkillAreaCard key={index} {...skill} />
            ))}
          </div>
        </div>
      );
    }
