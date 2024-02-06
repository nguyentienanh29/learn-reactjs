import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TodoList from "../../components/TodoList";

ListPage.propTypes = {};

function ListPage(props) {
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
  const location = useLocation();

  const navigate = useNavigate();

  const [todoList, setTodoList] = useState(initTodoList);

  const [filterStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    return params.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    console.log(params);
    setFilterStatus(params.status || "all");
  }, [location.search]);

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
    // setFilterStatus("all");
    const queryParams = { status: "all" };
    navigate({
      pathname: "",
      search: queryString.stringify(queryParams),
    });
  };

  //show Completed
  const handleShowCompletedClick = () => {
    // setFilterStatus("completed");
    const queryParams = { status: "completed" };
    navigate({
      pathname: "",
      search: queryString.stringify(queryParams),
    });
  };

  //show New
  const handleShowNewlClick = () => {
    // setFilterStatus("new");
    const queryParams = { status: "new" };
    navigate({
      pathname: "",
      search: queryString.stringify(queryParams),
    });
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

export default ListPage;
