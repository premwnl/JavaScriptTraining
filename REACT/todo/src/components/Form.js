import React from "react";
import Table from "./Table";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      title: "",
      estimation: "",
      description: "",
      editing: -1,
      isEmpty: { title: false, estimation: false, description: false },
    };
  }
  //setting inputs to state
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [this.state.isEmpty[e.target.name]]: false,
    });
  };
  // submit form and setting  table
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, estimation, description } = this.state;
    if (!title || !estimation || !description) {
      this.setState({
        isEmpty: {
          title: title ? false : true,
          estimation: estimation ? false : true,
          description: description ? false : true,
        },
      });
    } else {
      this.addTodo({ title, estimation, description });
      this.setState({ title: "", estimation: "", description: "" });
    }
  };
  //editing index set and update
  handleEdit = (index) => {
    this.state.editing = index;
    this.setState(this.state.todoList[index]);
  };
  //add item to table
  addTodo = (todo) => {
    //edited add
    if (this.state.editing != -1) {
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
    this.setState({
      isEmpty: {
        title: false,
        estimation: false,
        description: false,
      },
      editing: -1,
    });
  };
  //delete item
  handleDelete = (index) => {
    this.state.todoList.splice(index, 1);
    this.setState((prevState) => ({ todoList: [...prevState.todoList] }));
  };
  render() {
    return (
      <>
        <div className="form">
          <h1>ADD TODO</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            style={{
              border:
                this.state.isEmpty.title &&
                !this.state.title &&
                "2px solid red",
            }}
            className={
              this.state.isEmpty.title && !this.state.title
                ? "redPlaceHolder"
                : null
            }
          />
          <h5>
            {this.state.isEmpty.title && !this.state.title && "Enter Title"}
            &nbsp;
          </h5>
          <input
            type="number"
            placeholder="Estimation(hrs)"
            min={1}
            max={1000}
            name="estimation"
            value={this.state.estimation}
            onKeyDown={(e) =>
              (e.keyCode === 69 || e.keyCode === 190) && e.preventDefault()
            }
            onChange={this.handleChange}
            style={{
              border:
                this.state.isEmpty.estimation &&
                !this.state.estimation &&
                "2px solid red",
            }}
            className={
              this.state.isEmpty.estimation && !this.state.estimation
                ? "redPlaceHolder"
                : null
            }
          />
          <h5>
            {this.state.isEmpty.estimation &&
              !this.state.estimation &&
              "Enter Estimation hours"}
            &nbsp;
          </h5>
          <textarea
            type="text"
            placeholder="Description..."
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            style={{
              border:
                this.state.isEmpty.description &&
                !this.state.description &&
                "2px solid red",
            }}
            className={
              this.state.isEmpty.description && !this.state.description
                ? "redPlaceHolder"
                : null
            }
          />
          <h5>
            {this.state.isEmpty.description &&
              !this.state.description &&
              "Enter Description"}
            &nbsp;
          </h5>
          <button onClick={this.handleSubmit}>
            {this.state.editing == -1 ? "ADD" : "UPDATE"}
          </button>
        </div>
        {this.state.todoList.length && (
          <Table
            todoList={this.state.todoList}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            data={this.state}
          />
        )}
      </>
    );
  }
}
