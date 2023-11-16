import React from "react";

class Table extends React.Component {
  render() {
    return (
      <>
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
                    this.props.data.title ||
                    this.props.data.estimation ||
                    this.props.data.description
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
                    onClick={() => this.props.handleEdit(index)}
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
      </>
    );
  }
}

export default Table;
