import { Layout, Menu } from "antd";
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
      key: "/phim",
      icon: <VideoCameraOutlined />,
      label: "Cài đặt",
      onClick: () => {
        router.push("/phim");
      },
    },
  ];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      width={250}
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
        <Logo width={60} height={60} title="BitPOS" titleColor="#fff" />
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        items={items}
      />
    </Sider>
  );
}
