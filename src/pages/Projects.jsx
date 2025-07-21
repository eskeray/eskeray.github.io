import ProjectCard from "../components/ProjectCard"
import profileImage from "../assets/profile.jpg"
import benchLabImage from "../assets/benchlab.png"
import nextUpImage from "../assets/nextup.jpg"

const Projects = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center space-y-6 pt-16">
        <h2 className="text-4xl font-bold text-blue-950">My Projects</h2>
        <p className="text-xl text-gray-700">
          🚀 Building solutions across web, hardware, and software for real-world challenges.
        </p>
      </div>

      {/* List of Projects */}
      <div className="pt-16 flex flex-wrap justify-center gap-8">
        <ProjectCard
          image={benchLabImage}
          title="ZF BenchLab"
          tools="React | FastAPI (Python) | MariaDB | MUI"
          description="🛠️ BenchLab is a ZF-internal tool for configuring electric motor test benches. It streamlines project setup and exports configurations directly to the test bench."
          year="2025"
        />
        <ProjectCard
          image={nextUpImage}
          title="NextUp"
          tools="MicroPython | ESP32 | CalDAV"
          description="📅 A smart display built with ESP32 and MicroPython that shows your next Apple Calendar event. It updates automatically when new events are added."
          year="2024"
        />
        <ProjectCard
          image={nextUpImage}
          title="ZF DashBounce"
          tools="PyGame (Python) | Raspberry Pi"
          description="🕹️ Another example project to fill space and show wrapping."
          year="2023"
        />
        {/* Add more ProjectCards here */}
      </div>
    </>
  )
}

export default Projects
