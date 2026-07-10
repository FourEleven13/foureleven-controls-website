"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col justify-center px-8 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Brand Line */}
          <p className="mb-4 text-sm tracking-[0.4em] text-blue-400">
            FOUR ELEVEN CONTROLS LLC
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            When Automation Fails,
            <br />
            <span className="text-blue-400">
              FourEleven Finds the Fix.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-300">
            Industrial automation solutions built for real production
            environments. PLC programming, SCADA, HMI, networking,
            and controls modernization when uptime matters.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/Contact"
              className="rounded-lg bg-blue-500 px-10 py-4 font-semibold hover:bg-blue-600 transition-all inline-block"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="bg-gray-950 px-8 py-20 md:px-20">
        <h2 className="text-4xl font-bold">Automation Services</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "PLC Programming & Troubleshooting",
            "SCADA Development",
            "Operator HMI Design & Modernization",   // ⭐ NEW SERVICE ADDED HERE
            "Industrial Networking & IT/OT Integration",
            "Machine Commissioning",
            "Data Acquisition & MES",
            "Remote Support"
          ].map((service) => (
            <div
              key={service}
              className="rounded-xl border border-gray-800 bg-black p-6 hover:border-blue-500 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400">
                {service}
              </h3>
              <p className="mt-3 text-gray-400">
                {service === "Operator HMI Design & Modernization"
                  ? "Clean, intuitive operator screens built for speed, clarity, and uptime. From PanelView to Ignition Perspective, we modernize HMIs to reduce errors and improve operator efficiency."
                  : "Practical automation solutions focused on uptime, reliability, and production success."
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="px-8 py-20 text-center md:px-20">
        <h2 className="text-4xl font-bold">Production Doesn't Wait.</h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-300">
          Whether you are dealing with downtime, outdated controls,
          or a modernization project, FourEleven Controls is ready
          to help.
        </p>

        <a
          href="/Contact"
          className="mt-8 inline-block rounded-lg bg-blue-500 px-10 py-4 font-semibold hover:bg-blue-600 transition-all"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 px-8 py-10 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

          <div>
            <h3 className="text-xl font-semibold text-white">Four Eleven Controls LLC</h3>
            <p className="text-gray-400 mt-2">
              Industrial Automation • PLC • SCADA • HMI • Networking • Commissioning
            </p>
          </div>

          <div className="text-gray-300">
            <p><span className="font-semibold text-blue-400">Phone:</span> 484-706-1098</p>
            <p><span className="font-semibold text-blue-400">Email:</span> info@fourelevencontrolsllc.com</p>
            <p className="mt-2 text-gray-500">Perry County, Pennsylvania</p>
          </div>

        </div>

        <p className="text-gray-600 text-sm mt-8">
          © {new Date().getFullYear()} Four Eleven Controls LLC. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
