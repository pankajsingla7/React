import React, {  ChangeEvent, FormEvent } from "react";
import { AddTodo } from "./types";
import { render } from "react-dom";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

type NewTodoState = {
  newTodo: string; // like this
};


export class AddTodoForm<addTodo> extends React.Component<AddTodoFormProps, NewTodoState> {

  state: NewTodoState = {
    newTodo: "",
  };

   handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({newTodo : e.target.value});
    
  };

   handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    
    this.setState({newTodo : ""});
  };

  render() {
  return (
    <form>
      <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
      <button type="submit" onClick={this.handleSubmit}>
        Add Todo
      </button>
    </form>
  );
  }
};
