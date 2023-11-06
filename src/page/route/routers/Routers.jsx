import { Navigate, createBrowserRouter } from "react-router-dom";
import App from './../../../App';
import Catagorys from "../../Home/siteNev/LeftNev/Catagorys";
import NewsLayout from "../../layout/NewsLayout";
import News from "../../news/news/news";

// const router = createBrowserRouter([


//     {
//       path: '/',
//       element: <App></App>,

//       children: [
//         {
//           path: '/',
//           element: <Navigate to="/catagory/0" />
//         },


//         {
//           path: 'category',
//           element: <App></App>,
//           children:[
//             {
//               path: ':id',
//               element: <Catagorys />,
//               loader:({params})=>fetch(`http://localhost:5000/catagory/${params.id}`),
//             }
//           ]
//         },
//       ]
//     },

// {
//   path:"/news",
//   element:<NewsLayout></NewsLayout>,
//   children:[
//       {
//         path:':id',
//         element:<News></News>,
//         loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`),


//       }
//   ]
// }
//   ]);


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navigate to="/category/0" />,
//     children:[

//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: ':id',
//     element: <Catagorys />,
//     loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`),
//   }
//     ]
//   },

//   {
//     path:"/news",
//     element:<NewsLayout></NewsLayout>,
//     children:[
//         {
//           path:':id',
//           element:<News></News>,
//           loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`),


//         }
//     ]
//   }

// ]);


// const router = createBrowserRouter([
//   // {
//   //   path: '/',
//   //   element: <App></App>,
//   //   children: [
//   //     {
//   //       path: '/',
//   //       element: <Navigate to="catagory/0" />
//   //     },
//   //     {
//   //       path: 'catagory/:id',
//   //       element: <Catagorys />,
//   //       loader:({params})=>fetch(`http://localhost:5000/catagory/${params.id}`),
//   //     }
//   //   ]
//   // },


//   {
//       path:"/news",
//       element:<NewsLayout></NewsLayout>,
//       children:[
//           {
//             path:':id',
//             element:<News></News>,
//             loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`),


//           }
//       ]
//     }
// ]);



// export default router;


const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Navigate to="/category/0" />
      }
    ]
  },
  {
    path: 'category',
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
        element: <News></News>,
       loader: ({params})=>fetch(`http://localhost:5000/news/${params.id}`),
      }
    ]
  }
]);


export default router;