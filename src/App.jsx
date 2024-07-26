import Homepage from "./routes/homepage/homepage"
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listpage/listPage";
import Profile from "./routes/profile/profile";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SinglePage from "./routes/singlePage/SinglePage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<Profile/>
        }

      ]
    }
  ]);
  return (
   
    <RouterProvider router={router}/>
  );
}

export default App