import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentsList from "../Components/CommentsList";
import AddCommentForm from "../Components/AddCommentForm";
import useUser from "../hooks/useUser";
import { getAuth, signOut } from "firebase/auth";


const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  //const [isLoading, setIsLoading] = useState(true);
  //const [error, setError] = useState(null);
  const { articleId } = useParams();

  const { user, isLoading } = useUser();


useEffect(() => {
  const loadArticleInfo = async () => {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token } : {};
    const response = await axios.get(
      `http://localhost:8000/api/articles/${articleId}`,
      { headers }
    );
    setArticleInfo(response.data);
  };

  loadArticleInfo();
}, [user, articleId]); // add user and articleId dependencies


  const article = articles.find((article) => article.name === articleId);//inter

  const handleLogout = async () => {
  const auth = getAuth();
  await signOut(auth);
  console.log(" User signed out");
};

  const addUpvotes = async () => {
  try {
    const token = user && await user.getIdToken();
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(
      `http://localhost:8000/api/articles/${articleId}/upvote`,
      null,
      { headers }
    );
    setArticleInfo(response.data);
  } catch (err) {
    console.error("Error upvoting:", err.response?.data || err.message);
    alert("Failed to upvote. Check the console for details.");
  }
};


  if (!article) {
    return <NotFoundPage />;
  }

  if (isLoading) {
    return <div className="text-center py-10">Loading article...</div>;
  }



  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        {article.title}
      </h1>

      <div className="flex items-center justify-center gap-4 mb-8">
        <p className="text-gray-600">
          This article has <span className="font-semibold text-amber-600">{articleInfo.upvotes}</span> upvotes
        </p>

  {user
  ? <button onClick={addUpvotes}>Upvote</button>
  : <button>Log in to upvote</button>}


      </div>

      <div className="prose max-w-none">
        {article.content.map((paragraph, i) => (
          <p key={i} className="mb-6 text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
{user ? (
  <AddCommentForm
    articleName={articleId}
    onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
  />
) : (
  <div className="mt-6 text-center">
    <button
      className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors font-medium"
      onClick={() => alert("Please log in to add a comment.")}
    >
      Login to Add a Comment
    </button>
  </div>
)}


      <div className="mt-12">
        <CommentsList comments={articleInfo.comments} />

      </div>
      <button
  onClick={handleLogout}
  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
>
  Logout
</button>

    </div>
  );
};

export default ArticlePage;
