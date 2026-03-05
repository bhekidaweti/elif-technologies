"use client";

import { Globe, Database, Search, Code, ShieldCheck, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      items: [
        "Custom responsive websites",
        "Next.js & modern frameworks",
        "Performance optimization",
        "SEO-ready structure",
        "Conversion-focused layouts",
        "Scalable architecture",
      ],
    },
    {
      title: "Directory Platforms",
      icon: <Database className="w-6 h-6 text-purple-400" />,
      items: [
        "Business directory development",
        "Featured listings systems",
        "Subscription-based access",
        "Admin dashboards",
        "Search & filter functionality",
        "Monetized exposure platforms",
      ],
    },
    {
      title: "Visibility & SEO Setup",
      icon: <Search className="w-6 h-6 text-cyan-400" />,
      items: [
        "Technical SEO setup",
        "Meta & schema implementation",
        "Search Console configuration",
        "Performance audits",
        "On-page optimization",
        "Indexing & crawl optimization",
      ],
    },
    {
      title: "Custom Integrations",
      icon: <Code className="w-6 h-6 text-indigo-400" />,
      items: [
        "Payment gateway integrations",
        "API connections",
        "Booking systems",
        "CRM integrations",
        "Automation workflows",
        "Custom dashboards",
      ],
    },
    {
      title: "Hosting & Infrastructure",
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      items: [
        "Hosting management",
        "SSL & security monitoring",
        "Backup systems",
        "Domain management",
        "Performance monitoring",
        "Ongoing maintenance",
      ],
    },
    {
      title: "Digital Strategy",
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      items: [
        "Technical growth planning",
        "Scalable system design",
        "Platform optimization",
        "Long-term digital support",
        "Infrastructure planning",
        "Conversion strategy guidance",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-indigo-500/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              {service.icon}
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
            </div>

            <ul className="space-y-3 text-gray-300 text-sm">
              {service.items.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}