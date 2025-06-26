import Component from "../header"
import HeroSection from "../hero-section"
import AboutSection from "../about-section"
import PodcastSection from "../podcast-section"

export default function Page() {
  return (
    <div className="bg-slate-800">
      <Component />
      <HeroSection />
      <AboutSection />
      <PodcastSection />
    </div>
  )
}
