"use client";
import { motion } from "framer-motion";
import { Wrench, Anchor, Ship, Factory } from "lucide-react";

export default function RigEngineering() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Rig Construction & Offshore Engineering
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-10"
        >
          We design, construct, and maintain offshore and onshore rigs for oil,
          gas, and renewable energy operations. Built for safety, resilience,
          and adaptability, our rigs withstand the harshest marine conditions
          while supporting future-ready energy solutions.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <Wrench className="w-8 h-8 text-blue-600" />,
              title: "Heavy Fabrication",
              desc: "Precision manufacturing of steel structures, jackets, topsides, and subsea foundations built for extreme offshore conditions.",
            },
            {
              icon: <Factory className="w-8 h-8 text-blue-600" />,
              title: "Equipment Integration",
              desc: "Advanced drilling systems, blowout preventers, dynamic positioning, and digital monitoring technologies.",
            },
            {
              icon: <Ship className="w-8 h-8 text-blue-600" />,
              title: "Offshore Logistics",
              desc: "End-to-end vessel coordination, supply chain management, and safe crew accommodations.",
            },
            {
              icon: <Anchor className="w-8 h-8 text-blue-600" />,
              title: "End-of-Life & Renewable Offshore",
              desc: "Environmentally responsible rig decommissioning, plus engineering for floating wind farms and hybrid offshore hubs.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-2xl p-6"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
