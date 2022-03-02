import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./components/Comment";
import InputComment from "./components/InputComment";
import "/app/assets/stylesheets/App.scss";

const App = () => {
  const [comments, setComments] = useState([]);
  const [reply, setReply] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/comments").then((data) => {
      setComments(data.data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="App">
      <h1 className="title">Feedback with Ruby on Rails</h1>
      {comments &&
        !loading &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            likeComment={comment.like}
            user={comment.user}
            content={comment.content}
            createComment={comment.created_at}
            reply={reply}
            setReply={setReply}
          />
        ))}
      {reply && <InputComment setComments={setComments} />}
    </section>
  );
};

export default App;
