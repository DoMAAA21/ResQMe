import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
// ----------------------------------------------------------------------
import DashboardPage from './views/dashboard';
import AlertPage from './views/alert';
import TrackMap from './views/track';
import AddComplaint from './views/complaints/addComplaint';
import NewsPage from './views/news';
import EmergencyPlan from './views/emergencyplan';
import ChatMessenger from './views/messenger/chatMessenger';
import CommunitySupport from './views/communitysupport';
import MapEscort from './views/escort';
import SafeCheckIn from './views/checkin';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'home', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'alert', element: <AlertPage /> },
        { path: 'track', element: <TrackMap /> },
        { path: 'add-complaint', element: <AddComplaint /> },
        { path: 'news', element: <NewsPage /> },
        { path: 'my-emergency-plan', element: <EmergencyPlan /> },
       
        { path: 'messenger', element: <ChatMessenger /> },
        { path: 'community', element: <CommunitySupport /> },
        { path: 'escort', element: <MapEscort /> },
        { path: 'checkin', element: <SafeCheckIn /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
