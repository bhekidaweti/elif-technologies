import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <section className="py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Websites. Directories. Visibility.
        </h1>
        <p className="text-xl mb-8">
          We build powerful websites and list your business where customers are already searching.
        </p>
        <CTA />
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-16">
        {[
          ["Web Development", "Fast, modern websites built to convert visitors into customers."],
          ["Business Directories", "Get listed on niche platforms that drive targeted traffic."],
          ["Visibility Setup", "SEO-ready websites designed to be discovered."],
        ].map(([title, desc]) => (
          <div key={title} className="border p-6 rounded">
            <h3 className="font-semibold text-xl mb-2">{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}