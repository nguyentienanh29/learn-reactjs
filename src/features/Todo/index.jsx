import React, { useState } from "react";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  //STATE
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleTodoClick = (todo, idx) => {
    //clone 1 mãng mới từ mãng củ
    const newTodoList = [...todoList]; // dùng cú pháp toán tử spread để clone mãng củ qua cho mảng mới

    //togole state
    newTodoList[idx] = {
      ...newTodoList[idx], // đang gán giá trị của objet này cho biến
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    //update list
    setTodoList(newTodoList);
  };

  //show All truyền vào 1 hàm xử lý
  const handleShowAllClick = () => {
    setFilterStatus("all");
  };

  //show Completed
  const handleShowCompletedClick = () => {
    setFilterStatus("completed");
  };

  //show New
  const handleShowNewlClick = () => {
    setFilterStatus("new");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewlClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
