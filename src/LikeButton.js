import React from "react";
import "./LikeButton.css";

class LikeButton extends React.Component {
  state = {
    likes: 0
  };

  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount
    });
  };

  render() {
    const likes = this.state.likes;
    if (likes === 0) {
      return (
        <div>
          <button className="button" onClick={this.addLike}>
            <i className="far fa-heart fa-lg">Likes</i>
          </button>
        </div>
      );
    }
    if (likes === 1) {
      return (
        <div>
          <button className="button" onClick={this.addLike}>
            <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>
          </button>
        </div>
      );
    }
    if (likes > 1) {
      return (
        <div>
          <button className="button" onClick={this.addLike}>
            <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>{" "}
            {likes}
          </button>
        </div>
      );
    }
  }
}
export default LikeButton;
