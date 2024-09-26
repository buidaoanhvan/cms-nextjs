import Lorem from "@/components/lorem";
import { Suspense } from "react";
import { Skeleton } from "antd";

export default async function Home() {
  return (
    <Suspense fallback={<Skeleton active />}>
      <Lorem />
    </Suspense>
  );
}
