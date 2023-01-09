import React, { useState } from "react";
import Sidebar from "../../../sidebar";
import { Divider, Layout, Menu, Modal, Popconfirm, Popover, Table, theme } from "antd";
import { Button, Form, Input, Select, InputNumber } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import type { FormItemProps } from 'antd';

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

  return <MyFormItemContext.Provider value={concatPath}>{ children }</MyFormItemContext.Provider>;
};
export interface IAppProps { }

export default function AddUser(props: IAppProps) {
  const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
  };
  const { Option } = Select;
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
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const onFinish = (values: any) => {
    console.log(values);
  };


  return (
    <Layout>
      <Sidebar />
      <Content className="contentcss">
        <div className="editusercss">
          <div className="backflex">
            <Link href="/admin/landlord">
              <Button
                type="text"
                className=" backbtnnland"
                icon={<ArrowLeftOutlined />}
              >
                Back
              </Button>
            </Link>
            <h2 className="textuserland">Add New Landlord</h2>
          </div>
          <div className="lanlordmain">
          <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItemGroup prefix={['user']}>
              <MyFormItemGroup prefix={['name']}>
                <MyFormItem name="firstName" label="First Name">
                  <Input />
                </MyFormItem>
                <MyFormItem name="lastName" label="Last Name">
                  <Input />
                </MyFormItem>
              </MyFormItemGroup>
              <MyFormItem name="phone" label="Phone">
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />

              </MyFormItem>
              <MyFormItem name={['user', 'noOfProperty']} label="No. Of Property" rules={[{ type: 'number', min: 0, max: 99 }]}>
                <InputNumber style={{ width: '100%' }}/>
              </MyFormItem>
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
                Submit
              </Button>
            </div>
          </Form>
          </div>
        </div>
      </Content>
    </Layout>
  );
}
