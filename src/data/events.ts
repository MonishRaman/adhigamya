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
  rounds: { title: string; detail: string }[];
  judging: string[];
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
    duration: "5 hours",
    team: "Teams of 2–3",
    prize: "₹15,000 + Internship Opportunities",
    rules: [
      "Participants must bring their own laptops with required software pre-installed.",
      "Use of pre-trained public models is allowed; plagiarism of submissions is not.",
      "Internet access will be provided; LLM-assisted coding is permitted with disclosure.",
      "Final submissions: cleaned notebook + 5-minute presentation deck.",
      "Decision of judges is final and binding.",
    ],
    rounds: [
      { title: "Round 1 · Data Wrangling", detail: "Clean & explore the released dataset. Submit an EDA notebook within 90 minutes." },
      { title: "Round 2 · Modelling Sprint", detail: "Build the most accurate / insightful model against the held-out test set." },
      { title: "Final · Insight Pitch", detail: "Present findings to the jury — clarity of insight outweighs raw accuracy." },
    ],
    judging: ["Technical depth (40%)", "Insight quality (30%)", "Presentation (20%)", "Code hygiene (10%)"],
  },
  {
    slug: "yantra-drishti",
    name: "Yantra Drishti",
    tag: "Prompt to Pixel",
    desc: "Craft prompts that bend pixels. The sharpest visual storyteller wins.",
    longDesc:
      "Yantra Drishti (यंत्र दृष्टि — 'machine vision') is a prompt-engineering showdown. Themes are revealed live; you have a fixed window to coax stunning imagery out of generative AI tools. Judges score on aesthetic mastery, prompt craft, and how powerfully your visual answers the brief.",
    icon: Sparkles,
    color: "from-cyan-500/40 to-blue-500/10",
    day: 1,
    date: "04 May 2026",
    duration: "3 hours",
    team: "Solo or Duo",
    prize: "₹10,000 + Goodies",
    rules: [
      "Any publicly available text-to-image tool is permitted (Midjourney, SDXL, DALL·E, etc.).",
      "All prompts used must be submitted alongside the final image.",
      "No post-processing beyond basic crop & colour grade.",
      "NSFW / offensive imagery results in immediate disqualification.",
    ],
    rounds: [
      { title: "Round 1 · Theme Drop", detail: "Theme announced on stage. 90 minutes to generate three variations." },
      { title: "Round 2 · The Twist", detail: "A constraint is added (style, palette, era). Refine within 60 minutes." },
      { title: "Final · Story Wall", detail: "Top finalists narrate the prompt journey behind their hero image." },
    ],
    judging: ["Aesthetics (35%)", "Prompt craft (35%)", "Brief alignment (20%)", "Storytelling (10%)"],
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
    date: "04 May 2026 · 12:00 PM → 05 May 08:00 AM",
    duration: "20 hours",
    team: "Teams of 3–4",
    prize: "₹50,000 prize pool",
    rules: [
      "All code must be written during the hackathon window. Pre-built skeletons must be declared upfront.",
      "Open-source libraries are encouraged; closed APIs require a working free tier.",
      "Each team must demo a live working prototype — slides alone do not qualify.",
      "Code must be pushed to a public GitHub repo before the deadline.",
      "One representative per team for the final pitch.",
    ],
    rounds: [
      { title: "Kickoff", detail: "Tracks revealed, teams check in, ideation kicks off." },
      { title: "Build Phase", detail: "20 hours of building. Mentors rotate through every 2 hours." },
      { title: "Demo Day", detail: "5-minute demo + 3-minute Q&A in front of the jury." },
    ],
    judging: ["Innovation (25%)", "Technical execution (25%)", "Impact (20%)", "Design & UX (15%)", "Pitch (15%)"],
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
    duration: "4 hours",
    team: "Teams of 2",
    prize: "₹15,000 + CTF Goodies",
    rules: [
      "Attacking infrastructure outside the provided sandbox is strictly forbidden.",
      "Sharing flags between teams = instant disqualification.",
      "Write-ups for the final challenge must be submitted alongside flag.",
      "All standard CTF ethics apply.",
    ],
    rounds: [
      { title: "Recon", detail: "OSINT + network discovery puzzles. Score per flag captured." },
      { title: "Exploit", detail: "Web, crypto and binary challenges of escalating difficulty." },
      { title: "Final · The Heist", detail: "A linked multi-stage challenge. First three to capture the boss-flag win." },
    ],
    judging: ["Flags captured", "Speed of capture", "Quality of write-up (tiebreaker)"],
  },
  {
    slug: "chakraveg",
    name: "Chakraveg",
    tag: "Tech Relay Race",
    desc: "Speed × skill × strategy. A multi-leg gauntlet of code, debug, and deploy.",
    longDesc:
      "Chakraveg (चक्रवेग — 'wheel-speed') is a technical relay race. Each leg of the race tests a different muscle — competitive coding, debugging a broken codebase, container deployment, and a surprise final challenge. Strategise who runs which leg and cross the finish line first.",
    icon: Cpu,
    color: "from-rose-500/40 to-violet-500/10",
    day: 2,
    date: "05 May 2026",
    duration: "3 hours",
    team: "Teams of 4",
    prize: "₹10,000 + Trophies",
    rules: [
      "Only the active runner may interact with the workstation; substitutions are timed.",
      "External help / phones are not permitted during a leg.",
      "Each leg has its own time cap; unfinished legs forfeit points.",
      "The relay baton is digital — passed via the race dashboard.",
    ],
    rounds: [
      { title: "Leg 1 · Code Sprint", detail: "Solve 3 algorithmic problems within the time cap." },
      { title: "Leg 2 · Bug Hunt", detail: "Fix a broken repo. All tests must pass." },
      { title: "Leg 3 · Ship It", detail: "Containerise & deploy a tiny service to a provided cluster." },
      { title: "Leg 4 · Mystery Box", detail: "Revealed live. Adapt fast." },
    ],
    judging: ["Total time across legs", "Penalties for failed checks", "Bonus for elegant solutions"],
  },
];

export const eventBySlug = (slug: string) => events.find((e) => e.slug === slug);
