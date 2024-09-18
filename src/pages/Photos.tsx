function Photos() {
  return (
    <>
      <div className="flex-row flex-grow">
        {/* search bar */}
        <div className="h-1/12">
          <div className="m-2 h-3/4 w-28 bg-gray-600 ml-auto rounded-md cursor-pointer
          flex items-center justify-center
          transition-all duration-300 ease-in-out hover:scale-110 hover:bg-gray-700
          ">
            <span className="font-bold text-lg text-white">
              {"import"}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Photos;