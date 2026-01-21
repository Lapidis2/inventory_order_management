import Express = require("express");
const app=Express();
app.use(Express.json());
const port=5000
app.listen(port,()=>{
    console.log(`server is running ati port ${port}`)
})