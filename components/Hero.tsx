import { HERO_CONTENT } from "@/data/content";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 py-20 sm:py-28">

        <div className="max-w-3xl">

          <p className="text-cyan-400 font-medium mb-4">
            {HERO_CONTENT.badge}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">

            {HERO_CONTENT.headingLine1}
            <span className="block text-zinc-400">
              {HERO_CONTENT.headingLine2}
            </span>

          </h1>

          <p className="mt-6 text-zinc-400 text-base sm:text-lg leading-8 max-w-2xl">

           {HERO_CONTENT.description}

          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <button className="bg-white text-black px-6 py-4 rounded-2xl font-medium hover:scale-105 transition">

              {HERO_CONTENT.primaryButton}

            </button>

            <button className="border border-zinc-700 px-6 py-4 rounded-2xl hover:border-zinc-500 transition">

              {HERO_CONTENT.secondaryButton}

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}