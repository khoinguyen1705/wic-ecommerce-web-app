import {Button, Checkbox, Col, Form, Input, InputNumber, PageHeader, Row, Select, Switch, Upload} from "antd";
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios";
import {useHistory} from "react-router-dom";
const { Option, OptGroup } = Select;

export function ProductCreatePage() {

    const [form] = Form.useForm();
    const history = useHistory();

    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const onFinish = (value: any) => {
        toBase64(value.image[0].originFileObj).then(image => {
            axios.post(`http://localhost:3001/products`, {
                ...value,
                image,
            }).then(() => history.push('/admin/products'));
        });
    }

    const toBase64 = (file: File) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const onTechniquesChange = (value: any) => {
        form.setFieldsValue({
            techniques: value,
        });
    }

    const handleCategoryChange = (value: any) => {
     console.log(value);
    }

    return (
        <>
            <PageHeader
                style={{background: "white"}}
                onBack={() => null}
                title="Create new product"
            />

            <Row style={{
                background: "white",
                marginTop: '16px',
            }}>
                <Col style={{
                    padding: '16px'
                }}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        layout='horizontal'
                        autoComplete="off"
                        style={{minWidth: '300px'}}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input product name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Upload Image"
                            name="image"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            rules={[{ required: true, message: 'Please input product image!' }]}
                        >
                            <Upload maxCount={1} name="image" accept="image/*" beforeUpload={() => false} listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item label="Price">
                            <Form.Item name="price" noStyle>
                                <InputNumber  min={0}/>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Quantity">
                            <Form.Item name="quantity" noStyle>
                                <InputNumber min={0} />
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Categories">
                            <Select
                                style={{ width: 200 }}
                                mode="multiple"
                                onChange={handleCategoryChange}>
                                <OptGroup label="Manager">
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                </OptGroup>
                                <OptGroup label="Engineer">
                                    <Option value="Yiminghe">yiminghe</Option>
                                </OptGroup>
                            </Select>
                        </Form.Item>

                        <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="isNew" label="Status New" valuePropName="checked">
                            <Switch />
                        </Form.Item>

                        <Form.Item name="techniques" label="Techniques">
                            <Select mode="tags" style={{ width: '100%' }} placeholder="Input techniques" onChange={onTechniquesChange}>
                            </Select>
                        </Form.Item>

                        <Form.Item name="sizes" label="Sizes">
                            <Checkbox.Group>
                                <Row>
                                    <Col span={8}>
                                        <Checkbox value="XS" style={{ lineHeight: '32px' }}>
                                            XS
                                        </Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="S" style={{ lineHeight: '32px' }}>
                                            S
                                        </Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="M" style={{ lineHeight: '32px' }}>
                                            M
                                        </Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="L" style={{ lineHeight: '32px' }}>
                                            L
                                        </Checkbox>
                                    </Col>
                                    <Col span={8}>
                                        <Checkbox value="XL" style={{ lineHeight: '32px' }}>
                                            XL
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>

    )
}
