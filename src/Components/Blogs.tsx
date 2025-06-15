import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';


const Blogs = () => {
  const featuredBlogs = blogPosts.slice(0, 3);
  const recentPosts = blogPosts.slice(3);

  return (
    <div className="min-h-screen bg-gray-100">
      <div 
        className="relative py-24 px-6 text-center text-white overflow-hidden rounded-b-3xl bg-gradient-to-r from-rose-900/90 to-rose-600/90"
        style={{}}
      >
        
        <div className="relative z-10">
          <p className="text-sm font-semibold text-white mb-2">BLOGS</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-sm">Blogs on product management & user feedback</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">READ BY CATEGORY</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            <div className="flex-shrink-0 w-48 h-32 bg-gray-300 rounded-lg"></div>
            <div className="flex-shrink-0 w-48 h-32 bg-gray-300 rounded-lg"></div>
            <div className="flex-shrink-0 w-48 h-32 bg-gray-300 rounded-lg"></div>
            <div className="flex-shrink-0 w-48 h-32 bg-gray-300 rounded-lg"></div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">FEATURED BLOGS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogs.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
                <p className="text-xs text-gray-500 mb-1">{post.category} - {post.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">{post.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">RECENT POSTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full md:w-1/2 h-48 md:h-auto object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.summary}</p>
                  <Link className="text-sm underline text-rose-600 font-semibold mt-2 inline-block" to={`/blogs/${post.id}`}>Read more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
