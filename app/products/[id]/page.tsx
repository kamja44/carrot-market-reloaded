async function getProduct() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
export default async function ProductDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProduct();
  return <span>Product Detail {id}</span>;
}
