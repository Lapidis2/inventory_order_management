import { Request,Response } from "express";
import * as orderService from "../services/order.service";
export const createOrder=async(req:Request,res:Response)=>{
    try {
        const {productId,quantity}=req.body||{}
        const response=await orderService.addOrder(
            productId,
            quantity
        );
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({error:(error as Error).message});
        
    }
}