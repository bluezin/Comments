import React, { useState } from "react";
import UserAvatar from "/app/assets/images/image-amyrobson.png";
import "../styles/InputComment.scss";

const InputComment = () => {
  const [newComment, setNewComment] = useState("");

  const handleComment = (event) => {
    setNewComment(event.target.value);
  };

  const handleSend = () => {
    if (newComment.trim() === "") return;

    console.log(newComment);
  };

  return (
    <div className="inputComment shadow">
      <figure className="user-avatar">
        <img src={UserAvatar} alt="user" />
      </figure>
      <textarea
        placeholder="Add comment..."
        className="textarea-comment"
        onChange={handleComment}
      />
      <button className="button-send" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default InputComment;
