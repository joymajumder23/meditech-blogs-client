import updateUI from "../../../../assets/images/updateUI.svg";
import { Button, Form, Input, Select } from 'antd';
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
    }
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values.title);
};
const UpdateBlog = () => {
    
    return (
        <div className="flex gap-4 container mx-auto mt-12 items-center">
            <div>
                <img src={updateUI} alt="" />
            </div>
            <div className="w-full border-dotted border-red-200 border-2 p-6">
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                >
                    <Form.Item className="w-full"
                        name='title'
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
                        name='category'
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
                                    value: 'Medical',
                                    label: 'Medical',
                                },
                                {
                                    value: 'Technology',
                                    label: 'Technology',
                                }
                            ]}
                        />
                    </Form.Item>
                    <Form.Item name='imageURL' label="Image URL">
                        <Input />
                    </Form.Item>
                    <Form.Item name='shortDes' label="Short Description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name='longDes' label="Long Description">
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
    )
};
export default UpdateBlog;