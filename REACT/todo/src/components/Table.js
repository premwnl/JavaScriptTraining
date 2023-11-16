import React from "react";

export default class Table extends React.Component {
  render() {
    const tableContent = [
      { label: "Title", data: "title" },
      { label: "Estimation(hours)", data: "estimation" },
      { label: "Description", data: "description" },
    ];
    return (
      <>
        <table>
          <thead>
            <tr>
              {tableContent.map((item, index) => (
                <th key={index}>{item.label}</th>
              ))}
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
                {tableContent.map((item, index) => (
                  <td key={index}>{todo[item.data]}</td>
                ))}
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
