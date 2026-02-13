import { z } from "zod"

export const ProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().optional(),
  price: z.coerce.number().positive("Price must be greater than 0"),
  categoryId: z.string().uuid("Please select a valid category"),
  quantity: z.coerce.number().int().min(0, "Stock cannot be negative"),
  sizes: z.string().transform(val => val ? val.split(",").map(s => s.trim()) : []),
  colors: z.string().transform(val => val ? val.split(",").map(c => c.trim()) : []),
})
