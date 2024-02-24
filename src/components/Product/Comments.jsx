import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <div className="mt-4 space-y-4">
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
