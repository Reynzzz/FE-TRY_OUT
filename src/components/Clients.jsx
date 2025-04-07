"use client";

import { motion } from "framer-motion";

const clients = [
  { id: 1, name: "Client A", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/images.png?updatedAt=1739717839057" },
  { id: 2, name: "Client B", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/images%20(1).png?updatedAt=1739717834989" },
  { id: 3, name: "Client C", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/images.jpeg?updatedAt=1739717835011" },
  { id: 4, name: "Client D", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/download%20(1).png?updatedAt=1739717834847" },
  { id: 5, name: "Client E", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/images%20(4).png?updatedAt=1739717834900" },
  { id: 6, name: "Client F", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/download%20(1).jpeg?updatedAt=1739717834905" },
  { id: 7, name: "Client F", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/images%20(1).jpeg?updatedAt=1739717834842" },
  { id: 8, name: "Client F", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/images%20(3).png?updatedAt=1739717834734" },
  { id: 9, name: "Client F", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/images%20(2).png?updatedAt=1739717834741" },
  { id: 10, name: "Client F", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/download.png?updatedAt=1739717834741" },
  { id: 11, name: "Client F", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/download.jpeg?updatedAt=17397178344785" },
  { id:12, name: "Client F", logo: "https://ik.imagekit.io/x6p94nrv0m/Universitas%20Logo/download%20(1).jpeg?updatedAt=1739717834905" },

];

const MarqueeRow = ({ clients, direction }) => (
  <motion.div
    initial={{ x: direction > 0 ? "100%" : "-100%" }}
    animate={{ x: direction > 0 ? "-100%" : "100%" }}
    transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    }}
    className="flex gap-8 items-center justify-center"
  >
    {clients.map((client) => (
      <div key={client.id} className="flex-shrink-0 flex items-center justify-center">
        <img
          src={client.logo || "/placeholder.svg"}
          alt={client.name}
          className="max-w-[100px] h-auto object-cover "
        />
      </div>
    ))}
  </motion.div>
)

const Clients = () => {
  const firstHalf = clients.slice(0, Math.ceil(clients.length / 2));
  const secondHalf = clients.slice(Math.ceil(clients.length / 2));

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-transparent overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-texh"
        >
          Lulusan Kami Menempuh Pendidikan Di
        </motion.h2>
        <div className="space-y-8">
          <div className="overflow-hidden">
            <MarqueeRow clients={firstHalf} direction={-1} />
          </div>
          <div className="overflow-hidden">
            <MarqueeRow clients={secondHalf} direction={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
