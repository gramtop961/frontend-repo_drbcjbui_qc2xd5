import { Calendar, SwapHorizontal, CheckCircle2, Bell } from "lucide-react";

const features = [
  {
    title: "Personal dashboard",
    desc: "See your upcoming events, toggle swappability, and edit details in one place.",
    icon: Calendar,
  },
  {
    title: "Marketplace",
    desc: "Browse swappable slots from others and send a request in one click.",
    icon: SwapHorizontal,
  },
  {
    title: "Smart updates",
    desc: "Instant refresh after actions so your view always reflects the latest state.",
    icon: CheckCircle2,
  },
  {
    title: "Notifications",
    desc: "Stay in the loop on incoming and outgoing swap requests.",
    icon: Bell,
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Everything you need to swap smarter</h2>
        <p className="mt-2 text-gray-600">Simple tools that fit right into your day.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-lg bg-indigo-100 text-indigo-700">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
