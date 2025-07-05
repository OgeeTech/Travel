import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import BlogCard from './BlogCard';

const blogData = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    excerpt: "Discover breathtaking destinations off the beaten path that will leave you speechless.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    category: "Adventure",
    readTime: "5 min read"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg",
    title: "Budget Travel: How to See Europe for Under $50 a Day",
    excerpt: "Expert tips and tricks to explore Europe without breaking the bank.",
    author: "Mike Chen",
    date: "December 12, 2024",
    category: "Budget Travel",
    readTime: "7 min read"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg",
    title: "Solo Female Travel: Safety Tips and Best Destinations",
    excerpt: "Empowering women to explore the world safely and confidently.",
    author: "Emma Davis",
    date: "December 10, 2024",
    category: "Solo Travel",
    readTime: "6 min read"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg",
    title: "Digital Nomad Guide: Best Cities for Remote Work",
    excerpt: "Top destinations that combine great wifi, affordable living, and amazing experiences.",
    author: "Alex Rodriguez",
    date: "December 8, 2024",
    category: "Digital Nomad",
    readTime: "8 min read"
  }
];

const Blog = () => {
  return (
    <div id="blog" className="pt-20 pb-20">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Travel Stories & Tips" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {blogData.map((post, i) => (
            <div
              key={post.id}
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-all duration-300 font-medium">
            View All Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;