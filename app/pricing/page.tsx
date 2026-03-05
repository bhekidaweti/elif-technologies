
"use client";

import { motion } from "framer-motion";
import { Globe, Server, ShieldCheck, Zap, Wrench, Crown } from "lucide-react";


export default function Pricing() {
  const plans = [
    {
      name: "Business Website",
      price: "Starting from R6,500",
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      features: [
        "Responsive design",
        "SEO-ready structure",
        "Conversion-optimized layout",
        "Performance optimized",
      ],
    },
    {
      name: "Advanced Platform",
      price: "Starting from R15,000",
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      popular: true,
      features: [
        "Payments & integrations",
        "API connectivity",
        "Custom dashboards",
        "Advanced performance tuning",
      ],
    },
    {
      name: "Digital Partner",
      price: "Custom Retainer",
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      features: [
        "Ongoing development",
        "Hosting & monitoring",
        "System management",
        "Priority support",
      ],
    },
  ];

  const carePlans = [
    {
      name: "Essential Tech Care",
      price: "R650 / month",
      features: [
        "Hosting management",
        "Domain management",
        "SSL monitoring",
        "Security updates",
        "Monthly backups",
        "Email support",
      ],
    },
    {
      name: "Growth Care Plan",
      price: "R1,200 / month",
      features: [
        "Everything in Essential",
        "Content updates",
        "Technical troubleshooting",
        "Performance monitoring",
        "SEO monitoring",
        "Priority support",
      ],
    },
    {
      name: "Premium Digital Partner",
      price: "Custom Retainer",
      features: [
        "Ongoing feature development",
        "API & system management",
        "Continuous optimization",
        "Dedicated support",
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Scalable Digital Solutions
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Flexible pricing designed for startups, growing businesses, and
          companies that need a reliable digital partner.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className={`relative rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 ${
              plan.popular ? "scale-105 border-indigo-400/40" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-4 py-1 rounded-full shadow-lg">
                Most Popular
              </div>
            )}

            <div className="flex items-center gap-3 mb-4">
              {plan.icon}
              <h3 className="text-xl font-semibold text-white">
                {plan.name}
              </h3>
            </div>

            <p className="text-2xl font-bold text-indigo-400 mb-6">
              {plan.price}
            </p>

            <ul className="space-y-3 text-gray-300 text-sm mb-8">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <a
              href="/contact"
              className="block text-center bg-gradient-to-r from-indigo-500 to-purple-500 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>

          <h2 className="text-3xl font-semibold mb-10 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
  Ongoing Support & Care Plans
</h2>

<div className="grid md:grid-cols-3 gap-8 mb-24">
  {[
    {
      name: "Essential Tech Care",
      price: "R650 / month",
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      features: [
        "Hosting management",
        "Domain management",
        "SSL monitoring",
        "Security updates",
        "Monthly backups",
        "Email support",
      ],
    },
    {
      name: "Growth Care Plan",
      price: "R1,200 / month",
      icon: <Wrench className="w-6 h-6 text-purple-400" />,
      popular: true,
      features: [
        "Everything in Essential",
        "Content updates",
        "Technical troubleshooting",
        "Performance monitoring",
        "SEO monitoring",
        "Priority support",
      ],
    },
    {
      name: "Premium Digital Partner",
      price: "Custom Retainer",
      icon: <Crown className="w-6 h-6 text-cyan-400" />,
      features: [
        "Ongoing development",
        "API & system management",
        "Continuous optimization",
        "Dedicated support",
      ],
    },
  ].map((plan, index) => (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className={`relative rounded-2xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 ${
        plan.popular ? "scale-105 border-purple-400/40" : ""
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs px-4 py-1 rounded-full shadow-lg">
          Recommended
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        {plan.icon}
        <h3 className="text-xl font-semibold text-white">
          {plan.name}
        </h3>
      </div>

      <p className="text-2xl font-bold text-indigo-400 mb-6">
        {plan.price}
      </p>

      <ul className="space-y-3 text-gray-300 text-sm mb-8">
        {plan.features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>

      <a
        href="/contact"
        className="block text-center bg-gradient-to-r from-indigo-500 to-purple-500 py-3 rounded-xl font-medium hover:opacity-90 transition"
      >
        Choose Plan
      </a>
    </motion.div>
  ))}
</div>

{/* SaaS Gradient CTA Section */}

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="relative overflow-hidden rounded-3xl p-12 text-center bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-600/20 border border-white/10 backdrop-blur-xl"
>
  <h3 className="text-3xl font-bold text-white mb-4">
    Not Sure What You Need?
  </h3>
  <p className="text-gray-300 mb-8 max-w-xl mx-auto">
    Let’s map out your technical requirements and design a scalable
    solution tailored to your business goals.
  </p>

  <a
    href="/contact"
    className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 px-8 py-4 rounded-2xl font-medium text-white shadow-lg hover:opacity-90 transition"
  >
    Book a Strategy Call
  </a>
</motion.div>
    </section>
  );
}