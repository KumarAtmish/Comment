import React from "react";
import "./Input.css";
import { adminPassword } from "./Validation";

class Input extends React.Component {
  state = {
    comment: ""
  };
  componentDidMount = () => {
    console.log("Input CDM", this.props);
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log("Input CDU", this.props.prevProps);
    if (prevProps.editTodoData !== this.props.editTodoData) {
      this.setState({
        comment: this.props.editTodoData.comment
      });
    }
  };
  handleInput = (e) => {
    this.setState({
      comment: e.target.value
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row ">
            <div className="col-2 border border-primary">
              <h4>Profile</h4>
              {adminPassword.name}
            </div>
            {/* for textarea */}
            <div className="col-8 border border-warning">
              <div className="mb-3">
                <input
                  className="form-control border border-primary "
                  value={this.state.comment}
                  placeholder="Start a post"
                  onChange={(e) => this.handleInput(e)}
                />
                {/* button */}
                {!this.props.isEdit && (
                  <button
                    className="btn-get-started"
                    onClick={() => this.props.sendTodoFromInput(this.state)}
                  >
                    Post
                  </button>
                )}
                {this.props.isEdit && (
                  <button
                    className="btn-get-started"
                    onClick={() => this.props.sendTodoFromInput(this.state)}
                  >
                    Post
                  </button>
                )}
              </div>
            </div>
            <div className="col-2 border border-danger">3 of 3</div>
          </div>
        </div>
      </>
    );
  }
}
export default Input;
