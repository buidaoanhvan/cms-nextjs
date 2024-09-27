"use client";

import { Pagination } from "antd";
import { useRouter } from "next/navigation";

export default function CutPagination({
  page,
  total,
}: {
  page: number;
  total: number;
}) {
  const router = useRouter();
  const handleNavigation = (page: number) => {
    router.push(`/phim/${page}`);
  };

  return (
    <div className="pt-10">
      <Pagination
        align="center"
        defaultCurrent={page}
        onChange={handleNavigation}
        total={total}
      />
    </div>
  );
}
