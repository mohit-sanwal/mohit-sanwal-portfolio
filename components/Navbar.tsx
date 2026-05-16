import { NAVBAR_LINKS, SITE_CONFIG } from "@/data/content";
export default function Navbar() {
  return (
    <header className="border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <div className="text-xl font-bold">
          {SITE_CONFIG.logo}
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            {NAVBAR_LINKS.map((navLink) => 
            <li>
                <a href={navLink.href} className="hover:text-white transition">
                    {navLink.label}
                </a>
            </li>
           )}
        </ul>

        <button className="md:hidden">
          ☰
        </button>

      </nav>
    </header>
  );
}