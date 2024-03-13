import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-3xl text-black">
      <h1 className="text-[4vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>

      <div className="flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-5xl">Our approach</h1>
          <button
            onMouseEnter={() => {
              setIsExpanded(true);
              console.log(isExpanded);
            }}
            onMouseLeave={() => setIsExpanded(false)}
            className={`flex gap-10 uppercase items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white ${
              isExpanded && "bg-red-500"
            }`}
          >
            Read More
            <div
              className={`relative w-2 h-2 bg-zinc-100 rounded-full hover:scale-[4] hover:transition-all hover:duration-500 ${
                isExpanded && "scale-[4] transition-all"
              }`}
            >
              <FaArrowUp className="absolute top-0.5 left-0.5 rotate-[45deg] text-black w-1 h-1" />
            </div>
          </button>
        </div>

        <div className="w-1/2 h-[30vw] rounded-3xl bg-red-500 overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            className="w-full h-full object-fit"
            alt="design"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
