import React from "react";

import { initialTodos } from "./initialTodos";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";
import "./TodoListItem.css";

type MyState = {
  todos: Array<Todo>; // like this
};


class App<initialTodos> extends React.Component<Array<Todo>, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    todos: initialTodos,
  };

  toggleComplete: ToggleComplete = selectedTodo => {
    
    const updatedTodos = this.state.todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    this.setState({todos : updatedTodos});
  };

  addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
    this.setState({ todos: [...this.state.todos, { text: newTodo, complete: false }]})
    
  };

  render() {  return (
    <div className="center">
      <div>To do List</div>
      <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} />
      <AddTodoForm addTodo={this.addTodo} />
    </div>
  );
  }
};

export default App;
