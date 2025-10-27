import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32" aria-label="Hero">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-emerald-200 text-xs mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live adversary emulation platform
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            APT Simulation for Offensive Cybersecurity
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            We replicate nation‑state tradecraft to stress‑test your defenses. From initial
            access to lateral movement and exfiltration, validate resilience against real
            adversaries—before they arrive.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-5 py-3 transition"
            >
              Request a briefing
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md border border-white/20 hover:border-white/40 text-white font-medium px-5 py-3 transition"
            >
              Explore services
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Initial Access",
              "Lateral Movement",
              "Privilege Escalation",
              "Data Exfiltration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
