import {Layout, Menu} from "antd";
import Sider from "antd/es/layout/Sider";
import {Content, Header} from "antd/es/layout/layout";
import {Link, Redirect, Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import {ProductPage} from "./ProductPage";
import {CategoryPage} from "./CategoryPage";
import {OrderPage} from "./OrderPage";
import {UserPage} from "./UserPage";
import {ProductCreatePage} from "./ProductCreatePage";

function AdminPage() {
    const {path} = useRouteMatch();
    const location = useLocation();
    const menus = [
        {
            name: 'Product Management',
            link: `${path}/products`,
        },
        {
            name: 'Category Management',
            link: `${path}/categories`,
        },
        {
            name: 'Order Management',
            link: `${path}/orders`,
        },
        {
            name: 'User Management',
            link: `${path}/users`,
        }
    ];
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        defaultSelectedKeys={[location.pathname]}
                        mode="inline"
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {menus.map(
                            menu => <Menu.Item key={menu.link} ><Link to={menu.link}>{menu.name}</Link></Menu.Item>
                        )}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px', minHeight: 'calc(100vh - 64px)' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Redirect exact from={path} to={`${path}/products`} />

                            <Route path={`${path}/products/create`}>
                                <ProductCreatePage />
                            </Route>

                            <Route path={`${path}/products`}>
                                <ProductPage />
                            </Route>

                            <Route path={`${path}/categories`}>
                                <CategoryPage />
                            </Route>

                            <Route path={`${path}/orders`}>
                                <OrderPage />
                            </Route>

                            <Route path={`${path}/users`}>
                                <UserPage />
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default AdminPage;
