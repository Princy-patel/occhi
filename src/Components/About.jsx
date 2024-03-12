function About() {
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
          <button className="flex gap-10 uppercase items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[40vw] rounded-3xl bg-red-500"></div>
      </div>
    </div>
  );
}

export default About;
