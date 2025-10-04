// NavBar.jsx
  // Uses React Router's Link component (capitalized) instead of the HTML <link> element.
  import { Link } from 'react-router-dom';

  const NavBar = () => {
    return (
    <nav className="bg-gray-800 text-white p-4 rounded-b-lg shadow-md mb-2">
      <div className="flex items-center space-x-6">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <span className="ml-2 text-lg font-semibold">Article</span>
        </div>
        <div className="flex space-x-8">
          <Link
            to="/"
            className="px-3 py-2 text-sm font-medium hover:bg-gray-700 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 py-2 text-sm font-medium hover:bg-gray-700 rounded-md"
          >
            About
          </Link>
          <Link
            to="/articles"
            className="px-3 py-2 text-sm font-medium hover:bg-gray-700 rounded-md"
          >
            Article
          </Link>
        </div>
      </div>
    </nav>
    );
  };

  export default NavBar;