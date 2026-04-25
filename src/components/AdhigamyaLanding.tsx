import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Trophy, Sparkles, ChevronRight, Cpu, Zap, Code2, Brain, Network, Rocket, ArrowRight, Menu, X } from "lucide-react";

const REGISTER_URL = "https://forms.gle/PHmV7iH1A7CuWjq98";

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#prize", label: "Prize" },
    { href: "#sponsors", label: "Sponsors" },
    { href: "#team", label: "Team" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6`}>
        <div className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
          scrolled ? "glass shadow-card" : "bg-transparent"
        }`}>
          <a href="#top" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg bg-hero shadow-neon flex items-center justify-center font-pixel text-lg text-primary-foreground">
              A
            </div>
            <span className="font-display text-base sm:text-lg tracking-wider">ADHIGAMYA</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-neon to-neon-2 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-hero text-primary-foreground font-medium text-sm shadow-neon hover:scale-105 transition-transform"
            >
              Register <ArrowRight className="w-4 h-4" />
            </a>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground py-2">
                {l.label}
              </a>
            ))}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-hero text-primary-foreground font-medium text-sm"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Live countdown to 4 May 2026
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = new Date("2026-05-04T09:00:00").getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* aurora & grid backdrops */}
      <div className="absolute inset-0 bg-aurora pointer-events-none" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* floating orbs */}
      <motion.div style={{ y, opacity }} className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-float-slow pointer-events-none" />
      <motion.div style={{ y, opacity }} className="absolute top-40 -right-20 w-[28rem] h-[28rem] rounded-full bg-accent/30 blur-3xl animate-float-slow pointer-events-none" />
      <motion.div style={{ y, opacity }} className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-secondary/30 blur-3xl animate-float-slow pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-neon-2 animate-pulse" />
            Department of CSE × CSI Student Branch · DSATM
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-pixel text-6xl sm:text-8xl md:text-[10rem] leading-none text-gradient glow-text mb-4"
          >
            ADHIGAMYA
            <span className="animate-blink text-neon">_</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-display text-base sm:text-2xl md:text-3xl tracking-[0.3em] text-muted-foreground mb-8"
          >
            AI · TECH · CONCLAVE — 2026
          </motion.div>

          {/* meta strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base text-muted-foreground mb-10"
          >
            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4 text-neon" /> 4–5 May, 2026</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-neon-2" /> DSATM, Bengaluru</span>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="inline-flex items-center gap-2"><Trophy className="w-4 h-4 text-neon-3" /> ₹1,00,000+ Prize Pool</span>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-4 gap-2 sm:gap-4 mb-10"
          >
            {[
              { v: time.d, l: "Days" },
              { v: time.h, l: "Hours" },
              { v: time.m, l: "Mins" },
              { v: time.s, l: "Secs" },
            ].map((t) => (
              <div key={t.l} className="glass rounded-xl px-4 sm:px-6 py-3 sm:py-4 min-w-[68px] sm:min-w-[100px]">
                <div className="font-pixel text-3xl sm:text-5xl text-gradient">{String(t.v).padStart(2, "0")}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.l}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-hero text-primary-foreground font-semibold shadow-neon animate-pulse-glow hover:scale-105 transition-transform"
            >
              Register Now <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="#events"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-foreground font-medium hover:bg-white/10 transition-colors"
            >
              Explore Events <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const stats = [
    { v: "5", l: "Marquee Events", icon: Sparkles },
    { v: "20h", l: "Hackathon", icon: Code2 },
    { v: "₹1L+", l: "Prize Pool", icon: Trophy },
    { v: "2", l: "Days of Tech", icon: Zap },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-neon-2 mb-4">// About the Conclave</div>
          <h2 className="font-display text-4xl sm:text-6xl mb-6">
            A two-day plunge into the <span className="text-gradient">future of AI</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ADHIGAMYA brings together coders, designers, hackers, and dreamers across India for a celebration of intelligence — artificial and otherwise. Five flagship events, one electric hackathon, and a community wired to build what's next.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 group hover:border-primary/50 transition-colors"
            >
              <s.icon className="w-6 h-6 text-neon mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-pixel text-4xl text-gradient">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EVENTS ---------------- */
type EventItem = {
  name: string;
  tag: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const day1: EventItem[] = [
  { name: "Sutra Vishleshan", tag: "Datathon", desc: "Decode patterns hidden in the data. Wrangle, model, and present insights against the clock.", icon: Brain, color: "from-fuchsia-500/40 to-purple-500/10" },
  { name: "Yantra Drishti", tag: "Prompt to Pixel", desc: "Craft prompts that bend pixels. The sharpest visual storyteller wins.", icon: Sparkles, color: "from-cyan-500/40 to-blue-500/10" },
  { name: "Udbhav", tag: "20-Hour Hackathon", desc: "An overnight sprint to ship. Real problems, real prototypes, infinite caffeine.", icon: Code2, color: "from-amber-500/40 to-rose-500/10" },
];

const day2: EventItem[] = [
  { name: "Antharveda", tag: "Cyber Heist Simulation", desc: "Step inside a live red-team scenario. Outthink the firewall, outpace the clock.", icon: Network, color: "from-emerald-500/40 to-cyan-500/10" },
  { name: "Chakraveg", tag: "Tech Relay Race", desc: "Speed × skill × strategy. A multi-leg gauntlet of code, debug, and deploy.", icon: Cpu, color: "from-rose-500/40 to-violet-500/10" },
];

function EventCard({ e, index }: { e: EventItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative glass rounded-3xl p-6 sm:p-8 overflow-hidden cursor-pointer"
    >
      <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${e.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-hero shadow-neon flex items-center justify-center">
            <e.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-pixel text-xs px-3 py-1 rounded-full bg-foreground/5 border border-border text-muted-foreground">
            {e.tag}
          </span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl mb-3 group-hover:text-gradient transition-all">
          {e.name}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{e.desc}</p>

        <div className="mt-6 flex items-center gap-2 text-sm text-neon opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

function Events() {
  return (
    <section id="events" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-aurora opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-neon-2 mb-4">// The Lineup</div>
          <h2 className="font-display text-4xl sm:text-6xl">
            Five events. <span className="text-gradient">One arena.</span>
          </h2>
        </motion.div>

        {/* Day 1 */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="font-pixel text-5xl text-gradient">DAY 01</div>
            <div className="h-px flex-1 bg-gradient-to-r from-neon/50 to-transparent" />
            <div className="font-display text-sm tracking-widest text-muted-foreground">04 · MAY · 2026</div>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {day1.map((e, i) => <EventCard key={e.name} e={e} index={i} />)}
          </div>
        </div>

        {/* Day 2 */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="font-pixel text-5xl text-gradient">DAY 02</div>
            <div className="h-px flex-1 bg-gradient-to-r from-neon-2/50 to-transparent" />
            <div className="font-display text-sm tracking-widest text-muted-foreground">05 · MAY · 2026</div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {day2.map((e, i) => <EventCard key={e.name} e={e} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRIZE ---------------- */
function Prize() {
  return (
    <section id="prize" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass rounded-[2.5rem] p-10 sm:p-16 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-aurora opacity-60 pointer-events-none" />
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-neon-3/30 blur-3xl animate-float-slow" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-neon/30 blur-3xl animate-float-slow" />

          <div className="relative">
            <Trophy className="w-14 h-14 mx-auto text-neon-3 mb-6" />
            <div className="text-xs uppercase tracking-[0.3em] text-neon-2 mb-4">// Prize Pool</div>
            <div className="font-pixel text-7xl sm:text-9xl text-gradient glow-text mb-4">
              ₹1,00,000+
            </div>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Cash prizes, internships, certificates and goodies — distributed across all five flagship events.
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-hero text-primary-foreground font-semibold shadow-neon hover:scale-105 transition-transform"
            >
              Claim Your Spot <Rocket className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SPONSORS ---------------- */
function Sponsors() {
  const items = [
    { name: "Derbi Foundation", tag: "Fueling Dreams" },
    { name: "V6 Shelters", tag: "Building Tomorrow" },
  ];
  return (
    <section id="sponsors" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-neon-2 mb-3">// Powered By</div>
          <h2 className="font-display text-3xl sm:text-5xl">Our Sponsors</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {items.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center hover:shadow-neon transition-shadow"
            >
              <div className="font-display text-2xl mb-2">{s.name}</div>
              <div className="text-sm text-muted-foreground italic">{s.tag}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */
function Team() {
  const faculty = [
    { name: "Dr. M Ravishankar", role: "Principal — DSATM" },
    { name: "Dr. C. Nandini", role: "Vice Principal · Prof & Head, Dept of CSE" },
    { name: "Prof. Bhavya V", role: "CSI Student Branch Counselor · Asst. Prof, CSE" },
    { name: "Prof. Basker Rao K", role: "Senior Lifetime Member CSI · Assoc. Prof, CSE" },
  ];

  const presidents = [
    { name: "Mr. Chiranthan N Gowda", role: "CSI President · CSE 6th Sem" },
    { name: "Ms. Anagha H Prashanth", role: "CSI President · CSE 6th Sem" },
  ];

  return (
    <section id="team" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-neon-2 mb-3">// The People</div>
          <h2 className="font-display text-4xl sm:text-6xl">Organizing <span className="text-gradient">Team</span></h2>
        </motion.div>

        <div className="mb-14">
          <div className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">Faculty</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {faculty.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-hero flex items-center justify-center font-pixel text-xl text-primary-foreground mb-4">
                  {p.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
                <div className="font-medium text-foreground">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.role}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm uppercase tracking-widest text-muted-foreground mb-6 text-center">CSI Presidents</div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {presidents.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center font-pixel text-xl text-primary-foreground mb-4">
                  {p.name.split(" ").map(n => n[0]).slice(1, 3).join("")}
                </div>
                <div className="font-medium text-foreground">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA + FOOTER ---------------- */
function CtaFooter() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] p-10 sm:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-aurora opacity-50" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl mb-4">
              Ready to <span className="text-gradient">build the future?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Slots are limited. Lock in your participation today.
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-hero text-primary-foreground font-semibold shadow-neon animate-pulse-glow hover:scale-105 transition-transform"
            >
              Register on Google Forms <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <footer className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <div className="font-display tracking-widest text-foreground mb-2">DAYANANDA SAGAR ACADEMY OF TECHNOLOGY AND MANAGEMENT</div>
          <div className="text-xs">Autonomous under VTU · Affiliated to VTU, Belgaum · NAAC A+ · NBA Accredited</div>
          <div className="mt-6 text-xs opacity-60">© 2026 ADHIGAMYA — AI Tech Conclave · Department of CSE × CSI Student Branch DSATM</div>
        </footer>
      </div>
    </section>
  );
}

/* ---------------- PAGE ---------------- */
export default function AdhigamyaLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Prize />
      <Sponsors />
      <Team />
      <CtaFooter />
    </div>
  );
}
