import { Layout } from "antd";
const { Footer } = Layout;

export default function FooterBar() {
  return (
    <Footer style={{ textAlign: "center" }}>
      Buidaoanhvan ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  );
}
