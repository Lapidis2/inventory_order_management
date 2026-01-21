import { Client, PoolClient } from "pg";
import { Productmodel } from "../Models/product.model";
export const getProductById=async(
    client:PoolClient,
    productId:number,
):Promise<Productmodel| null>=>{
    const output=await client.query(
        'SELECT * FROM products WHERE product_id=$1',[productId]
    )
    return output.rows[0] || null
}
export const updateStock=async(
    Client:PoolClient,
    productId:number,
    newUpdatedStock:number,
):Promise<void>=>{
    await Client.query(
        'UPDATE products SET stock=$1 WHERE product_id=$2',[newUpdatedStock,productId]
    )
}