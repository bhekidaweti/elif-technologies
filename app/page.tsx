"use client";

import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { Globe, Database, Search } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="py-24 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          Websites. Directories. Visibility.
        </h1>
        <p className="text-xl mb-8">
          We build powerful websites and list your business where customers are already searching.
          We Manage Your Entire Digital Presence

            From website development to ongoing support and system integrations — Elif Technologies acts as your dedicated technical partner.

            No in-house team required.
        </p>
          <h1 className="font-bold text-3xl">We work with</h1>
          <ul>
            <li>Small to medium businesses</li>

            <li>Growing startups</li>

            <li>Businesses without technical teams</li>

            <li>Companies needing reliable digital management</li>
          </ul><br></br>
        <CTA />
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-20 px-6">
          {[
            {
              title: "Web Development",
              desc: "Fast, modern websites built to convert visitors into customers.",
              icon: <Globe className="w-6 h-6 text-indigo-400" />,
            },
            {
              title: "Business Directories",
              desc: "Get listed on niche platforms that drive targeted traffic.",
              icon: <Database className="w-6 h-6 text-purple-400" />,
            },
            {
              title: "Visibility Setup",
              desc: "SEO-ready websites designed to be discovered.",
              icon: <Search className="w-6 h-6 text-cyan-400" />,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl text-white">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </section>
    </>
  );
}