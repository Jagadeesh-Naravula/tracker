import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-bold'>Oops!</h1>
        <p className='font-medium pt-5'>Sorry, an unexpected error has occurred.</p>
        <p className='pt-5'>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
}

export default ErrorPage