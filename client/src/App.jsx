import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  Profile,
  Admin,
  EditJob,
  AllJob,
} from './pages';

import currentUserLoader from './loaders/currentUserLoader';
import loginAction from './action/loginAction';
import addJobAction from './action/addJobAction';
import getAllJobsLoader from './loaders/getAllJobsLoader';
import editJobAction from './action/editJobAction';
import editJobLoader from './loaders/editJobLoader';
import deleteJobAction from './action/deleteJobAction';
import adminLoader from './loaders/adminLoader';
import registerAction from './action/registerAction';
import profileAction from './action/profileAction';
import statsLoader from './loaders/statsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: currentUserLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: 'all-jobs',
            element: <AllJob />,
            loader: getAllJobsLoader,
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            action: editJobAction,
            loader: editJobLoader,
          },
          { path: 'delete-job/:id', action: deleteJobAction },
        ],
      },
    ],
  },
]);

function App() {
  return (
    // <DashboardProvider>
    //   <DarkThemeProvider>
    <RouterProvider router={router} />
    //   </DarkThemeProvider>
    // </DashboardProvider>
  );
}

export default App;
