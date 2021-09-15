import {Button, Descriptions, Divider, Image, Layout, PageHeader, Tag} from "antd";
import {Content} from "antd/es/layout/layout";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export function ProductDetailPage() {
    const [data, setData] = useState<any>({});
    const {productId} = useParams<{
        productId: string;
    }>();

    useEffect(() => {
        axios.get(`http://localhost:3001/products/${productId}`).then(res => {
            setData(res.data);
        })
    }, [])

    const addToCart = () => {}

    return (
        <>
        <PageHeader
            style={{background: "white"}}
            onBack={() => null}
            title="Create new product"
        />
            <Divider/>
        <Layout style={{
            padding: '0 24px 24px',
        }}>
            <Content>
                <Descriptions bordered style={{background: 'white'}}>
                    <Descriptions.Item label="Product">{data.name}</Descriptions.Item>
                    <Descriptions.Item label="Price">${data.price}</Descriptions.Item>
                    <Descriptions.Item label="Quantity">{data.quantity}</Descriptions.Item>
                    {/*<Descriptions.Item label="Create time">Data.</Descriptions.Item>*/}
                    {/*<Descriptions.Item label="Usage Time" span={2}>*/}
                    {/*    2019-04-24 18:00:00*/}
                    {/*</Descriptions.Item>*/}
                    <Descriptions.Item label="Category">
                        {data.category.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Sizes">
                        {data.sizes.map((size: string) => <Tag>{size}</Tag>)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Techniques">
                        {data.techniques.map((size: string) => <Tag>{size}</Tag>)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Image" span={3}>
                        <Image
                            width="300px"
                            src={`http://localhost:3001/${data.image}`}
                        />
                    </Descriptions.Item>
                </Descriptions>

                <Button onClick={addToCart}>Add To Cart</Button>
            </Content>
        </Layout>
        </>
    )
}
