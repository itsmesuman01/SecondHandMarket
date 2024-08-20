import React from "react";
import { useRouter } from "next/router";

const pageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <div>
      <h1> Dynamic routing page which value is: {pageNumber}</h1>
    </div>
  );
};

export default pageNo;
