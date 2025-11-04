import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-8 sm:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold">Ready to streamline swaps?</h3>
                <p className="mt-2 text-indigo-100">Authenticate once and manage your time like a pro. Clear, fast, and secure.</p>
              </div>
              <div className="flex md:justify-end">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm hover:bg-indigo-50"
                >
                  Create your account
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
