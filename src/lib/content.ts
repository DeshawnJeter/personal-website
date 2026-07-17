// Single source of truth for the site's real, authentic content.
// Nothing in here is invented — it's carried over verbatim in meaning
// from the previous version of this site and DeShawn's own words.

export const site = {
  name: "DeShawn Jeter",
  role: "Creative technologist & software engineer",
  tagline: "Where imagination becomes architecture.",
  description:
    "Creative technologist, systems thinker, builder. I don't just build software — I build experiences people remember.",
  email: "jeterdeshawn@gmail.com",
  url: "https://deshawnjeter.dev",
};

// Full section list — used by the side rail (in-page progress) and the mobile menu.
export const nav = [
  { href: "/#story", label: "Story" },
  { href: "/#mind", label: "Thinking" },
  { href: "/#why-swe", label: "Why Engineering" },
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#skills", label: "Skills" },
  { href: "/#work", label: "Current Project" },
  { href: "/#inspirations", label: "Inspirations" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

// A shorter set for the persistent desktop header, so it stays quiet
// rather than cramming all nine section anchors into one row.
export const primaryNav = [
  { href: "/#story", label: "Story" },
  { href: "/#work", label: "Current Project" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

export type StoryChapter = {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  beat: string;
};

export const storyChapters: StoryChapter[] = [
  {
    id: "worlds",
    eyebrow: "I",
    title: "The stories that rewired my brain",
    body: [
      "Before I ever cared about code, I cared about worlds. Not the kind on a map — the kind somebody imagined so vividly that they became real inside another person's head.",
      "Those stories didn't treat kids like they were fragile. They trusted us with impossible questions. Justice. Identity. Sacrifice. Hope. What happens when good people make terrible decisions — and when broken people choose to stand back up anyway?",
      "Comedy completed the picture. The greatest comedians never just told jokes; they smuggled truth across the border disguised as laughter. If you can laugh at reality, you can understand it.",
      "Imagination isn't escaping reality. It's rehearsing for it. That's why I look beneath the surface of everything — searching for structure, meaning, and better ways to build experiences people never forget.",
    ],
    beat: "Creativity isn't decoration. It's architecture.",
  },
  {
    id: "question",
    eyebrow: "II",
    title: "The question that refused to leave",
    body: [
      "Most kids ask what they want to be when they grow up. My brain skipped ahead and asked why any of it matters. Not exactly playground conversation.",
      "For a while that question was heavy. If nothing arrives with inherent meaning, what's the point? Terrifying — right up until it becomes the most liberating question you'll ever ask.",
      "Nobody was coming to hand me a script. Good. I never liked spoilers anyway.",
      "Nietzsche understood it long before computers existed: chaos isn't the enemy, it's raw material. Every obstacle stopped looking like a wall and started looking like a gym. Heavy. Uncomfortable. Exactly what builds strength.",
    ],
    beat: "Meaning isn't found. It's built — brick by brick, choice by choice, project by project.",
  },
  {
    id: "family",
    eyebrow: "III",
    title: "The family I chose",
    body: [
      "People love talking about self-made success. That's adorable. Nobody builds anything worthwhile alone.",
      "My family isn't only the one I was born into. It's the people who chose me — and the people I chose back. The friends who challenged me. The ones who called me out when I was wrong. The ones who celebrated victories that weren't even theirs.",
      "They didn't just hand out encouragement. They gave me perspective. Trust. Belonging. The freedom to fail without becoming a failure.",
      "Growth happens fastest inside communities built on honesty. That's one of the greatest gifts another human can give.",
    ],
    beat: "Collaboration beats ego. Every single time.",
  },
  {
    id: "keyboard",
    eyebrow: "IV",
    title: "The keyboard that changed everything",
    body: [
      "At first it looked like someone had spilled alphabet soup across a black screen. Then something clicked. People write words — and those words become software? That's basically magic wearing glasses.",
      "Coding became the bridge connecting every part of my life. Animation taught creativity. Comedy taught observation. Philosophy taught purpose. Technology gave all three hands.",
      "Now ideas could leave my imagination and become something other people could actually use. That's addictive in the healthiest possible way.",
      "You don't just consume worlds anymore. You build them.",
    ],
    beat: "Programming turned imagination into execution.",
  },
  {
    id: "real-world",
    eyebrow: "V",
    title: "Building in the real world",
    body: [
      "Long before software became the destination, I spent years solving real problems. Leading installation teams. Terminating cable as a structured cabling technician. Cooking under pressure. Serving on vessels where safety couldn't be optional. Working alongside communities on civic engagement projects.",
      "Different jobs. Same lesson. Details matter. Communication matters. Preparation matters. People matter most.",
      "Whether I'm terminating network cables, coordinating with teammates, preparing meals, maintaining vessels, or writing software, the mission stays surprisingly similar: take something complicated, make it dependable, and leave it better than you found it.",
      "Every role strengthened discipline, adaptability, and leadership in fast-paced environments where the plan meets reality.",
    ],
    beat: "I don't fall in love with titles. I fall in love with building things that help people.",
  },
];

export const beliefs = [
  {
    numeral: "I.",
    title: "Creative by nature",
    lede: "Animation and comedy taught me to see the invisible architecture behind great ideas.",
    more: "A perfectly timed joke and a beautifully designed application run on the same engine: structure you feel but never see. I build software as intentional as the stories that raised me.",
  },
  {
    numeral: "II.",
    title: "Questions become momentum",
    lede: "Uncertainty isn't an excuse. It's fuel.",
    more: "If life doesn't come with a blueprint, then every day is a chance to draw one. That's exactly how I approach learning, engineering, and problems that don't have a map yet.",
  },
  {
    numeral: "III.",
    title: "People built me, now I build with people",
    lede: "I can't win alone. I don't want to.",
    more: "The friends who became my chosen family introduced me to technology and challenged my thinking. Great software is built by people who care about each other almost as much as they care about the code.",
  },
];

export const constellation = {
  eyebrow: "How I see the world",
  title: "Three stars. One shape.",
  lede: "Imagination, systems thinking, and adaptability — the constellation everything else navigates by.",
  stars: [
    {
      name: "Imagination",
      detail:
        "The habit of asking what a thing could be before asking what it currently is. It's where every project, and every rewrite of this site, actually starts.",
    },
    {
      name: "Systems thinking",
      detail:
        "Seeing the invisible structure underneath a story, a kitchen line, a network closet, or a codebase — and knowing that the structure is what makes it dependable.",
    },
    {
      name: "Adaptability",
      detail:
        "Kitchens, vessels, job sites, and codebases all taught the same lesson from different angles: the plan meets reality, and the job is to stay useful when it does.",
    },
  ],
};

export const whySoftwareEngineering = {
  eyebrow: "Why software engineering",
  title: "The bridge that connected everything else",
  body: [
    "For years, the things I cared about — imagination, structure, people, meaning — lived in separate rooms. Animation and comedy lived in one. Philosophy lived in another. Cabling, kitchens, and vessels lived somewhere else entirely, teaching discipline without ever calling it that.",
    "Software engineering turned out to be the hallway connecting all of them. It's the rare discipline where a story idea, a systems diagram, and a hard deadline all have to cooperate in the same afternoon. Where being precise and being creative aren't in tension — they're the same job.",
    "I didn't come to engineering because I always dreamed in syntax. I came to it because it was the first craft that asked me to use every part of how I already think, and then handed me the tools to actually ship the result.",
    "That's still what keeps me here. Not the novelty of new frameworks, but the fact that a good abstraction feels like a well-told joke, and a well-run deploy feels like a kitchen that got through service without anyone getting burned.",
  ],
};

export const philosophy = {
  eyebrow: "Engineering philosophy",
  title: "What I build everything on",
  tenets: [
    { roman: "i", text: "Creativity is architecture." },
    { roman: "ii", text: "Chaos is raw material." },
    { roman: "iii", text: "Software should make people feel something." },
    { roman: "iv", text: "Engineering and imagination are teammates, not rivals." },
    { roman: "v", text: "Every obstacle becomes material." },
    { roman: "vi", text: "Meaning isn't found. It's built." },
  ],
};

export const skillGalaxy = {
  eyebrow: "Technical skills",
  title: "No progress bars. A system with gravity.",
  lede: "Nine disciplines orbiting one idea: logic and creativity are teammates.",
  planets: [
    { name: "JavaScript", detail: "The language that's been under almost everything I've shipped." },
    { name: "TypeScript", detail: "Structure and intention, written down so future-me doesn't have to guess." },
    { name: "React", detail: "Components as the grammar for building interfaces that hold up under change." },
    { name: "Next.js", detail: "Routing, rendering, and performance handled so the work can stay on the product." },
    { name: "Node.js", detail: "The other half of the conversation — where the interface meets the system." },
    { name: "HTML & CSS", detail: "The physical layer of the web. Invisible when done right, everything when it's not." },
    { name: "Git & GitHub", detail: "A discipline, not a tool — the same care I learned certifying cable runs." },
    { name: "Systems design", detail: "Thinking in flows, states, and edge cases before a single line gets written." },
    { name: "Product & UX thinking", detail: "Storytelling applied to interfaces — the reason things feel obvious in hindsight." },
  ],
};

export const currentProject = {
  eyebrow: "Current project — learning journey",
  name: "FrameFeast",
  tagline: "An AI-powered, anime-inspired cooking app, still very much in progress.",
  summary:
    "Most budget recipe apps assume you already have a full pantry and money to spare. FrameFeast doesn't. It's built to scan what's actually in your kitchen, match it against a growing library of original recipes under $5 a serving, and give SNAP/EBT users full access for free. Cooking turns into something you level up at instead of something you dread.",
  problem:
    "Budget and accessibility are treated as an afterthought by most recipe products. I wanted to design for the pantry people actually have, not the one a recipe app assumes they have — and to make that experience feel encouraging instead of clinical.",
  exploring: [
    "Ingredient-matching logic against a growing recipe library",
    "Designing an interface with real character and warmth instead of generic food-app UI",
    "Structuring free, full-featured access for SNAP/EBT users from the ground up, not as a bolted-on discount tier",
  ],
  decisions: [
    "Anime-inspired art direction so the app feels like something you want to open, not a spreadsheet with photos",
    "Recipes capped under $5 a serving as a hard constraint, not a filter — it shapes every recipe from the start",
    "Static HTML/CSS/JS prototype first, to validate the interaction design before committing to a framework",
  ],
  challenges: [
    "Balancing a playful, illustrated aesthetic against the practical need for fast, scannable recipe information",
    "Matching partial pantries to recipes in a way that feels smart rather than rigid",
  ],
  lessons: [
    "Constraints (a $5 ceiling, a real pantry) make design decisions easier, not harder",
    "Prototyping in plain HTML/CSS/JS first is a fast way to pressure-test an idea before adding framework overhead",
  ],
  next: [
    "Expanding the recipe library and refining the ingredient-matching logic",
    "Rebuilding the front end in a proper component framework as the interaction design solidifies",
    "User testing with people who actually shop on a tight budget",
  ],
  stack: ["HTML", "CSS", "JavaScript", "Responsive design"],
  links: {
    preview: "/framefeast",
    github: "#",
  },
};

export const inspirations = {
  eyebrow: "Creative inspirations",
  title: "What shaped the eye behind the engineering",
  intro:
    "None of this is a moodboard for its own sake. It's the actual raw material — animated worlds that trusted young viewers with big questions, comedians who smuggled truth in as jokes, philosophy that turned uncertainty into fuel, and the people who chose to stand beside me through all of it.",
  pillars: [
    {
      title: "Animation with something to say",
      detail:
        "Stories that never talked down to their audience — that used imagined worlds to ask real questions about justice, identity, and what it costs to do the right thing.",
    },
    {
      title: "Comedy as observation",
      detail:
        "The best comedians aren't performing randomness, they're performing precision. Timing is structure. That's a lesson that transfers directly to interface and interaction design.",
    },
    {
      title: "Philosophy as fuel",
      detail:
        "Reading thinkers who treated meaninglessness not as a dead end but as an invitation — chaos as raw material, not a threat.",
    },
    {
      title: "Chosen family",
      detail:
        "The friends who introduced me to technology, challenged my thinking, and made room for me to fail without becoming a failure. Every project on this site is downstream of that.",
    },
  ],
};

export type TimelineNode = {
  period: string;
  title: string;
  detail: string;
};

export const timeline: TimelineNode[] = [
  {
    period: "Now",
    title: "Software engineer",
    detail:
      "Turning imagination into things people can actually use. Frontend, backend, and the architecture that holds them together.",
  },
  {
    period: "Credential",
    title: "Pursuit Fellowship — Software Engineering",
    detail:
      "An intensive, full-time fellowship that turned years of hands-on problem solving into structured software engineering fundamentals — from computer science foundations to shipping full-stack projects.",
  },
  {
    period: "Technical leadership",
    title: "Leading installation teams",
    detail:
      "Coordinating people, sequencing work, and owning the outcome when the plan meets the building. Leadership is logistics plus trust.",
  },
  {
    period: "Infrastructure",
    title: "Structured cabling technician",
    detail:
      "Terminating and certifying the physical layer everything else depends on. Invisible work carries the most weight.",
  },
  {
    period: "The line",
    title: "Cooking under pressure",
    detail:
      "Timing, mise en place, communication at volume. A kitchen is a real-time system with humans as the runtime.",
  },
  {
    period: "At sea",
    title: "Marine operations",
    detail:
      "Vessels where safety couldn't be optional. Preparation isn't paperwork — it's the difference between a normal day and a bad one.",
  },
  {
    period: "Community",
    title: "Civic engagement projects",
    detail:
      "Working alongside communities, not above them. The requirements are always in the room with you if you listen.",
  },
];

export const resume = {
  eyebrow: "Resume",
  summary:
    "Creative technologist focused on building systems, interfaces, and experiences that feel precise, memorable, and human.",
  strengths: [
    "Frontend architecture and polished digital product experiences",
    "Systems thinking, storytelling, and product strategy",
    "Leadership, collaboration, and calm problem solving",
  ],
  experienceSummary:
    "Software engineering, technical leadership, structured cabling, culinary operations, marine work, and community engagement.",
  credentials: ["Pursuit Fellowship — Software Engineering"],
};

export const contact = {
  eyebrow: "Contact",
  title: "Come in. The door is unlocked.",
  lede: "Tell me what you're building. Send a message here, or reach out directly by email.",
};
