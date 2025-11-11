import Hero from "../components/Hero"
import SkillsMarquee from "../components/SkillsMarquee"
import CareerTimeline from "../components/CareerTimeline"
import BackToTopButton from "../components/BackToTopButton"
import SectionIndicator from "../components/SectionIndicator"

const sections = [
  { id: 'hero', label: 'Introduction' },
  { id: 'timeline', label: 'Career' },
  { id: 'skills', label: 'Skills' },
];

const Home = () => {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="timeline">
        <CareerTimeline />
      </div>
      <div id="skills">
        <SkillsMarquee />
      </div>

      <SectionIndicator sections={sections} />
      <BackToTopButton />
    </>
  )
}

export default Home
