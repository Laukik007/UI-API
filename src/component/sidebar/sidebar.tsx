import React from "react";
import { Layout, Menu } from "antd";
import {
	CalendarOutlined,
	TeamOutlined,
	HomeOutlined,
	ShareAltOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

interface SidebarProps {
	collapsed: boolean;
	onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
	const menuItems = [
		{
			label: "Home",
			key: "1",
			icon: <HomeOutlined />,
		},
		{
			label: "Team",
			key: "2",
			icon: <TeamOutlined />,
		},
		{
			label: "Appointments",
			key: "3",
			icon: <CalendarOutlined />,
		},
		{
			label: "Share",
			key: "4",
			icon: <ShareAltOutlined />,
		},
	];

	return (
		<Sider
			//   width={100}
			theme="light"
			collapsible
			collapsed={collapsed}
			onCollapse={onCollapse}
		>
			<Menu
				selectedKeys={["1"]}
				mode="vertical"
				theme="light"
				items={menuItems}
			/>
			<div className="user-menu"></div>
		</Sider>
	);
};

export default Sidebar;
