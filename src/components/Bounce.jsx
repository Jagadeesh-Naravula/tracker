
const Bounce = () => {
  return (
    <div className="hidden relative lg:flex h-full w-1/2 justify-center items-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full hover:animate-bounce-slow delay-100"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg "/>
    </div>
  )
}

export default Bounce