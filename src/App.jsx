import About from "./Components/About";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import Navbar from "./Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
  );
}

export default App;
