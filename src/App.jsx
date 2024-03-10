import Navbar from "./Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
    </div>
  );
}

export default App;
