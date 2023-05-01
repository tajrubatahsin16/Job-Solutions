import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllInfo from './Components/AllInfo/AllInfo';
import Home from './Components/Home/Home';
import ViewDetail from './Components/ViewDetail/ViewDetail';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <AllInfo></AllInfo>,
        loader: () => fetch("/Feature.json")
      },
      {
        path: 'feature/:id',
        element: <ViewDetail></ViewDetail>,
        loader: ({params}) => fetch(`/Feature.json`)
      },
      {
        path: 'jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'statistics',
        element: <AssignmentMarks></AssignmentMarks>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
