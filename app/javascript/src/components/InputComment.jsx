import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/InputComment.scss";

const InputComment = ({ setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [user, setUser] = useState({});

  const handleComment = (event) => {
    setNewComment(event.target.value);
  };

  const handleSend = () => {
    if (newComment.trim() === "") return;

    axios
      .post("http://localhost:3000/api/comments/create", {
        content: newComment,
      })
      .then((data) => setComments(data.data));
  };

  useEffect(() => {
    axios.get("/api/user").then((data) => {
      setUser(data.data);
    });
  }, []);

  return (
    <div className="inputComment shadow">
      <figcaption className="user-avatar">
        <img src={user.image_url} alt={user.name} />
      </figcaption>
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
