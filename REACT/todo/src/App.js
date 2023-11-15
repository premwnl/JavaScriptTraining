import React from "react";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      editing: -1,
    };
  }

  //add item to table
  addTodo = (todo) => {
    if (this.state.editing != -1) {
      ///editing submit
      let updatedTodo = this.state.todoList.filter(
        (item) => item != this.state.todoList[this.state.editing]
      );
      let firstSet = updatedTodo.slice(0, this.state.editing) || "[]";
      let lastSet =
        updatedTodo.slice(this.state.editing, updatedTodo.length) || "[]";
      this.setState(() => ({
        todoList: [...firstSet, todo, ...lastSet],
      }));
    } else {
      //normal add
      this.setState((prevState) => ({
        todoList: [...prevState.todoList, todo],
      }));
    }
    this.state.editing = -1;
  };

  //setting updating index
  updateTodo = (index) => {
    this.state.editing = index;
  };

  //delete item
  handleDelete = (index) => {
    this.state.todoList.splice(index, 1);
    this.setState((prevState) => ({ todoList: [...prevState.todoList] }));
  };
  render() {
    return (
      <>
        <Form
          addTodo={this.addTodo}
          updateTodo={this.updateTodo}
          todoList={this.state.todoList}
          editing={this.state.editing}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
