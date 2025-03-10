import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author /* {faker.name.firstName()} */}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default CommentDetail;
