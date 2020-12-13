import React from "react";
import LikeButton from "./LikeButton";

class List extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">1 of 3</div>
          <div className="col-6">
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
                  <LikeButton />
                </div>
              );
            })}
          </div>
          <div className="col">3 of 3</div>
        </div>
      </div>
    );
  }
}
export default List;
