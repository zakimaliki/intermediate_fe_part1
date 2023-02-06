export const emailAction = (data) =>{
    // const dateCreate = new Date().toLocaleDateString
    const result ={
        email : data,
    }
    return {
        type:'EMAIL_CHANGE', payload:result.email

    }
} 