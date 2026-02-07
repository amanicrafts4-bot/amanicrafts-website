import { getProducts } from "@/lib/product.queries"
import ProductTable from "./ProductTable"

export default async function ProductsPage() {
  const products = await getProducts()

  return <ProductTable products={products} />
}
