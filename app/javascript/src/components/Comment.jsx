import React, { useState } from "react";

const Comment = ({ user, content, createComment }) => {
  const [like, setLike] = useState(12);

  return (
    <section>
      <div>
        <button>
          ❤️
          {like}
        </button>
      </div>

      <div>
        <figure>
          <img src={user.image_url} alt={`${user.name}`} />
        </figure>
        <span>{createComment}</span>
        <button>Reply</button>
      </div>

      <p>{content}</p>
    </section>
  );
};

export default Comment;
