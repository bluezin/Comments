import React, { useEffect, useState } from "react";
import axios from "axios";
import InputComment from "./components/InputComment";
import Comment from "./components/Comment";

const App = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/comments").then((data) => {
      setComments(data.data);
      setLoading(false);
      console.log(data.data);
    });
  }, []);

  return (
    <section>
      {comments &&
        !loading &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            user={comment.user}
            content={comment.content}
            createComment={comment.created_at}
          />
        ))}

      <InputComment />
    </section>
  );
};

export default App;
