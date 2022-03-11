import React, { useState } from "react";
import "./Todo.css";

import { addTodo, deleteTodo, removeTodo } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.reducers.list);
  return (
    <>
      <div className="container">
        <h1>Add Your List</h1>
        <button className="del-all" onClick={() => dispatch(removeTodo())}>
          Delete All
        </button>
        <br />
        <br />
        <div className="todo_section">
          <input
            style={{ color: "#fff" }}
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <button
            onClick={() => {
              dispatch(addTodo(todo), setTodo(""));
            }}
          >
            +
          </button>
        </div>

        <br />
        <br />

        {list.map((elen) => {
          return (
            <div className="todo_item" key={elen.id}>
              <p>{elen.data}</p>
              <button
                onClick={() => {
                  dispatch(deleteTodo(elen.id));
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
