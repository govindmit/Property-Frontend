import * as React from 'react';
import Sidebar from '../../sidebar';
import { Layout, Menu, theme } from 'antd';
import { UserOutlined, UploadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Sider, Content } = Layout;
export interface IAppProps {
}

export default function App(props: IAppProps) {
    return (
        <Layout>
        <Sidebar />
        <Content className="contentcss">
            <h1>Dashboard</h1>
            </Content>
        </Layout>

    );
}
