import {PoolClient } from "pg";
import { Productmodel } from "../Models/product.modal";
export const getProductById=async(
    client:PoolClient,
    productId:number,
):Promise<Productmodel| null>=>{
    const output=await client.query(
        'SELECT * FROM products WHERE id=$1',[productId]
    )
    return output.rows[0] || null
}
export const updateStock=async(
    Client:PoolClient,
    productId:number,
    newUpdatedStock:number,
):Promise<void>=>{
    await Client.query(
        'UPDATE products SET stock=$1 WHERE id=$2',[newUpdatedStock,productId]
    )
}