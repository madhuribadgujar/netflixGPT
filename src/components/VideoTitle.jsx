const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px:6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className=" text-sm  md:text-3xl font-bold md:p-30 my-5 md:my-2 w-40 md:w-[50%] px-2 m-12 md:m-0 md:px-5 ">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>

      <div>
        <button className="bg-white  text-black md:p-3 my-5 md:my-2 w-20 md:w-28 px-2 m-12 md:m-0 md:px-5 text-sm md:text-lg rounded-lg hover:bg-opacity-50">
          ▶ Play
        </button>
        <button className=" hidden md:inline-block bg-gray-400  mx-2 text-white p-2 my-2 w-22 px-5 text-lg bg-opacity-50 rounded-lg">
          More info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
