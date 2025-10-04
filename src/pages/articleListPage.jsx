import articles from "./article-content";
import ArticleList from '../Components/ArticleList';
const articleListPage = () => {
    return (

     <div className="articles-container">
      <h1 className="text-3xl font-bold text-center">Articles</h1>
        <ArticleList articles={articles}/>
    </div>
    );
}

export default articleListPage;
