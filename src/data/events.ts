import { Brain, Sparkles, Code2, Network, Cpu, type LucideIcon } from "lucide-react";

export type EventDetail = {
  slug: string;
  name: string;
  tag: string;
  desc: string;
  longDesc: string;
  icon: LucideIcon;
  color: string;
  day: 1 | 2;
  date: string;
  duration: string;
  team: string;
  prize: string;
  rules: string[];
  contact?: string;
};

export const events: EventDetail[] = [
  {
    slug: "sutra-vishleshan",
    name: "Sutra Vishleshan",
    tag: "Datathon",
    desc: "Decode patterns hidden in the data. Wrangle, model, and present insights against the clock.",
    longDesc:
      "Sutra Vishleshan (सूत्र विश्लेषण — 'analysis of the thread') is a high-stakes datathon where participants are handed a real-world dataset and a problem statement. You'll clean, analyse, model and visualise — then defend your findings to a jury of industry mentors. Bring your laptop, your favourite notebooks, and a sharp eye for the story inside the numbers.",
    icon: Brain,
    color: "from-fuchsia-500/40 to-purple-500/10",
    day: 1,
    date: "04 May 2026",
    duration: "6 hours (11:00 AM – 5:00 PM)",
    team: "Teams of 3",
    prize: "₹15,000",
    rules: [
      "Participants must bring their own laptops and devices required.",
      "Use of pre-trained public models is allowed; plagiarism of submissions is not.",
      "Internet access will be provided; LLM-assisted coding is permitted with disclosure.",
      "All teams must submit their solutions within the allotted 6-hour duration, and late submissions will not be accepted.",
      "Participants must use only their own systems and internet access, and any unfair external assistance will result in elimination.",
      "Participants must use only their own systems and internet access, and any unfair external assistance will result in elimination.",
      "All projects will be evaluated by the judging panel based on predefined criteria, and the judges decision will be final."
    ],

  },
  {
    slug: "yantra-drishti",
    name: "Yantra Drishti",
    tag: "Prompt to Pixel",
    desc: "Craft prompts that bend pixels. The sharpest visual storyteller wins.",
    longDesc:
      "Yantra Drishti (यंत्र दृष्टि — 'machine vision') is a prompt-engineering showdown. Teams use prompt engineering and creative thinking to transform text instructions into high-quality visual outputs. Blending innovation, technical skill, and artistic problem-solving, participants compete through exciting AI-based image generation challenges to create the most accurate and imaginative results.",
    icon: Sparkles,
    color: "from-cyan-500/40 to-blue-500/10",
    day: 1,
    date: "04 May 2026",
    duration: "6 hours (11:00 AM – 5:00 PM)",
    team: "Teams of 3",
    prize: "₹15,000",
    rules: [
      "Platform Integrity: Any misuse of competition platforms, tools, accounts, or interference with systems and other teams will result in immediate disqualification.).",
      "All prompts used must be submitted alongside the final image.",
      "No Plagiarism: All submissions must be original works created during the competition, and copied, pre-made, or reused content will lead to disqualification.",
      "Prompt Authenticity: All prompts must be independently written by the participants, and the use of AI or any automated tool to generate prompts is not allowed.",
      "No editing beyond basic cropping and colour correction is permitted after image generation.",
      "All decisions regarding disputes, scoring, rule interpretation, and disciplinary action rest solely with the event organizers.",
    ],

  },
  {
    slug: "udbhav",
    name: "Udbhav",
    tag: "20-Hour Hackathon",
    desc: "An overnight sprint to ship. Real problems, real prototypes, infinite caffeine.",
    longDesc:
      "Udbhav (उद्भव — 'origin / emergence') is the marquee 20-hour hackathon of ADHIGAMYA. You'll pick a track — AI for Good, FinTech, Smart Campus, or Open Innovation — and ship a working prototype before sunrise. Mentors, mid-night snacks, and the buzz of a packed lab included.",
    icon: Code2,
    color: "from-amber-500/40 to-rose-500/10",
    day: 1,
    date: "04-05 May 2026 ",
    duration: "4hrs + 20hrs (2:00 PM to 2:00 PM)",
    team: "Teams of 2-3",
    prize: "₹60,000 prize pool",
    rules: [
      "All code must be written during the hackathon window. Pre-built skeletons must be declared upfront.",
      "Open-source libraries are encouraged; closed APIs require a working free tier.",
      "Each team must demo a live working prototype — slides alone do not qualify.",
      "Code must be pushed to a public GitHub repo before the deadline.",
      "All solutions, source code, designs, and documentation submitted must be original work created by the team during the hackathon, and any copied or reused project will lead to immediate disqualification.",
    ],

  },
  {
    slug: "antharveda",
    name: "Antharveda",
    tag: "Cyber Heist Simulation",
    desc: "Step inside a live red-team scenario. Outthink the firewall, outpace the clock.",
    longDesc:
      "Antharveda (अन्तर्वेद — 'inner knowing') drops you inside a simulated corporate network on the brink of compromise. Solve a chain of cryptography, web-exploitation, OSINT and reverse-engineering challenges to unmask the attacker before time runs out. CTF veterans and curious beginners both welcome.",
    icon: Network,
    color: "from-emerald-500/40 to-cyan-500/10",
    day: 2,
    date: "05 May 2026",
    duration: "6 hours (10:00 AM - 3:00 AM)",
    team: "Teams of 3",
    prize: "₹15,000",
    rules: [
      "Attacking infrastructure outside the provided sandbox is strictly forbidden.",
      "Sharing flags between teams = instant disqualification.",
      "Write-ups for the final challenge must be submitted alongside flag.",
      "All standard CTF ethics apply.",
    ],

  },
  {
    slug: "chakraveg",
    name: "Chakraveg",
    tag: "Tech Relay Race",
    desc: "Speed × skill × strategy. A multi-leg gauntlet of code, debug, and deploy.",
    longDesc:
      "Chakraveg (चक्रवेग — 'wheel-speed') is a technical relay race. Each leg of the race tests a different muscle — Quiz, coding, debugging a broken codebase, container deployment, and a surprise final challenge.",
    icon: Cpu,
    color: "from-rose-500/40 to-violet-500/10",
    day: 2,
    date: "05 May 2026",
    duration: "2 hours (10:00 AM - 12:00 PM)",
    team: "Teams of 2",
    prize: "₹7,000",
    rules: [
      "Team must consist of exactly 2 members; no individual entries allowed.",
      "Relay format is compulsory – members alternate every round (2 rounds each)",
      "Round allocation cannot be changed once the event begins.",
      "Any form of malpractice or copying leads to immediate disqualification.",
      "All answers must be submitted within the given time limit; late submissions won’t be accepted.",
    ],

  },
];

export const eventBySlug = (slug: string) => events.find((e) => e.slug === slug);
