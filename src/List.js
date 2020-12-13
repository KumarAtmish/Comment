import React from "react";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => {
          return (
            <div key={index}>
              {todo.comment}
              <button
                className="btn btn-outline-warning"
                onClick={() => this.props.editTodo(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => this.props.deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    );
  }
}
export default List;
