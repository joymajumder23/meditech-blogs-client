import { Option } from "antd/es/mentions";
import blogUI from "../../../../assets/images/blogUI.svg";
import { Button, Form, Input, InputNumber, Select } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};
const AddBlog = () => (
    <div className="flex flex-row-reverse container mx-auto mt-12">
        <div>
            <img src={blogUI} alt="" />
        </div>
        <div className="w-full border">
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item className="w-full border"
                    name={['user', 'title']}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                {/* <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item
                name={['user', 'category']}
                label="Category"
                >
                    <Select
                        showSearch
                        style={{
                            width: 200,
                        }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={[
                            {
                                value: '1',
                                label: 'Medical/Medicine',
                            },
                            {
                                value: '2',
                                label: 'Technology',
                            }
                        ]}
                    />
                </Form.Item>
                <Form.Item name={['user', 'imageURL']} label="Image URL">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'shortDes']} label="Short Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['user', 'longDes']} label="Long Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
);
export default AddBlog;