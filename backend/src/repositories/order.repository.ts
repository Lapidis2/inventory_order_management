import {  PoolClient } from "pg";
import { ordermodel } from "../Models/order.modal";

export const createNewOrder=async(
    client:PoolClient,
    order:ordermodel
):Promise<void>=>{
    await client.query(
        'INSERT INTO orders (product_id,quantity,status) VALUES ($1,$2,$3)',
        [order.productId,order.quantity,order.status] 
    );
};