import Express = require("express");
import orderRouter from "./routes/order.route";
const app=Express();
app.use(Express.json());
app.use(orderRouter);
const port=5000
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})