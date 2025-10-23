const CommentsList = ({ comments }) => (
  <div className="max-w-2xl mx-auto my-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
      Comments
    </h3>
    <div className="space-y-4">
      {comments.map((comment) => (
        <div
          key={`${comment.email}:${comment.text}`}
          className="text-black-bold p-4 rounded-lg shadow-sm border bg-gray-700 border-gray-100">
          <h4 className="ml-2 text-lg font-medium text-gray-900">{comment.email}</h4>
          <p className="text-black mt-2">{comment.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CommentsList;
