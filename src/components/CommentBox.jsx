const CommentBox = (comment) => {
  return (
    <div key={comment.id}>
      <img src={comment.avatar} />
      <h5>{comment.user}</h5>
      <p>
        <small>{comment.text}</small>
      </p>
    </div>
  );
};

export default CommentBox;
