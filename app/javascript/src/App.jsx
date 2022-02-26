import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./components/Comment";
import "./styles/App.scss";

const App = () => {
  const [comments, setComments] = useState([]);
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
            user={comment.user}
            content={comment.content}
            createComment={comment.created_at}
            setComments={setComments}
          />
        ))}
    </section>
  );
};

export default App;
