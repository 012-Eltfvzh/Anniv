import { motion } from "framer-motion";
import Foto from "../assets/couple.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <img
          src={Foto}
          alt="couple"
          className="w-52 h-52 object-cover rounded-full border-4 border-white shadow-xl"
        />

        <div className="absolute -bottom-2 -right-2 bg-pink-500 text-white p-3 rounded-full">
          💕
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-5xl font-bold text-pink-500"
      >
        Happy
        <br />
        Anniversary
      </motion.h1>

      <p className="mt-4 text-pink-700 text-lg">
        21 Juni 2024 - Forever ♡
      </p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="mt-16 text-4xl"
      >
        ↓
      </motion.div>

    </section>
  );
}