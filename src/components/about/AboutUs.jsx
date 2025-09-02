export default function AboutUs() {
  const timeline = [
    { year: "1994", text: "Arayacherril Varkey & Sons Pvt. Ltd. is founded in Pulincunnoo, Kuttanad." },
    { year: "2008", text: "Avees Resort is launched, bringing heritage hospitality to Kuttanad." },
    { year: "2009", text: "First Avees Puttu House opens at Onnamkara (AC Road)." },
    { year: "2015", text: "Second Avees Puttu House opens at Perumthuruthy (MC Road)." },
    { year: "2016", text: "Second generation joins—injecting innovation and expansion strategies." },
    { year: "2017", text: "Ready‑to‑Eat & Instant Mix products launched: Palappam Batter, Idiyappam, Idli‑Dosa Batter." },
    { year: "2018–2022", text: "Scaled production, automation, packaging and market reach across Kerala." },
    { year: "2022", text: "Third Avees Puttu House opens at NH Paravoor, Alappuzha." },
    { year: "2023", text: "Retail network widens with stronger brand recognition across Kerala." },
    { year: "2024", text: "Recognized under Mission 1000; renewed focus on innovation and authenticity." },
  ];

  const leaders = [
    { name: "A.V. George", role: "Founder", bio: "Rooted in Kerala’s culinary traditions; laid the foundation in 1994." },
    { name: "Suja George", role: "Director", bio: "Pillar of the family—nurturing the brand’s community and tradition." },
    { name: "George Varkey", role: "Managing Director", bio: "Leads with modern insight while preserving authenticity." },
    { name: "Jacob Varkey", role: "Director", bio: "Oversees operations and ensures excellence in quality control." },
  ];

  const values = [
    { title: "Authenticity", desc: "Recipes and products that stay true to Kuttanadan roots." },
    { title: "Innovation", desc: "Clean‑label, preservative‑free R&D for ready‑to‑cook convenience." },
    { title: "Sustainability", desc: "Hydroponics, circular farming, and eco‑friendly production." },
    { title: "Community", desc: "Local employment, youth engagement, and skill development." },
  ];

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Page container */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-12 md:py-16">
        {/* Intro */}
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-red-700">
            About Us
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-700">
            Founded in 1994 in Pulincunnoo, Kuttanad, Avees began as a humble rice flour mill and has grown into a
            multi‑vertical group across food products, restaurants, hospitality, and sustainable farming. From the fields of
            Kuttanad to kitchens across the world, we carry forward the taste, legacy, and values of our land.
          </p>
        </section>

        {/* Quote */}
        <section className="mt-12 md:mt-16">
          <div className="mx-auto max-w-4xl rounded-2xl border border-red-200 bg-red-50/60 px-6 py-8 text-center">
            <p className="text-2xl md:text-3xl font-bold text-red-700">
              “Below sea level. Above expectations.”
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-red-700">Our Journey (1994–2024)</h2>

          {/* timeline frame */}
          <div className="relative mt-10 md:mt-12">
            {/* vertical rail – sits between year column and content */}
            <div className="pointer-events-none absolute left-32 md:left-40 top-0 h-full border-l-2 border-red-600/70" />

            {/* rows */}
            <div className="space-y-8 md:space-y-10">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-[10rem_1fr] gap-4 md:gap-8 items-start"
                >
                  {/* year */}
                  <div className="relative md:text-right pr-0 md:pr-6">
                    <span className="inline-block text-lg md:text-xl font-semibold text-gray-900">
                      {item.year}
                    </span>
                    {/* dot */}
                    <span className="hidden md:block absolute top-2 -right-2 h-3 w-3 rounded-full bg-red-700 ring-4 ring-red-100" />
                  </div>

                  {/* card */}
                  <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 md:p-6">
                    <p className="text-gray-700">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-red-700">Vision, Mission & Values</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Vision */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
              <h3 className="text-xl font-bold text-red-700">Vision</h3>
              <p className="mt-2 text-gray-700">
                Honor Kuttanad’s heritage while innovating for modern kitchens.
              </p>
            </div>
            {/* Mission */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
              <h3 className="text-xl font-bold text-red-700">Mission</h3>
              <p className="mt-2 text-gray-700">
                Deliver authentic, preservative‑free food products, expand hospitality, and empower sustainable farming
                and local communities.
              </p>
            </div>
            {/* Values */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
              <h3 className="text-xl font-bold text-red-700">Values</h3>
              <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside">
                <li>Authenticity – staying true to Kuttanadan roots</li>
                <li>Innovation – modern food science and convenience</li>
                <li>Sustainability – eco‑friendly farming and production</li>
                <li>Community – local employment and skill development</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-red-700">Family Leadership</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {leaders.map((l, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                <div className="flex items-start gap-4">
                  {/* optional avatar placeholder */}
                  <div className="hidden sm:block h-12 w-12 rounded-full bg-red-100 ring-2 ring-red-200" />
                  <div>
                    <h3 className="text-lg font-bold text-red-700">{l.name}</h3>
                    <p className="text-sm font-medium text-gray-500">{l.role}</p>
                    <p className="mt-2 text-gray-700">{l.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="mt-16 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-red-700">What Sets Avees Apart</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                <div className="h-1 w-10 rounded-full bg-red-700" />
                <h3 className="mt-4 text-lg font-bold text-gray-900">{v.title}</h3>
                <p className="mt-1 text-gray-700">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}