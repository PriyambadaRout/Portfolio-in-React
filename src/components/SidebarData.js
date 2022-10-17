import React from 'react'
import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { RiContactsLine } from 'react-icons/ri';



const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome />,
        // cName: 'link'
    },
    {
        title: 'About',
        path: '/about',
        icon: <SiAboutdotme />,
        // cName: 'link'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiOutlineFundProjectionScreen />,
        // cName: 'link'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <RiContactsLine />,
        // cName: 'link'
    },
]

export default SidebarData