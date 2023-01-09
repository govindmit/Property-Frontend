
import React, { useEffect, useState } from 'react';
import { AlignCenterOutlined, AppstoreOutlined, DashboardOutlined, FontColorsOutlined, IdcardOutlined, MailOutlined, UploadOutlined, UsergroupAddOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
const { Header, Content, Footer, Sider } = Layout;

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const location = useRouter();
    const getPath=location.pathname
    const [current, setCurrent] = useState(location.pathname);

    function handleClick(e: any) {
        location.push(e.key)
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo" />
            <div className='slidercss'>
                <Menu
                    onClick={(e) => handleClick(e)}
                    mode="vertical"
                    selectedKeys={[current]}
                   
                >
                    <Menu.Item  className="sidebarcsstop" key={!getPath.includes('dashboard') ? '/admin/dashboard' : getPath} >
                       &emsp; Dashboard
                    </Menu.Item>

                    <Menu.Item key={!getPath.includes('user') ? '/admin/user' : getPath}>
                    &emsp; User Listing
                    </Menu.Item>

                    <Menu.Item key={!getPath.includes('brokerage') ? '/admin/brokerage' : getPath} >
                    &emsp;  Brokerage Listing
                    </Menu.Item>

                    <Menu.Item key="#" >
                    &emsp;  Agent Listing
                    </Menu.Item>

                    <Menu.Item key={!getPath.includes('landlord') ? '/admin/landlord' : getPath} >
                    &emsp;  Landlord Listing
                    </Menu.Item>
                </Menu>
            </div>
        </Sider>
    );
};

export default Sidebar;