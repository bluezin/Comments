import React, { useState } from "react";
import Reply from "/app/assets/images/icon-reply.svg";
import moment from "moment";
import "/app/assets/stylesheets/Comment.scss";
import axios from "axios";

const Comment = ({
  id,
  user,
  likeComment,
  content,
  createComment,
  reply,
  setReply,
}) => {
  const [like, setLike] = useState(likeComment);

  const handleLike = () => {
    axios
      .post("/api/like", {
        id,
      })
      .then((data) => {
        setLike(data.data);
      });
  };

  return (
    <React.Fragment>
      <div className="shadow mt-10 rounded">
        <div className="flex">
          <button onClick={handleLike}>
            ❤️
            {like}
          </button>

          <div className="tab-comment">
            <div className="flex justify-between flex-wrap">
              <div className="flex user-comment gap-10 align-items">
                <figcaption>
                  <img src={user.image_url} alt={`${user.name}`} />
                </figcaption>
                <strong className="user-name">{user.name}</strong>
                <span className="comment-created">
                  {moment(createComment).format("LLL")}
                </span>
              </div>
              <button className="button-reply" onClick={() => setReply(!reply)}>
                <img src={Reply} alt="reply" />
                Reply
              </button>
            </div>

            <p className="comment-content">{content}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comment;
