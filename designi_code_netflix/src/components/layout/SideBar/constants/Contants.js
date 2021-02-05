import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import {
  faBookmark,
  faChartLine,
  faClipboard,
  faCog,
  faComment,
  faHeart,
  faUser,
  faUsersCog,
} from '@fortawesome/free-solid-svg-icons'

export const SIDEBAR_ITEMS = [
  {
    title: 'Temporal',
    links: [
      {
        icon: faUser,
        name: 'home',
        link: '/',
      },
      {
        icon: faUser,
        name: 'public',
        link: '/public',
      },
      {
        icon: faUser,
        name: 'private1',
        link: '/private1',
      },
      {
        icon: faUser,
        name: 'private2',
        link: '/private2',
      },
    ],
  },
  {
    title: 'My Count',
    links: [
      {
        icon: faUser,
        name: 'Profile',
      },
      {
        icon: faUsersCog,
        name: 'My Count',
      },
      {
        icon: faClipboard,
        name: 'History',
      },
      {
        icon: faComment,
        name: 'Comments',
      },
    ],
  },
  {
    title: 'Service',
    links: [
      {
        icon: faYoutube,
        name: 'Video',
      },
      {
        icon: faHeart,
        name: 'Favorites',
      },
      {
        icon: faBookmark,
        name: 'Posts',
      },
      {
        icon: faChartLine,
        name: 'Statistics',
      },
      {
        icon: faCog,
        name: 'Settings',
      },
    ],
  },
]
