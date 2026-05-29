





"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IndustrialPlant() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="/images/industrial-plant-hero.jpg" // 📸 Replace with actual hero image
          alt="Industrial Plant Development & Maintenance"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Industrial Plant Development & Maintenance
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Delivering full-scale EPC solutions for refineries, LNG plants, and petrochemical facilities — built for productivity, profitability, and environmental responsibility.
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Building for the Future</h2>
          <p className="mb-4">
            At <strong>ML Global Energy</strong>, we specialize in delivering end-to-end industrial plant solutions — from conceptual design and detailed engineering to construction, commissioning, and lifecycle maintenance. 
          </p>
          <p>
            Our portfolio includes refineries, LNG facilities, petrochemical complexes, and specialized industrial plants across Europe, Africa, the Middle East, and Southeast Asia. With advanced technologies and a highly skilled workforce, we ensure our plants remain efficient, compliant, and future-ready.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
            📸 Image Placeholder (Refinery or LNG Plant)
          </div>
        </motion.div>
      </section>

      {/* Key Services */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Capabilities</h2>
            <ul className="space-y-4">
              <li>
                <strong>Design & Engineering –</strong> Process optimization, 3D plant modeling, safety studies, and environmental compliance.
              </li>
              <li>
                <strong>Construction –</strong> Civil works, heavy lifting, steel fabrication, piping, and mechanical installations.
              </li>
              <li>
                <strong>Maintenance & Turnarounds –</strong> Planned shutdowns, equipment repairs, inspections, and modernization upgrades.
              </li>
              <li>
                <strong>Energy Efficiency –</strong> Implementing advanced control systems to reduce emissions and operating costs.
              </li>
              <li>
                <strong>Digitalization –</strong> Smart plant monitoring, predictive analytics, and IoT integration for performance optimization.
              </li>
              <li>
                <strong>Global Compliance –</strong> Adhering to ASME, ISO, and international refinery/LNG safety standards.
              </li>
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              📸 Image Placeholder (Heavy Construction / Plant Turnaround)
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
            📸 Image Placeholder (Petrochemical Facility or LNG Storage Tanks)
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Lifecycle Commitment</h2>
          <p className="mb-4">
            Our approach extends beyond construction — we remain partners with clients throughout the full lifecycle of their industrial facilities. With predictive maintenance, digital monitoring, and on-demand support, we maximize uptime and minimize operational risks.
          </p>
          <p>
            By integrating sustainability practices, we also ensure that every plant we deliver contributes to a cleaner, safer, and more energy-efficient future.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
