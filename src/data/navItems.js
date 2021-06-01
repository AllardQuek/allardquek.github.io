import InfoIcon from '@material-ui/icons/Info';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';


const navItems = [
    {
        title: 'About',
        path: "#about",
        icon: <InfoIcon />,
        className: 'nav-item',
    },
    {
        title: 'Projects',
        path: "#projects",
        icon: <WorkOutlineIcon />,
        className: 'nav-item',
    },
    {
        title: 'Content',
        path: "#content",
        icon: <SubscriptionsIcon />,
        className: 'nav-item',
    },
]


export default navItems
