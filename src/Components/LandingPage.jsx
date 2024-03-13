import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useState } from "react";

function LandingPage() {
  const [isAnimation, setIsAnimation] = useState(false);

  const handleMouse = function () {
    setIsAnimation(!isAnimation);
  };
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[7vw] h-[5.5vw] rounded-md bg-green-500 relative top-[-4px]"
                  >
                    <img
                      className="w-full h-full bg-cover rounded-md"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="flex items-center uppercase text-[7vw] leading-[6vw] font-['Agency_FB'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-3">
          <div
            className={`px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light font-medium uppercase cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 font-medium hover:transition-all hover:duration-500 ${
              isAnimation &&
              "bg-zinc-100 text-zinc-900 font-medium transition-all duration-500"
            }`}
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouse}
          >
            Start the Project
          </div>
          <div
            className={`w-10 h-10 border-[1px] rounded-full border-zinc-400 flex items-center justify-center cursor-pointer hover:bg-zinc-100 hover:text-zinc-900 font-medium hover:transition-all hover:duration-500 ${
              isAnimation &&
              "bg-zinc-100 text-zinc-900 font-medium transition-all duration-500"
            }`}
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouse}
          >
            <span className={`rotate-[45deg]`}>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
