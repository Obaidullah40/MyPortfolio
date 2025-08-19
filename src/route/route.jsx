import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";


const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout
,
        children: [
            {
                index: true,
                Component: Home
            },
            {
            //     path: 'register',
            //     Component: Register
            },
            {
            //     path: 'signIn',
            //     Component: SignIn
            }
        ]
    },
    {
    // path: '/',
    // Component: AuthLayout,
    // children: [
    //   {
    //     path: 'login',
    //     Component: Login
    //   },
    //   {
    //     path: 'register',
    //     Component: Register
    //   }
    // ]
  },
  {
    // path: "/dashboard",
    // element: <PrivateRoute><DashboardLayout /></PrivateRoute>, 
    // children: [
    //   {
    //     index: true,
    //     element: <DashboardHome />
    //   },
    //   {
    //     path: "profile",
    //     element: <UserProfile />
    //   },      
    // ],
  },
]);


export default router;
