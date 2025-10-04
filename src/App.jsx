import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutPage from './pages/aboutPage';
import ArticleListPage from './pages/articleListPage';
import ArticlePage from './pages/articlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-gray-600 mt-0">
        <div className="mx-auto max-w-5xl px-4">
          <NavBar />
          <main id="page-body" className="m-4 text-black">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles" element={<ArticleListPage />} />
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );};
export default App
