export default function Book() {
  return (
    <section className="max-w-4xl mx-auto py-24 px-6 text-center">

      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Book a Strategy Call
      </h1>

      <p className="text-gray-300 mb-12">
        Schedule a consultation to discuss your website, directory platform,
        or digital infrastructure needs.
      </p>

      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">

        <iframe
          src="https://cal.com/daweti-strategy-call"
          width="100%"
          height="700"
          frameBorder="0"
        />

      </div>

    </section>
  );
}