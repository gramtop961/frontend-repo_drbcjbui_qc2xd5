import { Rocket, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
              <Sparkles className="h-4 w-4" /> New
              <span>Swap your schedule effortlessly</span>
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Trade time slots with confidence
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              SlotSwapper helps teams and communities exchange time-based slots securely. Mark your availability, request swaps, and keep everything organized.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black"
              >
                Get started
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Learn more
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Protected by JWT auth
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-indigo-600" />
                Built with React 18
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 -z-0 opacity-40 blur-3xl bg-gradient-to-tr from-indigo-300 via-fuchsia-300 to-emerald-300 rounded-full" />
            <div className="relative rounded-xl border bg-white/60 backdrop-blur shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553484771-047a44eee27f?q=80&w=1600&auto=format&fit=crop"
                alt="Calendar preview"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
