"use client";
import { motion } from "framer-motion";
import { Shield, Atom, Recycle, FileCheck } from "lucide-react";

export default function NuclearInfrastructure() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Nuclear & Advanced Energy Infrastructure
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-10"
        >
          We provide high-precision engineering solutions for the nuclear
          energy sector, where reliability and safety are non-negotiable.
          Our expertise covers the entire lifecycle of nuclear facilities,
          ensuring stability, efficiency, and compliance with global standards.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <Atom className="w-8 h-8 text-indigo-600" />,
              title: "Reactor Infrastructure",
              desc: "Civil, mechanical, and structural works forming the backbone of nuclear plants, from containment buildings to turbine halls."
            },
            {
              icon: <Shield className="w-8 h-8 text-indigo-600" />,
              title: "Containment & Safety Systems",
              desc: "Multi-layered defense systems against leaks, radiation, and hazards with advanced monitoring and controls."
            },
            {
              icon: <Recycle className="w-8 h-8 text-indigo-600" />,
              title: "Decommissioning Services",
              desc: "Safe dismantling of reactors and storage facilities, minimizing radioactive waste and environmental impact."
            },
            {
              icon: <FileCheck className="w-8 h-8 text-indigo-600" />,
              title: "Compliance & Innovation",
              desc: "Full alignment with IAEA, NRC, and local regulations while advancing SMRs, fusion, and hybrid nuclear-renewable grids."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6"
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
