import { useState } from "react";
import axios from "axios";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const { user } = useUser();

  const addComment = async () => {
    // 🛑 Check if inputs are empty
    if (!commentText.trim()) {
      alert("Please enter both your comment before submitting.");
      return; // Stop here — don’t send the request
    }

    try {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
      const response = await axios.post(
        `http://localhost:8000/api/articles/${articleName}/comments`,
        {
          email: name.trim(),
          text: commentText.trim(),
        }, {
          headers, 
        }
      );
      const updatedArticle = response.data;
      onArticleUpdated(updatedArticle);
      setName("");
      setCommentText("");

      // ✅ Show success alert
      alert("Comment added successfully!");
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment. Please try again later.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Add a Comment</h3>

      <div className="space-y-4">

        {user && <p>You are posting as {user.email}</p>}
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="comment"
          >
            Comment:
          </label>
          <textarea
            id="comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            cols="50"
            rows="4"
            placeholder="Write your comment..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={addComment}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default AddCommentForm;
