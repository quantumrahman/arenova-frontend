import { CalendarCheck, House, Settings2 } from 'lucide-react';

export const dashboardLinks = [
    {
        id: 1,
        label: 'Home',
        href: '/',
        icon: <House size={20} />,
    },
    {
        id: 2,
        label: 'Manage Facilities',
        href: '/dashboard/facility/manage',
        icon: <Settings2 size={20} />,
    },
    {
        id: 3,
        label: 'My Bookings',
        href: '/dashboard/bookings',
        icon: <CalendarCheck size={20} />,
    },
];
