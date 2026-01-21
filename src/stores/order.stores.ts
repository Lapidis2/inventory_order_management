import {  PoolClient } from "pg";
import { orderModal } from "../Models/order.modal";

export const createNewOrder=async(
    client:PoolClient,
    order:orderModal
):Promise<void>=>{
    await client.query(
        'INSERT INTO orders (product_id,quantity,status) VALUES ($1,$2,$3)',
        [order.productId,order.quantity,order.status] 
    );
};