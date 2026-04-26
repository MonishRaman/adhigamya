import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, Trophy, ShieldCheck } from "lucide-react";
import { eventBySlug, events } from "@/data/events";
import { InstitutionLogos } from "@/components/SiteFooterLogos";

const REGISTER_URL = "https://forms.gle/PHmV7iH1A7CuWjq98";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = eventBySlug(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.event;
    if (!e) return { meta: [{ title: "Event — ADHIGAMYA 2026" }] };
    const title = `${e.name} — ${e.tag} | ADHIGAMYA 2026`;
    return {
      meta: [
        { title },
        { name: "description", content: e.longDesc.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: e.longDesc.slice(0, 155) },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: EventDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <div className="font-pixel text-5xl text-gradient mb-3">404</div>
        <p className="text-muted-foreground mb-6">That event doesn't exist.</p>
        <Link to="/" className="px-5 py-2 rounded-lg bg-hero text-primary-foreground">Back to Home</Link>
      </div>
    </div>
  ),
});

function EventDetailPage() {
  const { event: e } = Route.useLoaderData();
  const Icon = e.icon;
  const others = events.filter((x) => x.slug !== e.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* backdrop */}
      <div className="fixed inset-0 bg-aurora opacity-60 pointer-events-none" />
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-50" />

      <div className="relative">
        {/* top bar */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to ADHIGAMYA
          </Link>
        </div>

        {/* hero */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${e.color} border border-border flex items-center justify-center shadow-neon`}>
                <Icon className="w-8 h-8 text-foreground" />
              </div>
              <div>
                <span className="font-pixel text-xs px-3 py-1 rounded-full bg-foreground/5 border border-border text-muted-foreground">
                  {e.tag} · DAY {e.day}
                </span>
              </div>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[1.05]">
              <span className="text-gradient glow-text">{e.name}</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {e.longDesc}
            </p>

            {/* meta strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {[
                { icon: Calendar, label: "Date", value: e.date },
                { icon: Clock, label: "Duration", value: e.duration },
                { icon: Users, label: "Team", value: e.team },
                { icon: Trophy, label: "Prize", value: e.prize },
              ].map((m) => (
                <div key={m.label} className="glass rounded-xl p-4">
                  <m.icon className="w-4 h-4 text-neon mb-2" />
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.label}</div>
                  <div className="text-sm font-medium mt-1">{m.value}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-hero text-primary-foreground font-semibold shadow-neon animate-pulse-glow hover:scale-105 transition-transform"
              >
                Register for {e.name} <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/"
                hash="events"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass font-medium hover:bg-white/10 transition-colors"
              >
                See all events
              </Link>
            </div>
          </motion.div>
        </section>

        {/* rules */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck className="w-5 h-5 text-neon" />
              <h3 className="font-display text-xl">Rules</h3>
            </div>
            <ul className="space-y-3">
              {e.rules.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="font-pixel text-neon-2 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* other events */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <h3 className="font-display text-xl mb-6 text-muted-foreground">Other events</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((o) => {
              const OIcon = o.icon;
              return (
                <Link
                  key={o.slug}
                  to="/events/$slug"
                  params={{ slug: o.slug }}
                  className="group glass rounded-2xl p-5 hover:border-primary/50 transition-all hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${o.color} flex items-center justify-center mb-3`}>
                    <OIcon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="font-display text-base group-hover:text-gradient transition-all">{o.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{o.tag}</div>
                  <div className="mt-3 text-xs text-neon flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View details <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* footer logos */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <InstitutionLogos />
          <div className="mt-8 text-center text-xs text-muted-foreground opacity-70">
            © 2026 ADHIGAMYA — AI Tech Conclave · Department of CSE × CSI Student Branch · DSATM
          </div>
        </section>
      </div>
    </div>
  );
}
