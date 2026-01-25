import "./App.css";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import AlternatingBlocks from "./components/sections/AlternatingBlocks";
import FeatureGrid from "./components/sections/FeatureGrid";
import CallToAction from "./components/sections/CallToAction";
import SiteFooter from "./components/layout/SiteFooter";

const App = () => {
  return (
    <main className="relative w-full max-w-[1920] mx-auto ">
      <HeroSection />
      <IntroSection />
      <AlternatingBlocks />
      <FeatureGrid />
      <CallToAction />
      <SiteFooter />
    </main>
  );
};

export default App;
