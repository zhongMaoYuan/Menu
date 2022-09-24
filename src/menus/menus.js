import React from 'react';
import {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const items = [
    {
        key: '/one',
        icon: <UserOutlined />,
        title: '菜单1',
        label: '菜单1',
        children: [
            {
                key: '/one/a',
                title: '子菜单1',
                label: '子菜单1',
                component: React.lazy(() => import('../components/one/Achild.jsx'))
            },
            {
                key: '/one/b',
                title: '子菜单2',
                label: '子菜单2',
                component: React.lazy(() => import('../components/one/Bchild.jsx'))
            }
        ]
    },
    {
        key: '/two',
        icon: <VideoCameraOutlined />,
        title: '菜单2',
        label: '菜单2',
        children: [
            {
                key: '/two/a',
                title: '子菜单1',
                label: '子菜单1',
                component: React.lazy(() => import('../components/two/Achild.jsx'))
            },
            {
                key: '/two/b',
                title: '子菜单2',
                label: '子菜单2',
                component: React.lazy(() => import('../components/two/Bchild.jsx'))
            }
        ]
    },
]

export default items