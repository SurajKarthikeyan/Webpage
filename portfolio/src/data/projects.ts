export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'game' | 'solo' | 'research';
  tags: string[];
  role: string;
  teamSize: number;
  duration: string;
  engine: string;
  award?: string;
  itchLink?: string;
  githubLink?: string;
  overview: string;
  thumbnail: string;
  heroBanner: string;
  contributions: {
    title: string;
    description: string;
    images: string[];
  }[];
}

export const projects: Project[] = [
  {
    id: 'wizards-and-rhymes',
    title: 'Wizards & Rhymes',
    subtitle: 'A 3D isometric puzzle adventure where you play a wizard battling in an epic fantasy rap battle to claim the title of Wizard of all Rhymes.',
    category: 'game',
    tags: ['Unity', 'C#', 'Wwise', 'Isometric'],
    role: 'Systems Engineer, Audio Integration',
    teamSize: 10,
    duration: '4 months',
    engine: 'Unity',
    award: 'Best Overall — MSU Spring Game Showcase 2024',
    itchLink: 'https://kaeyuhhh.itch.io/wizards-and-rhymes',
    overview: 'Wizards & Rhymes was developed over 4 months as part of Michigan State University\'s Game Design and Development program, ultimately winning Best Overall at the 2024 Spring Game Showcase. As Systems Engineer, I was responsible for designing and integrating the core systems for the ice and lightning puzzle, as well as owning the entire audio pipeline through Wwise middleware. Working in a team of 10, I focused on building designer-friendly systems that gave the team the freedom to create and iterate quickly without needing to touch code.',
    thumbnail: '/wizards-and-rhymes/MainBanner.jpg',
    heroBanner: '/wizards-and-rhymes/MainBanner.jpg',
    contributions: [
      {
        title: 'Ice puzzle system',
        description: 'Designed and implemented a grid-based ice movement system where the player slides and collides with blocks that either move or stop them. Built to be designer-friendly so the team could rapidly create and iterate on puzzle layouts without touching code.',
        images: [
          '/wizards-and-rhymes/IcePuzzle1Gif.gif',
          '/wizards-and-rhymes/IcePuzzle2GIF.gif',
        ],
      },
      {
        title: 'Lightning puzzle system',
        description: 'Built four interlocking mechanics — Lever, Push Block, Electro Block, and Pressure Plate — and integrated them into a unified system, giving designers a clean toolkit to create obstacle-based puzzles without dependency conflicts between subsystems.',
        images: [
          '/wizards-and-rhymes/LightningPuzzle1Gif.gif',
          '/wizards-and-rhymes/LightningPuzzle2Gif.gif',
        ],
      },
      {
        title: 'Audio integration & Wwise',
        description: 'Owned all audio integration across the project using Wwise middleware. Set up dynamic music transitions tied to level progression, and built an event-driven beat reaction system that let objects and decals pulse in sync with the music.',
        images: [
          '/wizards-and-rhymes/WWiseGIF.gif',
          '/wizards-and-rhymes/DecalGif.gif',
        ],
      },
    ],
  },
]