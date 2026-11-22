
export type Achievement = {
  id: number
  title: string
  edition?: string
  year: string
  award: string
  category: string
  description: string
  contribution: string
  skills: string[]
  image: string
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'AVITHON',
    year: '2025',
    award: '1st Place',
    category: 'Aviation Hackathon',
    description:
      'Developed a concept to support helicopter pilots in making safer landing and takeoff decisions by considering important operational and environmental factors.',
    contribution:
      'I was responsible for UI/UX design, identifying user needs, analyzing requirements, and designing interfaces that translated those requirements into a clear and practical user experience.',
    skills: [
      'UI/UX Design',
      'Requirements Analysis',
      'Figma',
    ],
    image: '/achievements/avithon.jpeg',
  },
  {
    id: 2,
    title: 'Barmajan-sanaa',
    year: '2025',
    award: '2nd Place',
    category: 'Hajj Hackathon',
    description:
      'Designed a smart waste management concept for Hajj, where waste containers can notify responsible companies when they become full, helping improve collection efficiency.',
    contribution:
      'I worked on UI/UX design, studied the needs of the intended users, identified the main system requirements, and organized the interfaces to make the proposed solution easy to understand and use.',
    skills: [
      'UI/UX Design',
      'Requirements Analysis',
      'Figma',
    ],
    image: '/achievements/barmajoun.jpeg',
  },
  {
    id: 3,
    title: 'Maida Muhiuddin Nazer Award',
    edition: '3rd Edition',
    year: '2025',
    award: 'Audience Choice Award',
    category: 'Innovation Competition',
    description:
      'Created a learning application concept designed to help non-Arabic speakers learn Arabic and understand the Quran through accessible explanations and meanings.',
    contribution:
      'I contributed as a UI/UX designer, focusing on organizing the learning experience and creating clear, user-friendly interfaces that support the needs of non-Arabic-speaking learners.',
    skills: [
      'UI/UX Design',
      'User Experience',
      'Figma',
    ],
    image: '/achievements/maida3.jpeg',
  },
  {
    id: 4,
    title: 'Maida Muhiuddin Nazer Award',
    edition: '4th Edition',
    year: '2026',
    award: '2nd Place',
    category: 'Innovation Competition',
    description:
      'Presented an innovative project concept and worked with the team to develop it into a clear and structured competition proposal.',
    contribution:
      'I was the idea creator and helped shape the project direction, define its main objectives, communicate the concept to the team, and coordinate our understanding of the proposed solution.',
    skills: [
      'Idea Development',
      'Team Coordination',
      'Concept Planning',
    ],
    image: '/achievements/maida4.jpeg',
  },
]
