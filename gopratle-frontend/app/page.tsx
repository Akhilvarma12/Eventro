import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Summer Gala",
    type: "Corporate",
    date: "Aug 14, 2025",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    type: "Conference",
    date: "Sep 5, 2025",
    location: "Bengaluru, India",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Wedding Reception",
    type: "Wedding",
    date: "Oct 18, 2025",
    location: "Delhi, India",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Music Festival",
    type: "Entertainment",
    date: "Nov 2, 2025",
    location: "Hyderabad, India",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Product Launch",
    type: "Corporate",
    date: "Dec 10, 2025",
    location: "Pune, India",
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "New Year Celebration",
    type: "Party",
    date: "Dec 31, 2025",
    location: "Goa, India",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
  },
];



const typePill: Record<string, string> = {
  Corporate: "bg-amber-500",
  Conference: "bg-rose-500",
  Wedding: "bg-violet-500",
  Entertainment: "bg-emerald-500",
  Party: "bg-sky-500",
};

const navLinks = [
  { label: "Events", href: "/" },
  { label: "About", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">

      {/* ── Nav ── */}
      <header className="w-full bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-0 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-gray-800 tracking-tight">Eventro</span>
          </Link>

          {/* Centre links – hidden on mobile */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-gray-500 hover:text-amber-600 transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Sign in – text button */}
            <Link
              href="#"
              className="hidden sm:block text-xs font-semibold text-gray-500 hover:text-amber-600 transition-colors duration-200"
            >
              Sign In
            </Link>

            {/* CTA pill */}
            <Link
              href="/post-requirement"
              className="flex items-center gap-1.5 text-xs font-semibold text-white bg-amber-500 hover:bg-amber-600 active:bg-amber-700 transition-colors duration-200 px-3.5 py-2 rounded-xl shadow-sm shadow-amber-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5H4.5" />
              </svg>
              Post Requirement
            </Link>

            {/* Mobile hamburger */}
            <button className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg text-gray-500 hover:bg-amber-100 transition-colors duration-200">
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-6 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block animate-pulse" />
          {events.length} upcoming events
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight leading-tight">
          Discover & Staff<br />
          <span className="text-amber-500">Your Next Event</span>
        </h1>
        <p className="text-sm text-gray-400 mt-3 max-w-md mx-auto">
          Browse upcoming events and post hiring requirements for planners, performers, and crew — all in one place.
        </p>
      </section>

      {/* ── Event grid ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* ── Image banner ── */}
              <div className="relative h-44 overflow-hidden bg-gray-200">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Type pill */}
                <span className={`absolute bottom-3 left-3 inline-flex text-xs font-semibold text-white px-2.5 py-0.5 rounded-full ${typePill[event.type] || "bg-gray-500"}`}>
                  {event.type}
                </span>
              </div>

              {/* ── Body ── */}
              <div className="flex flex-col flex-1 p-4 gap-2">
                <h3 className="text-sm font-bold text-gray-800">{event.title}</h3>

                <div className="flex flex-col gap-1.5 flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5 text-gray-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5 text-gray-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 4.5-7.5 11-7.5 11s-7.5-6.5-7.5-11a7.5 7.5 0 0115 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/post-requirement"
                  className="mt-auto block text-center text-xs font-semibold text-amber-600 border border-amber-200 bg-amber-50 hover:bg-amber-100 hover:border-amber-300 rounded-lg py-2 transition-all duration-200"
                >
                  Post a Requirement →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}