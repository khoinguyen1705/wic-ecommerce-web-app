import {Layout, Menu} from "antd";
import {Header} from "antd/es/layout/layout";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import HomePage from "./HomePage";
import {ProductDetailPage} from "./ProductDetailPage";

function IndexPage() {
    const { path } = useRouteMatch();
    console.log(path);
    return (
            <Layout>
                <Header className="header" style={{padding: 0}}>
                    <div className="logo"/>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout style={{
                    minHeight: 'calc(100vh - 64px)'
                }}>
                    <Switch>
                        <Route exact path={path}>
                            <HomePage/>
                        </Route>
                        <Route path={`/products/:productId`}>
                            <ProductDetailPage/>
                        </Route>
                    </Switch>
                </Layout>
            </Layout>

    )
}

export default IndexPage;
