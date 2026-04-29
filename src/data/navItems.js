import { Info as InfoIcon } from '@mui/icons-material';
import { WorkOutlineOutlined as WorkOutlineIcon } from '@mui/icons-material';
import { Subscriptions as SubscriptionsIcon } from '@mui/icons-material';


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
