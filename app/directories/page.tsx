import { Database, Globe, Search } from "lucide-react";

export default function Directories() {

  const directories = [
    {
      name: "Print Shops Near Me",
      description: "A niche directory connecting customers with local printing services.",
      url: "https://printshopnearme.co.za"
    },
    {
      name: "More Directories Coming Soon",
      description: "We are continuously expanding our network of niche business directories.",
      url: "#"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6">

      <h1 className="text-5xl font-bold mb-10 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Our Directory Network
      </h1>

      <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
        Elif Technologies develops and operates niche business directories
        designed to help companies gain visibility in targeted markets.
        Businesses listed on our platforms benefit from focused traffic
        and improved online discoverability.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {directories.map((dir) => (

          <div
            key={dir.name}
            className="
            p-8
            rounded-2xl
            border border-white/10
            backdrop-blur-xl
            bg-white/5
            hover:shadow-indigo-500/20
            transition
            "
          >

            <div className="flex items-center gap-3 mb-4">
              <Database className="text-indigo-400" />
              <h3 className="text-xl font-semibold">{dir.name}</h3>
            </div>

            <p className="text-gray-300 mb-6">
              {dir.description}
            </p>

            <a
              href={dir.url}
              target="_blank"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Visit Directory →
            </a>

          </div>

        ))}

      </div>

      {/* CTA */}

      <div className="mt-20 text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Want Your Business Featured?
        </h2>

        <p className="text-gray-400 mb-6">
          Get listed in our growing network of niche directories
          and increase your visibility online.
        </p>

        <a
          href="/book"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-xl"
        >
          Book Free Strategy Call
        </a>

      </div>

    </section>
  );
}