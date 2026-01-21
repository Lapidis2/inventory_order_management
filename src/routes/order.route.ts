import { Router } from "express";
import { createOrder } from "../controllers/order.controller";
 const orderRouter=Router();
 orderRouter.post('/order',createOrder);
 export default orderRouter;