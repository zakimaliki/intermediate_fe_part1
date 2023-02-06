import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Counter = () => {
    const {count, email:emailAction} = useSelector((state)=>state);
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const handleIncrement=()=>{
        dispatch({type : "INCREMENT"})
    }
    const handleDecrement = () =>{
        dispatch({type : "DECREMENT"})
    }
    const handleRegister = () =>{
        dispatch({type:"EMAIL_CHANGE", payload:email})
        setEmail('')
    }

  return (
    <div>

        <button className='btn border' onClick={handleIncrement}>Increment</button>
        <button className='btn border' onClick={handleDecrement}>Decrement</button>
        <hr/>
        <input type="text" placeholder='masukan email' value={email} onChange={(e)=>setEmail(e.target.value)}/>        
        <button onClick={handleRegister}>Submit</button>
        <hr />
        <p>Email :{emailAction}</p>
        <p>Counter : {count}</p>
    </div>
  )
}

export default Counter