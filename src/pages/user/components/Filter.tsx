import {Button, Form, Input, Radio, Slider, Switch, Tree} from "antd";

function Filter(props: any) {
    const [form] = Form.useForm();
    const treeData = [
        {
            title: 'Trouser',
            key: '0-0',
            children: [
                {
                    title: 'Trouser A',
                    key: '0-0-0',
                },
                {
                    title: 'Trouser B',
                    key: '0-0-1',
                },
            ],
        },
    ];

    return (
        <>
            <Tree
                defaultExpandAll
                defaultSelectedKeys={['0-0-0']}
                treeData={treeData}
            />
            <Form
                layout="vertical"
                form={form}
                onValuesChange={props.onChange}
            >
                <Form.Item name="name" label="Product Name">
                    <Input placeholder="Search product name"/>
                </Form.Item>

                <Form.Item name="price" label="Pricing">
                    <Slider
                        max={10000}
                        range={true}
                        step={1000}
                        dots={true}
                    />
                </Form.Item>

                <Form.Item name="radio-group" label="Radio.Group">
                    <Radio.Group>
                        <Radio value="a">item 1</Radio>
                        <Radio value="b">item 2</Radio>
                        <Radio value="c">item 3</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name="inStock" label="In Stock" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <Form.Item
                    name="size"
                    label="Size"
                >
                    <Radio.Group>
                        <Radio.Button value="XS">XS</Radio.Button>
                        <Radio.Button value="S">S</Radio.Button>
                        <Radio.Button value="M">M</Radio.Button>
                        <Radio.Button value="L">L</Radio.Button>
                        <Radio.Button value="XL">XL</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default Filter;
