import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Input from "./Input";
import List from "./List";

class Home extends React.Component {
  state = {
    todos: [
      {
        comment: ""
      }
    ],

    isEdit: false,
    editTodoIndex: "",
    editTodoData: ""
  };
  addTodoToList = (todo) => {
    let newTodos = this.state.todos.slice();
    newTodos[this.state.editTodoIndex] = todo;
    if (this.state.isEdit) {
      this.setState((prevState) => ({
        todos: newTodos
      }));
    } else {
      this.setState({
        todos: [...this.state.todos, todo]
      });
    }
  };
  deleteTodoFromList = (index) => {
    let newTodos = this.state.todos.slice();
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
  };
  editTodoInList = (index) => {
    this.setState({
      isEdit: true,
      editTodoIndex: index,
      editTodoData: this.state.todos[index]
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <Input
          isEdit={this.state.isEdit}
          editTodoData={this.state.editTodoData}
          sendTodoFromInput={(todo) => this.addTodoToList(todo)}
        />
        <br />
        <List
          todos={this.state.todos}
          deleteTodo={(index) => this.deleteTodoFromList(index)}
          editTodo={(index) => this.editTodoInList(index)}
        />
      </div>
    );
  }
}
export default Home;
