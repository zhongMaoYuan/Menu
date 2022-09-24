import React from 'react';
import { Switch, Route } from "react-router-dom";
import menus from '../../menus/menus.js'
import { Layout } from 'antd';

const { Content } = Layout;

const Context = () => {
    // 路由
    const renderRoute = (menus) => {
        return menus.map(item => {
            if (item.children) {
                return renderRoute(item.children)
            } else {
                return <Route path={item.key} exact key={item.key} component={item.component} />
            }
        })
    }
    return (
        <Content className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}>

            <React.Suspense fallback={<div> 加载中... </div>}>
                <Switch>
                    {renderRoute(menus)}
                </Switch>
            </React.Suspense>
        </Content>
    );
};

export default Context;