import { motion } from "framer-motion";

export default function HomeSection() {
return (
    <motion.section
        className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
    <motion.h1
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-500 via-pink-500 to-gray-200 text-transparent bg-clip-text mb-6"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
    >
        Welcome to <span className="block mt-2">Netlab Universe</span>
    </motion.h1>

    <motion.p
        className="text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
    >
        It looks cool to add this. That's why I made sub title, but I actually don't know what to put.
    </motion.p>
    </motion.section>
  );
}
