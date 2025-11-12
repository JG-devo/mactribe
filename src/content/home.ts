import home1 from '@/images/home-1.jpeg';
import home2 from '@/images/home-2.jpeg';
import home3 from '@/images/home-3.jpeg';
import home4 from '@/images/home-4.jpeg';
import home5 from '@/images/home-5.jpeg';
import home6 from '@/images/home-6.jpeg';
import home7 from '@/images/home-7.jpeg';
import home8 from '@/images/home-8.jpeg';

import type { ImageSource } from '@/lib/resolve-images';

type FeatureCard = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: ImageSource;
};

export const feature69Content: FeatureCard[] = [
  {
    id: 'feature-1',
    title: 'IT Support',
    description:
      'Whether you operate a purely Apple-based business or use a mix of technologies including Microsoft, we’ll help you get the best from all your platforms.',
    href: '#',
    image: { type: 'local', src: home1 },
  },
  {
    id: 'feature-2',
    title: 'IT Consultancy',
    description:
      'If you have a goal in mind or need help bringing your IT environment to life, we’ll work with you to shape your setup to match your objectives.',
    href: '#',
    image: { type: 'local', src: home2 },
  },
  {
    id: 'feature-3',
    title: 'IT Solutions',
    description:
      'We provide Mac IT solutions covering networking, internet, VoIP, advanced cyber security, cloud services, and everything else you need to run your business efficiently.',
    href: '#',
    image: { type: 'local', src: home3 },
  },
];

export const feature2Content = {
  title: 'The Perfect Level of IT Support',
  description:
    'We offer support on a per-user pricing plan. Start with a base cost, then add features your business actually needs. No bundles packed with things you’ll never use. No upselling. No stress. Just the right tools for your setup, whether that’s a 5-person remote team or a company with 100+ staff across offices and continents. If you’d like a proper quote, just get in touch. We’ll ask a few questions and give you clear, straightforward pricing.',
  image: { type: 'local', src: home4 } satisfies ImageSource,
  imageAlt: 'A group of people working in an office',
  buttonPrimary: { text: 'Call us', href: 'tel:+15551234567' },
  buttonSecondary: { text: 'Contact us', href: '#' },
};

export const feature166Content = {
  title: 'The Perks of Working With Us',
  description:
    'Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.',
  feature1: {
    title: 'Advanced Cybersecurity',
    description:
      'Creating intuitive user experiences with modern interface design principles and user-centered methodologies.',
    image: { type: 'local', src: home6 } satisfies ImageSource,
  },
  feature2: {
    title: 'Dedicated Account Management',
    description:
      'Building websites that look and function perfectly across all devices and screen sizes.',
    image: { type: 'local', src: home7 } satisfies ImageSource,
  },
  feature3: {
    title: 'Full Scope Maintenance',
    description:
      "Seamlessly incorporating your brand identity into every aspect of your website's design.",
    image: { type: 'local', src: home8 } satisfies ImageSource,
  },
  feature4: {
    title: 'Everything Under One Roof',
    description:
      'Ensuring fast loading times and smooth performance through optimized code and assets.',
    image: { type: 'local', src: home5 } satisfies ImageSource,
  },
};
