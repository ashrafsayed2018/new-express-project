const DATABASE_URL = process.env.DATABASE_URL
export default {
  schema: './db/schema.js',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: { url: DATABASE_URL },
}
4
