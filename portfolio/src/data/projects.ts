
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
  steamLink?: string;
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
  themeColor: {
  accent: string;
  accentMuted: string;
  tag: string;
  tagText: string;
}
}

export const projects: Project[] = [
  {

    themeColor: {
      accent: '#7F77DD',
      accentMuted: '#EEEDFE',
      tag: '#EEEDFE',
      tagText: '#3C3489',
    },
    
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


  {
    id: 'pizzakai',
    title: 'PizzaKai',
    subtitle: 'A 2D action platformer where you play as a deceased slice of pizza, destroying pizza mobsters through a corrupt pizza-based world.',
    category: 'game',
    tags: ['Unity', 'C#', 'Steam', '2D Platformer'],
    role: 'Producer, Lead Systems Engineer, SFX Designer, VFX Artist',
    teamSize: 9,
    duration: '4 months',
    engine: 'Unity',
    itchLink: undefined,
    githubLink: undefined,
    steamLink: 'https://store.steampowered.com/app/2834430/Pizzakai/',
    overview: 'PizzaKai was developed over 4 months as part of Michigan State University\'s Game Design and Development program. As Producer and Lead Systems Engineer, I led the programming, art, VFX and SFX teams across the full development cycle. My work spanned core weapon systems, a custom audio pipeline, and a shader-based VFX system used across every enemy, weapon, and environment in the game.',
    thumbnail: '/pizzakai/MainArtPicture_edited.jpg',
    heroBanner: '/pizzakai/MainArtPicture_edited.jpg',
    themeColor: {
      accent: '#E8820C',
      accentMuted: '#FFF3E0',
      tag: '#3D1F00',
      tagText: '#E8820C',
    },
    contributions: [
      {
        title: 'Shotgun Slam system',
        description: 'Designed and implemented the Shotgun Slam — a melee alternative fire for the shotgun. I was responsible for the full code implementation, VFX using emission maps and shader graphs, and SFX. A key design principle was maximising the satisfaction and physical feedback of the move.',
        images: [
          '/pizzakai/ShotgunDashShowcaseGif.gif',
          '/pizzakai/ShotgunDashCloseGIF.gif',
        ],
      },
      {
        title: 'Audio dictionary system',
        description: 'Designed a custom audio event system built on Unity\'s animation events. The system uses a designer-friendly dictionary visible in the inspector, allowing SFX to be added, changed or removed with minimal code. Any AudioClip can be played on a local or remote object in a single line of code.',
        images: [
          '/pizzakai/AudioDictSingleLine.PNG',
          '/pizzakai/pizzagod.gif',
        ],
      },
      {
        title: 'Shader graphs & VFX',
        description: 'Built a shader graph pipeline that multiplied custom emission maps against an HDR glow texture, using alpha values from the emission map to control colour intensity. Applied this across every enemy, weapon, boss, and environment sprite sheet in the game — over 20 unique implementations.',
        images: [
          '/pizzakai/ShaderGraphImage.png',
          '/pizzakai/ShotgunDashEmissionSheet.png',
          '/pizzakai/DeepDishSpriteSheet.PNG',
          '/pizzakai/DeepDishEmissiveSprite.PNG',
          '/pizzakai/DeepDishDeathGif.gif',
          '/pizzakai/BreadstickIdleGif.gif',
          '/pizzakai/ForkyIdleGIF.gif',
        ],
      },
    ],
  },
]

