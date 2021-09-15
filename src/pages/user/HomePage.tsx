import Sider from "antd/es/layout/Sider";
import {Card, Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import Filter from "./components/Filter";
import {Meta} from "antd/es/list/Item";
import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const HomePage = () => {
    const [data, setData] = useState([]);
    const history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:3001/products').then(res => {
            setData(res.data);
        })
    }, [])

    const clickCard = (id: String) => {
        history.push('/products/' + id);
    }

    const onFilterChange = (filterValue: any) => {
        axios.get('http://localhost:3001/products', {
            params: filterValue,
        }).then(res => setData(res.data));
    }
    return (
        <>
            <Sider width={300} className="site-layout-background" style={{
                minHeight: 'calc(100vh - 64px)',
                background: "white",
                padding: '20px'
            }}>
                <Filter onChange={onFilterChange} />
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    {data.map((x: any) => <Card
                        onClick={() => clickCard(x._id)}
                        hoverable
                        style={{width: 240}}
                        cover={<img alt="example" src={`http://localhost:3001/${x.image}`}/>}
                    >
                        <Meta title={x.name} description={`$${x.price}`}/>
                    </Card>)}
                </Content>
            </Layout>
        </>
    )
}

export default HomePage;
