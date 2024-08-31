import Bounce from '../components/Bounce'
import Login from '../components/Login'

const Home = () => {
  return (
    <div>
      <div className="flex w-full h-[calc(100vh-3.5rem)]">
        <Bounce />
        <Login />
      </div>
    </div>
  )
}

export default Home