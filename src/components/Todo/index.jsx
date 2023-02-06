import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../../configs/redux/actions/todoAction.jsx";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const {todos} = useSelector((state)=>state.todos)
  const handleClick = () => {
    dispatch(todoAction(todo));
    setTodo('');
  };
  console.log(todos);
  return (
    <div>
      <input type="text" placeholder="Input"  value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      <hr />
      {/* {todos}
        {todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))} */}
    </div>
  );
};

export default Todo;
