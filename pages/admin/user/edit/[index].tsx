import React, { useState } from "react";
import Sidebar from "../../../sidebar";
import { Divider, Layout, Menu, Modal, Popconfirm, Popover, Table, theme } from "antd";
import { Button, Form, Input, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import type { FormItemProps } from 'antd';
import { useRouter } from "next/router";

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
    prefix: string | number | (string | number)[];
    children: React.ReactNode;
}

function toArr(str: string | number | (string | number)[]): (string | number)[] {
    return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup = ({ prefix, children }: MyFormItemGroupProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
export interface IAppProps { }

export default function UserListing(props: IAppProps) {
    const { Option } = Select;
    const { query } = useRouter();
    const MyFormItem = ({ name, ...props }: FormItemProps) => {
        const prefixPath = React.useContext(MyFormItemContext);
        const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
        return <Form.Item name={concatName} {...props} />;
    };
    const { Header, Sider, Content } = Layout;
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const [form] = Form.useForm();

    const onGenderChange = (value: string) => {
        switch (value) {
            case 'Active':
                form.setFieldsValue({ note: 'Hi, man!' });
                return;
            case 'InActive':
                form.setFieldsValue({ note: 'Hi, lady!' });
                return
            default:
        }
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    console.log('@@@@@@@@@@query', query?.index);
    return (
        <Layout>
            <Sidebar />
            <Content className="contentcss">
                <div className="editusercss">
                    <div className="backflex">
                        <Link href="/admin/user">
                            <Button
                                type="text"
                                className=" backbtnn"
                                icon={<ArrowLeftOutlined />}
                            >
                                Back
                            </Button>
                        </Link>
                        <h2 className="textuseruser">Edit User Details</h2>
                    </div>
                    <div className="lanlordmain">
                        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                            <MyFormItemGroup prefix={['user']}>
                                <MyFormItemGroup prefix={['name']}>
                                    <MyFormItem name="name" label="Name">
                                        <Input />
                                    </MyFormItem>
                                    <MyFormItem name="email" label="Email">
                                        <Input />
                                    </MyFormItem>
                                </MyFormItemGroup>
                                <MyFormItem name="status" label="Status">
                                    <Select
                                        placeholder="Select a option and change status"
                                        onChange={onGenderChange}
                                        allowClear
                                    >
                                        <Option value="active">Active</Option>
                                        <Option value="inactive">InActive</Option>
                                    </Select>
                                </MyFormItem>
                            </MyFormItemGroup>

                            <div className="btnsubland">
                                <Button htmlType="submit" className="btnupdate">
                                    Update
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Content>
        </Layout>
    );
}
