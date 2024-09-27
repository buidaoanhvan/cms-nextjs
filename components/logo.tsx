import { Flex, Image, Typography } from "antd";

export default function Logo({
  width,
  height,
  title,
  titleColor,
}: {
  width: number;
  height: number;
  title?: string;
  titleColor?: string;
}) {
  return (
    <Flex justify="center" align="center">
      <Image
        preview={false}
        src="/logo.svg"
        alt="logo"
        width={width}
        height={height}
      />
      <Typography.Title
        level={3}
        style={{ margin: 0, color: titleColor, marginLeft: 10 }}
      >
        {title}
      </Typography.Title>
    </Flex>
  );
}
