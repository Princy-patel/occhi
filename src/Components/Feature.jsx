import { motion, useAnimation } from "framer-motion";

function Feature() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = function (index) {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = function (index) {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight">Featured Project</h1>
      </div>

      <div className="px-20">
        <div className="flex gap-10 cards w-full mt-10">
          <motion.div
            onHoverStart={handleHover.bind(null, 0)}
            onHoverEnd={handleHoverEnd.bind(null, 0)}
            className="cardContainer relative w-1/2 h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-[-127px] -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tight text-8xl font-['Agency_FB']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block font-bold"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={handleHover.bind(null, 1)}
            onHoverEnd={handleHoverEnd.bind(null, 1)}
            className="cardContainer relative w-1/2 h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tight text-8xl font-['Agency_FB']">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block font-bold"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
