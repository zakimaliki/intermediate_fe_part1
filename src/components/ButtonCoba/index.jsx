import React from 'react'

const Button = ({color,children,valDua,valSatu,alert}) => {
  return (
    <div>
        {/* <button style={{color:color ? color : "blue"}} onClick={()=>alert("hallo ")}>{children} </button> */}
        <button style={{color:color ? color : "white"}}  className="btn btn-primary" onClick={alert}>{children} </button>
        <br />
        {valDua+valSatu}
    </div>
  )
}

export default Button