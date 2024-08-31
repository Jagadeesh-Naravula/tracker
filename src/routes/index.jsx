import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ErrorPage from '../pages/Error';
import Dashboard from '../pages/Dashboard';


export const routes = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                index: true, element: <Home />
            },
            {
                path: '/login', element: <Home />
            },
            {
                path: 'dashboard', element: <Dashboard />
            }
        ],
        errorElement: <ErrorPage />
    }
])