import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 text-white rounded-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[20vw] leading-none font-['Agency_FB'] font-semibold uppercase pt-8 pb-8 pr-10"
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[20vw] leading-none font-['Agency_FB'] font-semibold uppercase pt-8 pb-8 pr-10"
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
