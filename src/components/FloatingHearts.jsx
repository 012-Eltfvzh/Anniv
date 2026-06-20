import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const hearts = [
  { left: "10%" },
  { left: "25%" },
  { left: "40%" },
  { left: "60%" },
  { left: "75%" },
  { left: "90%" },
];

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0"
          style={{ left: heart.left }}
          animate={{
            y: [-20, -900],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1.2,
          }}
        >
          <Heart
            size={24}
            className="text-pink-300 fill-pink-300"
          />
        </motion.div>
      ))}
    </div>
  );
}