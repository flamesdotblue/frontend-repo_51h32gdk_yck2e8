import { Shield, Bug, Target, Server } from "lucide-react";

const items = [
  {
    title: "Adversary Emulation",
    desc:
      "Campaigns mapped to MITRE ATT&CK that mimic specific APT groups, tailored to your stack and controls.",
    icon: Shield,
  },
  {
    title: "Red Team Operations",
    desc:
      "Covert, goal‑oriented engagements covering phishing, physical, and hybrid intrusion paths.",
    icon: Target,
  },
  {
    title: "Breach & Attack Simulation",
    desc:
      "Continuous, automated validation across kill‑chain stages with actionable, prioritized findings.",
    icon: Server,
  },
  {
    title: "Exploit Research",
    desc:
      "Custom PoCs and vulnerability chaining to demonstrate realistic business impact and risk.",
    icon: Bug,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Purpose‑built offensive security services
          </h2>
          <p className="mt-3 text-white/70">
            Validate detection, harden response, and measure resilience against real adversaries.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 hover:border-emerald-400/30 transition"
            >
              <div className="h-11 w-11 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
              <div className="mt-4 text-emerald-300 text-sm opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
