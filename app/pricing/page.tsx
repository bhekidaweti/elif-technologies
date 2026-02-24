export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">Pricing</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          ["Starter", "R3,500", "1–3 pages, contact form"],
          ["Professional", "R8,000", "5 pages, SEO basics"],
          ["Premium", "R15,000", "Custom build + integrations"],
        ].map(([name, price, desc]) => (
          <div key={name} className="border p-6 rounded">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-2xl my-4">{price}</p>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}