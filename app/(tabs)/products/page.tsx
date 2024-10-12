import ListProduct from "@/components/list-products";
import ProductList from "@/components/prodcut-list";
import db from "@/lib/db";
import { Prisma } from "@prisma/client";

async function getInitialProducts() {
  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    take: 1,
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}

// 타입을 prisma가 알아서 반환함.
export type InitialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

export default async function Products() {
  const initialProduct = await getInitialProducts();
  return (
    // <div>
    <ProductList initialProducts={initialProduct} />
    // </div>
  );
}
