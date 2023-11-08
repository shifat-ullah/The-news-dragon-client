import { Navigate, createBrowserRouter } from "react-router-dom";
import App from './../../../App';
import Catagorys from "../../Home/siteNev/LeftNev/Catagorys";
import NewsLayout from "../../layout/NewsLayout";
import News from "../../news/news/news";
import LoginLayout from "../../layout/Loginlayout/LoginLayout";
import Login from "../../shared/login/Login";
import Register from "../../shared/register/Register";
import Privateroute from "../privetRoutr/Privateroute";
import Terms from "../../shared/register/Terms";


const router = createBrowserRouter([
  {
    path: '/',
    element:<LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/',
        element: <Navigate to="/catagory/0" />
      },
      {
        path: '/terms',
        element: <Terms></Terms>
      }
    ]
  },
  {
    path: 'catagory',
    element: <App />,
    children: [
      {
        path: ':id',
        element: <Catagorys />,
        loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`),
      }
    ]
  },
  {
    path: 'news',
    element: <NewsLayout />,
    children: [
      {
        path: ':id',
        element: <Privateroute><News></News></Privateroute>,
       loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`),
      }
    ]
  }
]);


export default router;