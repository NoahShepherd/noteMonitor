import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import MainLayout from './layout/main';
import EditLayout from './layout/editLayout';
import MainPage from './pages/main';
import EditPage from './pages/edit';
import ListPage from './pages/list';
import CheckPage from './pages/check';
import DeployPage from './pages/deploy';
import EnablePage from './pages/enable';
import TracePage from './pages/trace';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <MainPage /> },
      ],
    },
    {
      path: '/note',
      element: <EditLayout/>,
      children:[
        {path: 'list',element:<ListPage/>},
        {path: 'edit',element:<EditPage/>},
        {path: 'check',element:<CheckPage/>},
        {path: 'deploy',element:<DeployPage/>},
        {path: 'enable',element:<EnablePage/>},
        {path: 'trace',element:<TracePage/>},
      ]
    }
  ]);
}
