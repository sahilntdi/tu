import Header from "../header"
import HeroSection from "../hero-section"
import AboutSection from "../about-section"
import PodcastSection from "../podcast-section"
import PhotoshootSection from "../photoshoot-section"
import LiveStreamingSection from "../live-streaming-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PodcastSection />
      <PhotoshootSection />
      <LiveStreamingSection />
    </main>
  )
}
