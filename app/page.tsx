import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">
          Building Modern Full-Stack SaaS Applications
        </h1>

        <p className="mt-6 text-zinc-400 text-base max-w-2xl">
          Next.js developer focused on scalable dashboards,
          authentication systems, APIs, and modern responsive UI.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-white text-black px-5 py-3 rounded-xl font-medium">
            View Projects
          </button>

          <button className="border border-zinc-700 px-5 py-3 rounded-xl">
            Contact Me
          </button>
        </div>
      </section>
    </main>
  );
}