import { useNavigate } from "react-router-dom"

const Form = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">Welcome to Tracker</h1>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium" htmlFor="email">Email</label>
          <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" type="email" name="email" id="email" placeholder="Enter your email" />
        </div>
        <div>
          <label className="text-lg font-medium" htmlFor="password">Password</label>
          <input className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent" type="password" name="password" id="password" placeholder="Enter your password"/>
        </div>
        <div className="mt-8 flex justify-end">
          <button className="font-medium text-base text-violet-500">Forgot password</button>
        </div>
        <div className="mt-8 flex flex-col">
          <button className=" active:scale-[0.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-violet-500 text-white text-lg font-bold py-3 rounded-xl" onClick={()=> navigate('dashboard')}>Sign in</button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-black">Don&apos;t have an account?</p>
          <button className="text-violet-500 text-base font-medium ml-2">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Form