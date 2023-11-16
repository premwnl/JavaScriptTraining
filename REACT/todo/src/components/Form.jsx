import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      estimation: "",
      description: "",
      isEmpty: false,
    };
  }
  //setting inputs to state
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.state.isEmpty = false;
  };
  // submit form and setting  table
  handleSubmit = (e) => {
    e.preventDefault();
    const { title, estimation, description } = this.state;
    if (!title || !estimation || !description) {
      this.setState({
        title: this.state.title,
        estimation: this.state.estimation,
        description: this.state.description,
        isEmpty: true,
      });
    } else {
      this.props.addTodo({ title, estimation, description });
      this.setState({ title: "", estimation: "", description: "" });
    }
  };
  //editing index set and update
  handleEdit = (index) => {
    this.props.updateTodo(index);
    this.setState(this.props.todoList[index]);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>ADD TODO</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            style={{
              border:
                this.state.isEmpty && !this.state.title && "2px solid red",
            }}
          />
          <h5>
            {this.state.isEmpty && !this.state.title && "Enter Title"}&nbsp;
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
                this.state.isEmpty && !this.state.estimation && "2px solid red",
            }}
          />
          <h5>
            {this.state.isEmpty &&
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
                this.state.isEmpty &&
                !this.state.description &&
                "2px solid red",
            }}
          />
          <h5>
            {this.state.isEmpty &&
              !this.state.description &&
              "Enter Description"}
            &nbsp;
          </h5>
          <button type="submit">{this.props.editing ? "UPDATE" : "ADD"}</button>
        </form>
        {this.props.todoList.length && (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Estimation (hours)</th>
                <th>Description</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {this.props.todoList?.map((todo, index) => (
                <tr
                  key={index}
                  style={{
                    pointerEvents:
                      this.state.title ||
                      this.state.estimation ||
                      this.state.description
                        ? "none"
                        : "all",
                  }}
                >
                  <td>{todo.title}</td>
                  <td>{todo.estimation}</td>
                  <td>{todo.description}</td>
                  <td>
                    <i
                      className="fa-solid fa-edit"
                      onClick={() => this.handleEdit(index)}
                    ></i>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => this.props.handleDelete(index)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
}

export default Form;
