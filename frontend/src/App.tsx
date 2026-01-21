import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [productId, setProductId] = useState('');
  const[quantity,setQuantity]=useState(1);
  const [message,setMessage]=useState('');
  const handlingOrder=async()=>{
    try {
      const response=await axios.post("http://localhost:5000/order",{
        productId,
        quantity
      })
      setMessage(response.data.message)
    } catch (error:any) {
      setMessage(`order failed:${error.response?.data?.message||error.message}`)
    }
  }
  return (
    <div className="App">
     <div style={{padding:"3rem"}}>
      <h1>Inventory order system</h1>
      <input type="text" value={productId} placeholder='enter product id' onChange={(e)=>setProductId(e.target.value)} />
      <input type="number" min="1" value={quantity} placeholder='enter quantity' onChange={(e)=>setQuantity(Number(e.target.value))} style={{marginRight:"1.2rem",width:"3.5rem"}} />
       <button onClick={handlingOrder}>Place Order</button>
       <p>{message}</p>
     </div>
    </div>
  );
}

export default App;
