function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardContainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 uppercase">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 uppercase">
            Business Bootcamp Alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
