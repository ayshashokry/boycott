import Image from "next/image";
import React from "react";
export default function ProductCard({ product, classN }) {
  return (
    <div className={classN}>
      <Image
        style={{ width: "70%" }}
        height="150"
        width="150"
        src={`/images/products/${product.logo}`}
      />
      <h4>{product.name}</h4>
      {product.company && <h5>{product.company}</h5>}
    </div>
  );
}
