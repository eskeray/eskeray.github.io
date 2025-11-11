import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaDatabase
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiFlutter } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";

const SkillsMarquee = () => {
  const skills = [
    { icon: <VscAzureDevops className="text-blue-400 text-5xl" />, name: "Azure DevOps" },
    { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS3" },
    { icon: <FaJsSquare className="text-yellow-400 text-5xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React" },
    { icon: <SiTailwindcss className="text-teal-400 text-5xl" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node.js" },
    { icon: <FaDatabase className="text-gray-400 text-5xl" />, name: "SQL / DB" },
    { icon: <FaPython className="text-yellow-300 text-5xl" />, name: "Python" },
    { icon: <SiFirebase className="text-amber-400 text-5xl" />, name: "Firebase" },
    { icon: <FaDocker className="text-blue-400 text-5xl" />, name: "Docker" },
    { icon: <FaGitAlt className="text-orange-500 text-5xl" />, name: "Git" },
    { icon: <FaGithub className="text-white text-5xl" />, name: "GitHub" },
    { icon: <SiFlutter className="text-blue-400 text-5xl" />, name: "Flutter" },
  ];

  return (
    <div className="mt-16">
      {/* Animated Heading and Description */}
      <motion.div
        className="text-center space-y-6 pt-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }} // animation triggers when 30% visible
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2 className="text-4xl font-bold text-blue-950">
          What I Work With
        </motion.h2>
      </motion.div>

      <motion.div
        className="text-center pt-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }} // animation triggers when 30% visible
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <motion.p className="text-xl text-gray-700">
          🛠️ Technologies and tools I use to build modern solutions.
        </motion.p>
      </motion.div>

      {/* Full-width marquee */}
      <motion.div
        className="-mx-6 sm:-mx-12 md:-mx-24 lg:-mx-40 xl:-mx-64 2xl:-mx-72 bg-gray-800 py-6 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <Marquee speed={70} pauseOnClick gradient={false}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-row items-center mx-10 space-x-4 text-white"
            >
              {skill.icon}
              <span className="text-lg font-medium cursor-default">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </div>
  );
};

export default SkillsMarquee;
