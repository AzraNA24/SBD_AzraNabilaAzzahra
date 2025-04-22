import { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@headlessui/react";
import { Sun, Moon } from "lucide-react";
import HomeSection from "./home";

const sections = [
  { id: "sbd", title: "SBD", reverse: false, image: "src/assets/SBDLogo.svg" },
  { id: "dmj", title: "DMJ", reverse: true, image: "src/assets/DMJLogo.svg" },
  { id: "os", title: "OS", reverse: false, image: "src/assets/OSLogo.svg" },
];

const themes = {
  light: {
    background: "bg-white",
    text: "text-black",
    card: "bg-white border border-black",
  },
  dark: {
    background: "bg-black",
    text: "text-white",
    card: "bg-zinc-900 border border-white",
  },
};

export default function NetlabPage() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? themes.dark : themes.light;

  return (
    <div className={`${theme.background} ${theme.text} min-h-screen transition-colors duration-700`}>
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <img src="src/assets/Logo.svg" alt="net" className="h-10" />
          <span className="bg-black text-white rounded px-2 py-1 font-bold text-lg">Network</span>
          <span className="font-bold text-lg">Laboratory</span>
        </div>
          <nav className="flex gap-6 font-bold text-lg">
            {[
              { label: "Home", href: "#home" },
              { label: "SBD", href: "#sbd" },
              { label: "DMJ", href: "#dmj" },
              { label: "OS", href: "#os" },
              { label: "NETLAB", href: "#" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-3 py-1 rounded transition duration-300 transform hover:scale-110 hover:bg-black hover:text-white"
              >
                {label}
              </a>
            ))}

            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              className={`${
                darkMode ? "bg-white" : "bg-black"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
            <span className="sr-only">Enable dark mode</span>
            <span
              className={`${
                darkMode ? "translate-x-6 bg-black" : "translate-x-1 bg-white"
              } inline-block h-4 w-4 transform rounded-full transition`}
            />
          </Switch>
        </nav>
      </header>

      <main className="px-8 py-12 space-y-24">
        <HomeSection />
        {sections.map(({ id, title, image, reverse }) => (
          <div
            id={id}
            key={title}
            className={`flex flex-col md:flex-row ${
              reverse ? "md:flex-row-reverse" : ""
            } items-center justify-center gap-8`}
          >
            <motion.img
              src={image}
              alt={title}
              className="w-64 drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold mb-4">
                <span className="bg-black text-white px-2 py-1 rounded mr-2">NETLAB</span>
                <span>{title}</span>
              </h2>
              <div className={`${theme.card} p-6 rounded-xl shadow-xl transition-colors duration-700`}>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor congue massa. Fusce
                  posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis
                  urna.
                </p>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin
                  pharetra nonummy pede. Mauris et orci. Aenean nec lorem.
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </main>
    </div>
  );
}
