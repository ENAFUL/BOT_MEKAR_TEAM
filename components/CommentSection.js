// src/components/CommentSection.js
const CommentSection = ({ comments }) => {
  return (
    <div className="comments-container">
      {comments.map((comment, index) => (
        <div key={index} className={comment.isBot ? "bot-reply" : "user-comment"}>
          <strong>{comment.user}:</strong>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};
