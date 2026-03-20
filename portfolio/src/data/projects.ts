
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
      accentMuted: '#2A2860',
      tag: '#2A2860',
      tagText: '#A8A3F0',
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
      accentMuted: '#3D1F00',
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
        ],
      },
      {
        title: 'Shader graphs & VFX',
        description: 'Built a shader graph pipeline that multiplied custom emission maps against an HDR glow texture, using alpha values from the emission map to control colour intensity. Applied this across every enemy, weapon, boss, and environment sprite sheet in the game — over 20 unique implementations.',
        images: [
          '/pizzakai/DeepDishSpriteSheet.PNG',
          '/pizzakai/DeepDishEmissiveSprite.PNG',
          '/pizzakai/DeepDish_Death.png',
        ],
      },
      {
        title: 'Emission results',
        description: 'The final results of the emission pipeline applied across three enemy types — each with unique death and idle animations enhanced by the shader system.',
        images: [
          '/pizzakai/BreadstickIdleGif.gif',
          '/pizzakai/DeepDishDeathGif.gif',
          '/pizzakai/ForkyIdleGIF.gif',
        ],
      },
    ],
  },

  {
  id: 'stoma-vr',
  title: 'STOMA VR',
  subtitle: 'A VR medical simulation aimed at teaching new residents and students the differences between tracheostomies and laryngectomies through hands-on procedural practice.',
  category: 'game',
  tags: ['Unity', 'C#', 'VR', 'Simulation'],
  role: 'Lead Programmer, Systems Engineer, Systems Integration',
  teamSize: 8,
  duration: '4 months',
  engine: 'Unity',
  itchLink: undefined,
  steamLink: undefined,
  githubLink: undefined,
  overview: 'STOMA VR was developed over 4 months during the Summer of 2023 as a VR educational simulation for medical students. As Lead Programmer, I was responsible for the core interaction systems that allowed students to physically perform medical procedures in VR, as well as a state-based procedure system that tracked correctness and fed results back to supervising teachers.',
  thumbnail: '/stoma-vr/MainPage.jpg',
  heroBanner: '/stoma-vr/MainPage.jpg',
  themeColor: {
    accent: '#0D9488',
    accentMuted: '#042F2E',
    tag: '#042F2E',
    tagText: '#0D9488',
  },
  contributions: [
    {
      title: 'Procedure system',
      description: 'Responsible for the stage-change triggers within the two-part procedure system. Player actions — object collisions, object states — advanced the game state through each procedural step. Built in correctness tracking so supervising teachers could receive real-time feedback on student performance.',
      images: [
        '/stoma-vr/MainModule1Showcase.PNG',
        '/stoma-vr/Module1Games.png',
      ],
    },
    {
      title: 'Player interaction system',
      description: 'Designed and engineered the player interaction system using C# interfaces to detect and handle interactable objects in the scene. Using interfaces allowed for multiple inheritance, meaning any object could be made interactable with a consistent API while keeping individual implementations flexible.',
      images: [
        '/stoma-vr/PlayerHand.PNG',
        '/stoma-vr/Patient3.PNG',
      ],
    },
    {
      title: 'Audio-animation system',
      description: 'Built an audio event system on top of Unity\'s animation events, allowing audio clips to trigger at specific animation frames. Designed for extensibility — new SFX could be added with minimal additional code. Used throughout the simulation for procedural feedback, such as syncing audio to patient interaction animations.',
      images: [
        '/stoma-vr/AudioDictImage1.PNG',
        '/stoma-vr/AudioDictImage2.PNG',
      ],
    },
  ],
},

{
  id: 'beyond-meetspace',
  title: 'Beyond MeetSpace',
  subtitle: 'A VR meeting platform designed for classrooms, game designers and large virtual meetings, funded by the National Science Foundation.',
  category: 'game',
  tags: ['Unity', 'C#', 'VR', 'VRChat'],
  role: 'Systems Engineer, Team Lead',
  teamSize: 6,
  duration: '4 months',
  engine: 'Unity',
  itchLink: undefined,
  steamLink: undefined,
  githubLink: undefined,
  overview: 'Beyond MeetSpace is an NSF-funded VR meeting platform built for classrooms, game designers and large-scale virtual meetings. As Team Lead and Systems Engineer, I was responsible for bridging communication between the development team and the research leadership, managing scope and deadlines for client-facing research studies, and refactoring the avatar creation pipeline — reducing development time by 64%.',
  thumbnail: '/bms/BMSCoverImage.PNG',
  heroBanner: '/bms/BMSCoverImage.PNG',
  themeColor: {
    accent: '#6B7FD4',
    accentMuted: '#141830',
    tag: '#141830',
    tagText: '#6B7FD4',
  },
  contributions: [
    {
      title: 'Team lead & communication',
      description: 'Served as the bridge between the 6-member development team and the NSF-funded research leadership. On a weekly basis I ran meetings with both groups, conveying tasks, requested features, and bug reports in both directions — while ensuring requested features stayed within scope and didn\'t block other key systems.',
      images: [
        '/bms/CastleAndBoat.PNG',
        '/bms/Beach.PNG',
      ],
    },
    {
      title: 'Avatar system refactor',
      description: 'Refactored the existing ReadyPlayerMe avatar creation pipeline for VRChat, improving development time by 64%. By decoupling the avatar import process from code, designers could freely add new avatars without engineering involvement. Also designed an in-game avatar board allowing players to browse and select their avatar.',
      images: [
        '/bms/BMSSlideShowImage.PNG',
        '/bms/BMSBoardImage.PNG',
      ],
    },
  ],
},


{
  id: 'simple-eq',
  title: 'SimpleEQ',
  subtitle: 'A C++ equalizer plugin built in the JUCE framework, deployable as a VST3 inside any DAW including Reaper and Ableton.',
  category: 'solo',
  tags: ['C++', 'JUCE', 'VST3', 'Audio'],
  role: 'Solo Developer',
  teamSize: 1,
  duration: 'Personal project',
  engine: 'JUCE',
  itchLink: undefined,
  steamLink: undefined,
  githubLink: undefined,
  overview: 'After working extensively with audio implementation in Unity games, I wanted to go deeper into audio engineering by building my own C++ plugin from scratch. SimpleEQ is a fully functional equalizer VST3 built in the JUCE framework, loadable inside any DAW. It implements high and low pass filters, adjustable attenuation slopes from 12 to 48 dB per octave, and a real-time gain filter — all controllable via sliders with live audio feedback.',
  thumbnail: '/simple-eq/ReaperBackgroundShot.PNG',
  heroBanner: '/simple-eq/ReaperBackgroundShot.PNG',
  themeColor: {
    accent: '#4F6EF7',
    accentMuted: '#0F1540',
    tag: '#0F1540',
    tagText: '#4F6EF7',
  },
  contributions: [
    {
      title: 'Pass filters & attenuation',
      description: 'Implemented high and low pass filters that attenuate frequencies above or below the slider mark. Used together they create a band pass filter. The attenuation slope is adjustable between 12 and 48 dB per octave, giving precise control over how aggressively frequencies are cut.',
      images: [
        '/simple-eq/image.png',
        '/simple-eq/ReaperBackgroundShot.PNG',
      ],
    },
    {
      title: 'Gain filter',
      description: 'Built a real-time gain filter that modifies the amplitude of the audio signal by multiplying each buffer sample by a gain coefficient derived from the slider value. The modified samples replace the buffer before playback, allowing for live gain adjustments with no latency.',
      images: [
        '/simple-eq/FilterGraphImage.PNG',
      ],
    },
  ],
},
]

