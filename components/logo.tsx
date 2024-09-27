import { Flex, Image } from "antd";

export default function Logo({
  width,
  height,
}: {
  width: number;
  height: number;
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
    </Flex>
  );
}
