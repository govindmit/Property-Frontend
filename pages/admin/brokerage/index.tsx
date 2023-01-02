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
  <Sidebar/>
  <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
         <h1>varuuuun</h1>
        </Content>
        
    </Layout>
  );
}
