import { motion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"
import BackToTopButton from "../components/BackToTopButton"
import benchLabImage from "../assets/benchlab.png"
import nextUpImage from "../assets/nextup.jpg"
import dashbounceImage from "../assets/dashbounce.jpg"

const projectData = [
  {
    image: benchLabImage,
    title: "ZF BenchLab",
    tools: "React | FastAPI | MariaDB | MUI",
    description:
      "🛠️ BenchLab is a ZF-internal tool for configuring electric motor test benches. It streamlines project setup and exports configurations directly to the test bench.",
    year: "2025",
  },
  {
    image: nextUpImage,
    title: "NextUp",
    tools: "MicroPython | ESP32 | CalDAV",
    description:
      "📅 A smart display built with ESP32 and MicroPython that shows your next Apple Calendar event. It updates automatically when new events are added.",
    year: "2024",
  },
  {
    image: dashbounceImage,
    title: "ZF DashBounce",
    tools: "PyGame | Raspberry Pi",
    description:
      "🕹️ DashBounce is a game built for ZF InfoNight during my apprenticeship. It features a light reaction challenge with rising speed and a sound game to buzz the correct sequence.",
    year: "2023",
  },
]

const Projects = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center space-y-6 pt-16">
        <motion.h2
          className="text-4xl font-bold text-blue-950"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="text-xl text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          🚀 Building solutions across web, hardware, and software for real-world challenges.
        </motion.p>
      </div>

      {/* List of Projects */}
      <div className="pt-16 flex flex-wrap justify-center gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      <BackToTopButton />
    </>
  )
}

export default Projects
