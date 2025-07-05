import React from 'react';
import Image from 'next/image';
import { FaClock, FaUser } from 'react-icons/fa';

type BlogPost = {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
};

type Props = {
  post: BlogPost;
};

const BlogCard = ({ post }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-blue-950 mb-3 line-clamp-2 group-hover:text-rose-600 transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <FaUser className="w-3 h-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;