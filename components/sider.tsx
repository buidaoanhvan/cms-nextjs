import { Layout, Menu, Image } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import Link from "next/link";
const { Sider } = Layout;
import { useRouter, usePathname } from "next/navigation";
import Logo from "./logo";

export default function SiderBar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const items = [
    {
      key: "/",
      icon: <UserOutlined />,
      label: "Trang chủ",
      onClick: () => {
        router.push("/");
      },
    },
    {
      key: "/settings",
      icon: <VideoCameraOutlined />,
      label: "Cài đặt",
      onClick: () => {
        router.push("/settings");
      },
    },
  ];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={collapsed}
      onBreakpoint={(broken) => {
        setCollapsed(broken);
      }}
      onCollapse={(collapsed) => {
        setCollapsed(collapsed);
      }}
      trigger={null}
    >
      <Link href="/" className="flex items-center justify-center p-4">
        <Logo width={32} height={32} />
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[pathname]}
        items={items}
      />
    </Sider>
  );
}
