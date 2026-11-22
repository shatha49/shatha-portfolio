
export type Project = {
  id: number
  title: string
  category: string
  description: string
  image: string
  technologies: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Masary',
    category: 'Web Development',
    description:
      'A university transportation platform designed to make bus seat booking easier and improve the daily experience of students.',
image: '/projects/masari.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    link: 'https://shatha49.github.io/masary/',
  },
  {
    id: 2,
    title: 'SmartPad',
    category: 'UI/UX Design',
    description:
      'A smart concept that supports safer helicopter landing and takeoff decisions by considering environmental conditions.',
    image: '/projects/smartpad.png',
    technologies: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.figma.com/design/wisaJE4Zp4qD0aowCjpYIJ/Untitled?node-id=0-1&t=9QHxd18PjpzVBhwS-1',
  },
  {
    id: 3,
    title: 'AIlend',
    category: 'UI/UX Design',
    description:
      'An AI-powered credit scoring web platform concept designed to support banks in evaluating lending decisions.',
    image: '/projects/ailend.png',
    technologies: ['Figma', 'UI/UX', 'Prototyping'],
    link: 'https://www.figma.com/proto/SwQI9vNZpxninOlEWFxvKF/Untitled?node-id=1-3&viewport=25%2C223%2C0.21&t=68uEWzwhsiTQ2jAr-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1&page-id=0%3A1',
  },
]
