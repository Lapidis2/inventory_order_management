import pool from "../dbConfig/postgres";
import * as productStore from "../repositories/product.repository"
import * as orderStore from "../repositories/order.repository"


export const addOrder=async(
     productId:number,
     quantity:number
)=>{
    const client=await pool.connect();
    try {
        await client.query('BEGIN');
        const product= await productStore.getProductById(client,productId)
        if(!product) throw new Error('product not found in database');
        if(product.stock<quantity) throw new Error('You do not have enough products in this stock');
        await productStore.updateStock(client,productId,product.stock - quantity);
        await orderStore.createNewOrder(client,{productId,quantity,status:"order placed"});
        await client.query('COMMIT');
        return {message:"Order placed successfully!"}

    } 
    
    
    catch (error) {
        await client.query('ROLLBACK');
        throw error;
     
        
    }
       finally{
            client.release();
        }
}