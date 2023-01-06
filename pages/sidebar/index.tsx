
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
    let location = useRouter();
    const [current, setCurrent] = useState(location.pathname);


    function handleClick(e: any) {
        location.push(e.key)
    }
    // console.log('##############', current);
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
                    <Menu.Item key="/admin/dashboard" icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>

                    <Menu.Item key="/admin/user" icon={<UsergroupAddOutlined />}>
                        User Listing
                    </Menu.Item>

                    <Menu.Item key="/admin/brokerage" icon={<AlignCenterOutlined />}>
                        Brokerage Listing
                    </Menu.Item>

                    <Menu.Item key="#" icon={<FontColorsOutlined />}>
                        Agent Listing
                    </Menu.Item>

                    <Menu.Item key="/admin/landlord" icon={<IdcardOutlined />}>
                        Landlord Listing
                    </Menu.Item>
                </Menu>
            </div>
        </Sider>
    );
};

export default Sidebar;