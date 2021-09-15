import {Button, Col, Form, PageHeader, Row, Space, Table, Tree} from "antd";
import {Link, useRouteMatch} from "react-router-dom";

export function CategoryPage() {
    const {path} = useRouteMatch();
    const treeData = [
        {
            title: 'parent 1',
            key: '0-0',
            children: [
                {
                    title: 'leaf',
                    key: '0-0-0',
                },
                {
                    title: 'leaf',
                    key: '0-0-1',
                },
            ],
        },
    ];
    const onFinish = (value: any) => {
        console.log(value);
    }
    return (<>
        <PageHeader
            style={{background: "white"}}
            onBack={() => null}
            title="Category Management"
        />

        <Space style={{marginBottom: 16, marginTop: 16}}>
            <Button><Link to={`${path}/create`}>Add</Link></Button>
        </Space>

        <Row>
            <Col span={6}>
                <Tree
                    defaultExpandAll
                    defaultSelectedKeys={['0-0-0']}
                    treeData={treeData}
                />
            </Col>
            <Col span={18}>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    layout='horizontal'
                    autoComplete="off"
                    style={{minWidth: '300px'}}
                    onFinish={onFinish}
                >

                </Form>
            </Col>
        </Row>
    </>);
}
