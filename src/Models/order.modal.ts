export interface ordermodel{
    orderId?:number,
    productId:number,
    quantity:number,
    status:string,
    totalPrice?:number,
    createdAt?:Date
}