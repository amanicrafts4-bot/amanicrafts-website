import { getProducts } from "@/lib/product.queries"
import ProductTable from "./products/ProductTable"

export default async function ProductsPage() {
  const products = await getProducts()

  return <ProductTable products={products} />
}
