  import { useParams } from "react-router-dom";
  import articles from "./article-content";
  import NotFoundPage from "./NotFoundPage";

  const ArticlePage = () => {
      const { articleId } = useParams(); // Correct: useParams is called at the top level of a component
      const article = articles.find(article => article.name === articleId);//interprete article name to articleId

      if(!article){
        return <NotFoundPage/>
      }
    return (
      <div>
          <h1 className="text-4xl font-bold text-center mt-5">{article.title}</h1>
      {article.content.map((paragraph ,i)=> (
          <p className="mt-10" key={i}>{paragraph}</p>
      ))};
      </div>
    );
  };

  export default ArticlePage;
