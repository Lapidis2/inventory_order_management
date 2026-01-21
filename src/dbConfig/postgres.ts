import { Pool } from "pg"

const pool=new Pool({
    host:'localhost',
    user:'postgres',
    password:'hitayezu123',
    database:"inventory_management",
    port:5432,
})
export default pool;