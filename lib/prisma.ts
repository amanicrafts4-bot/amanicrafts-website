import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing from your .env file");
}

// 1. Create a standard pg Pool with your Supabase URL
const pool = new Pool({ connectionString });

// 2. Initialize the Prisma PostgreSQL adapter
const adapter = new PrismaPg(pool);

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 3. Pass the adapter to the PrismaClient
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter, // This now handles the connection URL
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
