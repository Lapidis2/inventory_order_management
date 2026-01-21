import { Pool } from "pg"

const pool=new Pool({
    host:'localhost',
    user:'myPostgresDatabase',
    password:process.env.DB_PASSWORD,
    database:"inventory_management",
    port:5432,
})
export default pool;