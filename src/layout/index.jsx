import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import logo from '../logo.png'
import {
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom'
import Context from './module/Context';
import { connect } from 'react-redux'

const { Header, Sider } = Layout;


const App = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const history = useHistory()
    // 跳转
    const changUrl = ({ key }) => {
        history.push(key)
    }

    return (
        <Layout id='components-layout-demo-custom-trigger'>
            {/* 侧边导航 */}
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <img src={logo} style={{ width: 30 }} />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '/one',
                            icon: <UserOutlined />,
                            title: '菜单1',
                            label: '菜单1',
                            children: [
                                {
                                    key: '/one/a',
                                    title: props.state.chiladMenuOne,
                                    label: props.state.chiladMenuOne,
                                    component: React.lazy(() => import('../components/one/Achild.jsx'))
                                },
                                {
                                    key: '/one/b',
                                    title: '子菜单22',
                                    label: '子菜单22',
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
                                    title:'子菜单11',
                                    label: '子菜单11',
                                    component: React.lazy(() => import('../components/two/Achild.jsx'))
                                },
                                {
                                    key: '/two/b',
                                    title: props.state.chiladMenuTwo,
                                    label: props.state.chiladMenuTwo,
                                    component: React.lazy(() => import('../components/two/Bchild.jsx'))
                                }
                            ]
                        },
                    ]}
                    onClick={changUrl}
                />
            </Sider>

            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>

                <Context />
            </Layout>
        </Layout>
    );
};

export default connect(state => {
    return {
        state
    }
})(App);