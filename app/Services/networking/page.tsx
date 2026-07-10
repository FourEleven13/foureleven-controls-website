export default function Networking() {
  return (
    <main className="px-8 md:px-20 pt-32">
      <h1 className="text-5xl font-bold mb-6">
        Industrial Networking & IT/OT Integration
      </h1>

      <p className="text-gray-300 max-w-3xl text-lg mb-10">
        Reliable, secure industrial networks built for modern automation.
        FourEleven designs and maintains networks that keep machines, PLCs,
        SCADA systems, and enterprise systems communicating safely.
      </p>

      <div className="grid gap-10 md:grid-cols-2">

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Protocols</h2>
          <p className="text-gray-400">
            Ethernet/IP, Profinet, Modbus TCP, OPC UA, MQTT.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Capabilities</h2>
          <p className="text-gray-400">
            VLANs, managed switches, secure architectures, firewall configuration,
            remote access, and network troubleshooting.
          </p>
        </div>

      </div>
    </main>
  );
}
