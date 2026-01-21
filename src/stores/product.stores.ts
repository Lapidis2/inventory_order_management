import { Client, PoolClient } from "pg";
import { ProductModal } from "../Models/product.modal";
export const getProductById=async(
    client:PoolClient,
    productId:number,
):Promise<ProductModal| null>=>{
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