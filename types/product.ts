import { Product as PrismaBase, Category } from "../generated/prisma/client";

// This type combines the Base Product with the Category object from Prisma
export type PrismaProduct = PrismaBase & {
  category: Category;
};
