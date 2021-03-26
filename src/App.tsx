import React from "react"
import TodoList from "./components/TodoList";
import UserList from "./components/UserList"

const  App = () => {
  return (
    <div className="App">
       <UserList/>
       <TodoList/>
    </div>
  );
}

export default App;
