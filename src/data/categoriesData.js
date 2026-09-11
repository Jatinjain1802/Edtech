// src/data/categoriesData.js
/**
 * LEARNING POINT (JavaScript ES Modules):
 * In modern JavaScript (ES6+), `export const` allows us to export named values 
 * from a module so that other files (like React components) can import and reuse them.
 */

export const categoriesData = [
  {
    id: 'web-dev',
    title: 'Web Development',
    courseCount: '48 Courses',
    iconName: 'Code2',
    bgColor: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    badgeColor: 'bg-indigo-100 text-indigo-700',
    description: 'Master React, Node.js, Next.js, and modern full-stack web development.',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    courseCount: '32 Courses',
    iconName: 'Palette',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    badgeColor: 'bg-purple-100 text-purple-700',
    description: 'Learn wireframing, Figma design systems, prototyping, and user research.',
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    courseCount: '26 Courses',
    iconName: 'Cpu',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    badgeColor: 'bg-blue-100 text-blue-700',
    description: 'Build LLM apps, Python neural networks, Deep Learning, and AI agents.',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    courseCount: '29 Courses',
    iconName: 'BarChart3',
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    description: 'Analyze complex datasets with Python, SQL, Pandas, and PowerBI visuals.',
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    courseCount: '21 Courses',
    iconName: 'TrendingUp',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
    badgeColor: 'bg-amber-100 text-amber-700',
    description: 'SEO strategy, performance marketing, growth hacking, and social media analytics.',
  },
  {
    id: 'business',
    title: 'Business & Startup',
    courseCount: '19 Courses',
    iconName: 'Briefcase',
    bgColor: 'bg-rose-50',
    iconColor: 'text-rose-600',
    badgeColor: 'bg-rose-100 text-rose-700',
    description: 'Venture fundraising, SaaS product strategy, team management, and pitch decks.',
  },
];
