import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  author: string;
  image: string;
  content: string;
  category?: string;
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogPosts.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <Link to="/blogs" className="text-rose-900 underline">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <img src={blog.image} alt={blog.title} className="rounded-xl w-full h-72 object-cover mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="text-gray-500 text-sm mb-2">
            By {blog.author} | {blog.date}
          </div>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          <p className="text-lg mb-8">{blog.content}</p>
          <Link to="/blogs" className="text-rose-900 underline">← Back to Blogs</Link>
        </div>
        <div className="md:col-span-1">
          {/* You can add related posts or author info here later */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail; 