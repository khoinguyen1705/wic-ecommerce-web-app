import {Button, Image, PageHeader, Space, Table} from "antd";
import {Link, useRouteMatch} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function ProductPage() {

    const {path} = useRouteMatch();
    const [data, setData] = useState([]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image: string) => {
                return <Image
                    width={200}
                    src={`http://localhost:3001/${image}`}
                />;
            }
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            key: 'quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Brand',
            key: 'brand',
            dataIndex: 'brand',
        },
        {
            title: 'Is new',
            key: 'isNew',
            dataIndex: 'isNew',
        },
        {
            title: 'Action',
            key: 'action',
            render: (row: any) => (
                <Space size="middle">
                    <Button onClick={() => deleteProduct(row._id)}>Delete</Button>
                </Space>
            ),
        },
    ];

    const deleteProduct = (productId: string) => {
        axios.delete('http://localhost:3001/products/' + productId).then(
            () => loadData()
        );
    }

    const loadData = () => {
        axios.get('http://localhost:3001/products').then(res => {
            setData(res.data.map((x: any) => ({
                ...x,
                key: x._id,
            })));
        })

    };

    useEffect(() => loadData(), []);

    return (
        <>
            <PageHeader
                style={{background: "white"}}
                onBack={() => null}
                title="Product Management"
            />

            <Space style={{ marginBottom: 16, marginTop: 16 }}>
                <Button><Link to={`${path}/create`}>Add</Link></Button>
            </Space>

            <Table columns={columns} dataSource={data} />
        </>
    );
}
