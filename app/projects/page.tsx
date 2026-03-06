"use client";
import { motion } from "framer-motion";
import { Globe, Database, Code, Layers, Rocket } from "lucide-react";

const projects = [
  {
    name: "PrintShopNearMe",
    description:
      "A growing directory connecting users with local printing services. Built with SEO-first architecture and scalable directory structure.",
    tags: ["Directory", "SEO", "Local Search"],
    icon: Globe,
    link: "https://printshopnearme.co.za",
  },
  {
    name: "Meme API",
    description:
      "A meme aggregation API that scrapes and filters popular meme subreddits and exposes them through a REST API for apps and websites.",
    tags: ["Node.js", "API", "Web Scraping"],
    icon: Database,
  },
  {
    name: "Flag Quiz App",
    description:
      "Interactive geography learning platform with quiz mechanics and dynamic scoring. Implemented in both React and Django versions.",
    tags: ["React", "Django", "Education"],
    icon: Code,
  },
  {
    name: "Guest House Booking Prototype",
    description:
      "Prototype booking platform demonstrating modern UI design and booking workflows for accommodation businesses.",
    tags: ["React", "Bootstrap", "Booking Systems"],
    icon: Layers,
  },
];

export default function DirectoryNetwork() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Our Directory Network & Platforms
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            These are the platforms and digital products currently running in
            our ecosystem. As our client network grows, additional businesses
            and partner platforms will be showcased here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700 hover:border-indigo-400"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-indigo-400" />
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                </div>

                <p className="text-slate-300 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300"
                  >
                    Visit Platform <Rocket size={16} />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">
            Partner Platforms Coming Soon 🚀
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            We are actively partnering with businesses and founders who want
            modern websites, directories, and automated booking systems.
          </p>

          <a
            href="/book-call"
            className="bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-3 rounded-xl font-semibold hover:opacity-90"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </div>
  );
}
