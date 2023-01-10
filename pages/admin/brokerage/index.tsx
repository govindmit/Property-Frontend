import * as React from 'react';
import Sidebar from '../../sidebar';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';

const { Header, Sider, Content } = Layout;
export interface IAppProps {
}

export default function BrokerageListing(props: IAppProps) {
  return (
    <Layout>
        <Sidebar />
        <Content className="contentcss">
            <h1>Brokerage</h1>
            </Content>
        </Layout>

  );
}
