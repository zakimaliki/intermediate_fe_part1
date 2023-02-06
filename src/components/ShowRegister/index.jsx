import React from 'react';
import { useSelector } from 'react-redux';

const ShowRegister = () => {
    const {email} = useSelector((state)=>state.email)
  return (
    <div>
        <p>{email}</p>
    </div>
  )
}

export default ShowRegister;