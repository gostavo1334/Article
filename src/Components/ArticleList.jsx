
import { Link } from 'react-router-dom';
const ArticleList = ({articles}) => {
  return (
    <>
      <h1>Articles</h1>
      {articles.map((article) => (
        <Link
          key={article.name}
          className="article-list-item"
          to={`/articles/${article.name}`}
        >
          <div key={article.id} className="article">
            <h2 className="font-bold">{article.title}</h2>
            <p>{article.content[0].substring(0, 100)}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ArticleList;