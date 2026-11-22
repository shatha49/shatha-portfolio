
export type Skill = {
  id: number
  title: string
  description: string
  icon: string
  tools: string[]
}

export const skills: Skill[] = [
  {
    id: 1,
    title: 'Web Development',
    description:
      'Building responsive and user-friendly websites, turning creative designs into functional web experiences.',
    icon: 'code',
    tools: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description:
      'Designing intuitive and visually engaging interfaces that focus on user needs and smooth interactions.',
    icon: 'palette',
    tools: ['Figma', 'Wireframing', 'Prototyping'],
  },
  {
    id: 3,
    title: 'Requirements Analysis',
    description:
      'Understanding user needs and translating ideas into clear, organized, and practical system requirements.',
    icon: 'clipboard',
    tools: ['User Needs', 'Functional Requirements', 'Use Cases'],
  },
  {
    id: 4,
    title: 'Database & Backend',
    description:
      'Connecting websites to databases and developing the functionality needed to manage information.',
    icon: 'database',
    tools: ['MySQL', 'Node.js', 'Express'],
  },
  {
    id: 5,
    title: 'Problem Solving',
    description:
      'Analyzing challenges, thinking critically, and finding practical solutions through logical reasoning.',
    icon: 'lightbulb',
    tools: ['Analytical Thinking', 'Debugging', 'Logic'],
  },
  {
    id: 6,
    title: 'Team Collaboration',
    description:
      'Working with different teams, sharing ideas, and communicating effectively to achieve common goals.',
    icon: 'users',
    tools: ['Communication', 'Teamwork', 'Planning'],
  },
]
