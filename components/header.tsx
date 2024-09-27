import { Layout, Button, theme, Flex } from "antd";
const { Header } = Layout;
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
export default function HeaderBar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/dang-nhap">Đăng nhập</Link>,
    },
  ];

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Flex justify="space-between" align="center" className="p-4">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ width: 32, height: 32 }}
        />
        <Dropdown menu={{ items }}>
          <Avatar icon={<UserOutlined />} size={32} />
        </Dropdown>
      </Flex>
    </Header>
  );
}
