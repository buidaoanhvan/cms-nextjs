"use client";
import { useState } from "react";
import { Layout, theme, Flex } from "antd";
import SiderBar from "@/components/sider";
import HeaderBar from "@/components/header";
import FooterBar from "@/components/footer";
const { Content } = Layout;

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Flex className="h-screen">
      <Layout hasSider={true}>
        <SiderBar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <HeaderBar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                height: "100%",
                overflow: "auto",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
          <FooterBar />
        </Layout>
      </Layout>
    </Flex>
  );
}
