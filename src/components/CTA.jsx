export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 p-8 sm:p-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              Ready to run an APT simulation against your environment?
            </h3>
            <p className="mt-3 text-white/80">
              Get a tailored plan aligned with your threat model, tech stack, and business goals.
            </p>
          </div>

          <form
            className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Work email"
              className="w-full rounded-md bg-black/40 border border-white/20 focus:border-emerald-400/50 outline-none px-4 py-3 text-white placeholder-white/40"
            />
            <button
              type="submit"
              className="rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-6 py-3 transition"
            >
              Request a briefing
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
