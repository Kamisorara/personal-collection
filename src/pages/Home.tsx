function Home() {
  return (
    <>
      <div className="flex-col flex-grow">
        <div className="flex h-2/4  ">
          <div className="w-4/12 h-auto bg-sky-200 rounded-lg m-2 flex-shrink-0 hidden md:block"></div>
          <div className="w-8/12 h-auto bg-sky-200 rounded-lg m-2 hidden md:block"></div>
          <div className="w-2/6 h-auto bg-sky-200 rounded-lg m-2 hidden md:block"></div>
        </div>
        <div className="flex h-2/4 ">
          <div className="w-8/12 h-auto bg-sky-200 rounded-lg m-2 hidden md:block"></div>
          <div className="w-4/12 h-auto bg-sky-200 rounded-lg m-2 hidden md:block"></div>
          <div className="w-2/6 h-auto bg-sky-200 rounded-lg m-2 hidden md:block"></div>
        </div>
      </div>
    </>
  );
}

export default Home;