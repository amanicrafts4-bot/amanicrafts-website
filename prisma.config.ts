// prisma.config.ts
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // Force Prisma Migrate to use the DIRECT (unpooled) connection
    url: env('DIRECT_URL'), 
  },
  migrations: {
    path: 'prisma/migrations',
  },
})
