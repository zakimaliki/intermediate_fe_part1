export const todoAction = (data) =>{
    const dateCreate = new Date().toLocaleDateString()
    const result ={
        todos : data,
        createAt: dateCreate
    }
    return {
        type:"TODO",
        payload:result.todos
    }
} 