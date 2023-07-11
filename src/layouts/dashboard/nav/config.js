// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'home',
    path: '/dashboard/community',
    icon: icon('ic_home'),
  },
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  
  {
    title: 'My Friends',
    path: '/dashboard/friends',
    icon: icon('ic_user'),
  },
  {
    title: 'Track',
    path: '/dashboard/track',
    icon: icon('ic_track'),
  },
  {
    title: 'More',
    path: '/dashboard/more',
    icon: icon('ic_more'),
  },

  
  
];

export default navConfig;
