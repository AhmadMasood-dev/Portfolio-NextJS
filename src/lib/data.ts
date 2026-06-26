import type {
  PersonalInfo,
  SkillCategory,
  Experience,
  Project,
  Achievement,
  Certification,
  Education,
  Journey,
} from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Ahmad Masood',
  firstName: 'Ahmad',
  lastName: 'Masood',
  title: 'Frontend Developer',
  tagline: 'CS Student · React & Next.js · Microsoft Learn Student Ambassador',
  bio: "A Computer Science student at Quaid-e-Azam University with a focus on building interactive, user-friendly web experiences. I specialize in React.js, Next.js, and TypeScript, crafting clean UIs with Tailwind CSS and connecting them to real-time backends with Firebase and Supabase. I'm always looking to take on new challenges and collaborate on meaningful projects.",
  email: 'ahmadmasood.dev@gmail.com',
  phone: '+92 316 0707856',
  location: 'Islamabad, Pakistan',
  github: 'https://github.com/AhmadMasood-dev',
  linkedin: 'https://linkedin.com/in/ahmadmasood-dev',
  upwork: 'https://www.upwork.com/freelancers/~01d8a14171018f3346',
}

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', icon: 'SiHtml5' },
      { name: 'CSS / SCSS', icon: 'SiCss3' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'React.js', icon: 'SiReact' },
      { name: 'Next.js', icon: 'SiNextdotjs' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
      { name: 'Bootstrap', icon: 'SiBootstrap' },
      { name: 'Redux Toolkit', icon: 'SiRedux' },
      { name: 'React Query', icon: 'SiReactquery' },
      { name: 'Context API', icon: 'SiReact' },
      { name: 'React Router', icon: 'SiReactrouter' },
      { name: 'Framer Motion', icon: 'SiFramer' },
      { name: 'Shadcn UI', icon: 'SiShadcnui' },
      { name: 'Radix UI', icon: 'SiRadixui' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs' },
      { name: 'Express.js', icon: 'SiExpress' },
      { name: 'NestJS', icon: 'SiNestjs' },
      { name: 'Firebase', icon: 'SiFirebase' },
      { name: 'Supabase', icon: 'SiSupabase' },
      { name: 'MongoDB', icon: 'SiMongodb' },
      { name: 'SQL', icon: 'SiMysql' },
      { name: 'REST APIs', icon: 'SiPostman' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
      { name: 'VS Code', icon: 'SiVisualstudiocode' },
      { name: 'Figma', icon: 'SiFigma' },
      { name: 'Vercel', icon: 'SiVercel' },
      { name: 'Postman', icon: 'SiPostman' },
      { name: 'npm', icon: 'SiNpm' },
    ],
  },
]

export const experience: Experience[] = [
  // ─── Current work ──────────────────────────────────────────────────
  {
    role: 'Front-end AI Engineer',
    company: 'FlyRank AI',
    period: 'June 2026 – Present',
    location: 'Chicago, IL (Remote)',
    type: 'work',
    current: true,
    bullets: [
      'Interning as a Front-end AI Engineer, integrating AI-powered features into production web interfaces.',
      'Building intelligent UI components that surface model outputs in accessible, performant layouts.',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'AI/ML APIs'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Kodetics',
    period: 'August 2025 – Present',
    location: 'Islamabad, Pakistan',
    type: 'work',
    current: true,
    bullets: [
      'Joined as a Frontend Developer building scalable and responsive web applications using Next.js.',
      'Progressed from Junior to Mid-Level Frontend Developer, contributing to feature development, performance optimization, and UI/UX improvements.',
      'Expanded into backend development as a Junior Backend Developer using NestJS, building APIs, implementing business logic, and delivering full-stack production solutions.',
    ],
    tech: ['Next.js', 'TypeScript', 'NestJS', 'Tailwind CSS', 'Shadcn UI', 'MongoDB'],
  },

  // ─── Leadership roles ──────────────────────────────────────────────
  {
    role: 'TechOps Lead',
    company: 'MLSA QAU',
    period: 'July 2024 – February 2026',
    location: 'Islamabad, Pakistan',
    type: 'leadership',
    bullets: [
      'Oversaw technical operations ensuring seamless execution of projects, workshops, and hackathons.',
      'Led technical initiatives to enhance learning experiences and mentored team members in front-end technologies.',
      'Organized tech events to promote innovation and collaboration.',
      'Managed website & platform development using React.js, Redux, and modern UI frameworks.',
    ],
    tech: ['React.js', 'Redux', 'TypeScript', 'Tailwind CSS'],
  },
  {
    role: 'Technical Co-Lead',
    company: 'AICP QAU Student Chapter',
    period: 'November 2024 – September 2025',
    location: 'Islamabad, Pakistan',
    type: 'leadership',
    bullets: [
      'Inspired team members to think critically, solve problems effectively, and achieve meaningful milestones.',
      'Ensured technical excellence while empowering others to grow in AI and computer science.',
    ],
    tech: ['React.js', 'JavaScript', 'Technical Leadership'],
  },

  // ─── Previous work ─────────────────────────────────────────────────
  {
    role: 'Web Developer',
    company: 'BehinDev',
    period: 'April 2024 – June 2024',
    location: 'Lander, Wyoming (Remote)',
    type: 'work',
    bullets: [
      'Developed and maintained responsive user interfaces using HTML, CSS, Bootstrap, and Tailwind CSS.',
      'Built dynamic web applications with React.js, implementing interactivity and user actions with JavaScript.',
      'Integrated Firebase as a backend service for authentication and real-time database features.',
    ],
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Firebase', 'HTML', 'CSS'],
  },
]

export const certifications: Certification[] = [
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    year: '2024',
    description:
      'Demonstrated expertise in API fundamentals: designing, testing, and documenting APIs using Postman. Covers REST API concepts, collections, environments, and automated testing.',
    variant: 'postman',
    link: 'https://www.postman.com/',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    year: '2024',
    description:
      'Completed Google\'s foundational AI course covering machine learning concepts, responsible AI practices, and practical applications of AI in everyday workflows and development.',
    variant: 'google',
    link: 'https://grow.google/',
  },
  {
    title: 'Member, National Academy of Artificial Intelligence',
    issuer: 'NAAI',
    year: '2024',
    description:
      'Accepted as a member of the National Academy of Artificial Intelligence (NAAI), Pakistan, a community of AI researchers, students, and practitioners advancing AI education and research.',
    variant: 'naai',
  },
]

export const projects: Project[] = [
  {
    title: 'Real Time Message App',
    description:
      'Full-featured social platform with Firebase Auth for secure login/signup, real-time chat, user search, and image sharing. Focused on user privacy and seamless interaction.',
    tech: ['React.js', 'Firebase Auth', 'Firebase Realtime DB', 'JavaScript', 'CSS'],
    github: 'https://github.com/AhmadMasood-dev/Real-Time-Message-App',
    live: 'https://real-time-message-app-two.vercel.app',
    featured: true,
    image: '/projects/real-time-message-app.png',
    category: ['React', 'Firebase'],
  },
  {
    title: 'Ranked Vote',
    description:
      'Informative web app showcasing voter details, supporting companies, and public reviews. Designed a visually appealing responsive layout focused on clear content presentation.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/AhmadMasood-dev/Ranked-Vote',
    live: 'https://ranked-vote.vercel.app',
    featured: true,
    image: '/projects/ranked-vote.png',
    category: ['React'],
  },
  {
    title: 'usePopcorn',
    description:
      'Dynamic movie review platform using the IMDB API for real-time data. Implemented custom star ratings and user reviews with efficient React Hooks state management.',
    tech: ['React.js', 'IMDB API', 'React Hooks', 'JavaScript', 'CSS'],
    github: 'https://github.com/AhmadMasood-dev/usePopCorn',
    live: 'https://use-popcorn-dun.vercel.app',
    featured: false,
    image: '/projects/usepopcorn.png',
    category: ['React', 'API'],
  },
  {
    title: 'Zomato Clone',
    description:
      'A pixel-faithful frontend clone of Zomato, India\'s leading restaurant discovery platform. Recreates the location-aware hero search, curated collection cards, city-based browsing, chain restaurant directory, and mobile app download section.',
    tech: ['HTML', 'CSS', 'Tailwind CSS'],
    github: 'https://github.com/AhmadMasood-dev/zomato-clone',
    live: 'https://zomato-clone-my.vercel.app/',
    featured: false,
    image: '/projects/zomato-clone.png',
    screenshots: ['/projects/zomato-clone.png'],
    category: ['HTML/CSS'],
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Microsoft Learn Student Ambassador',
    org: 'Microsoft',
    year: '2024',
    description:
      'Selected as a Microsoft Learn Student Ambassador, part of a global community of student leaders passionate about technology and education. Organizing tech events and mentoring peers.',
    icon: 'microsoft',
  },
]

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Quaid-e-Azam University',
    location: 'Islamabad, Pakistan',
    period: '2022 – 2026',
    status: 'In Progress',
  },
]

export const journey: Journey[] = [
  {
    year: '2022',
    title: 'Started CS at QAU',
    description: 'Enrolled in Computer Science at Quaid-e-Azam University, Islamabad.',
  },
  {
    year: '2023',
    title: 'Built First Projects',
    description: 'Learned React.js and built first real-world projects independently.',
  },
  {
    year: '2024',
    title: 'BehinDev Internship',
    description: 'Landed first internship as a Web Developer, working with React and Firebase.',
  },
  {
    year: '2024',
    title: 'Microsoft Learn Student Ambassador',
    description: 'Selected as MLSA TechOps Lead, organizing tech events and empowering students.',
  },
  {
    year: '2025',
    title: 'Associate Software Engineer at Kodetics',
    description: 'Joined Kodetics, progressing from Junior to Mid-Level Frontend, then expanding into NestJS backend.',
  },
  {
    year: '2026',
    title: 'Front-end AI Engineer at FlyRank AI',
    description: 'Currently building AI-powered frontend experiences at FlyRank AI, Chicago.',
  },
]

export const techLogos = [
  'SiReact',
  'SiNextdotjs',
  'SiTypescript',
  'SiTailwindcss',
  'SiFirebase',
  'SiNodedotjs',
  'SiGit',
  'SiJavascript',
]
