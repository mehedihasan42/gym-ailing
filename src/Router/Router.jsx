import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home/Home';
import SignUp from '../Authenticate/SignUp/SignUp';
import Login from '../Authenticate/Login/Login';
import Instructors from '../Components/Instructors/Instructors';
import Courses from '../Components/Courses/Courses';
import Profile from '../Components/Profile/Profile';
import BookingClasses from '../Drawer/BookingClasses/BookingClasses';
import EnrolClasses from '../Drawer/EnrolClasses/EnrolClasses';
import Payment from '../Drawer/Payment/Payment';
import PrivetRouter from './PrivetRouter';
import Users from '../Drawer/Users/Users';
import AddCourse from '../Drawer/AddCourse/AddCourse';
import AdminRouter from './AdminRouter';
import ManageCourse from '../Drawer/ManageCourse/ManageCourse';
import UserHome from '../Drawer/UserHome/UserHome';
import AdminHome from '../Drawer/AdminHome/AdminHome';
import Histry from '../Drawer/Histry/Histry';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/instractors',
          element:<Instructors></Instructors>
        },
        {
          path: '/courses',
          element:<Courses></Courses>
        }
      ]
    },
    {
      path:'/profile',
      element:<PrivetRouter><Profile></Profile></PrivetRouter>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'booking',
          element:<BookingClasses></BookingClasses>
        },
        {
          path:'enroll',
          element:<EnrolClasses></EnrolClasses>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'users',
          element:<Users></Users>
        },
        {
          path:'histry',
          element:<Histry></Histry>
        },
        {
          path:'adminHome',
          element:<AdminRouter><AdminHome></AdminHome></AdminRouter>
        },
        {
          path:'addcourse',
          element:<AdminRouter><AddCourse></AddCourse></AdminRouter>
        },
        {
          path:'managecourse',
          element:<AdminRouter><ManageCourse></ManageCourse></AdminRouter>
        }
      ]
    }
  ]);
  export default router;