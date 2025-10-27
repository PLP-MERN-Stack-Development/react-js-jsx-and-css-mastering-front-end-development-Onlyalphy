import { useState, useEffect } from 'react';
import Card from './Card';

const APIData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated API call with MERN Stack learning resources
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mernPosts = [
        {
          id: 1,
          title: "Getting Started with MongoDB",
          description: "Learn the fundamentals of MongoDB, a NoSQL database that stores data in flexible, JSON-like documents. Perfect for building modern applications.",
          category: "Database",
          readTime: "8 min read",
          difficulty: "Beginner",
          topics: ["MongoDB", "NoSQL", "Database Design", "CRUD Operations"],
          icon: "🍃",
          color: "green"
        },
        {
          id: 2,
          title: "Building REST APIs with Express.js",
          description: "Master Express.js to create robust backend APIs. Learn routing, middleware, error handling, and best practices for RESTful API design.",
          category: "Backend",
          readTime: "12 min read",
          difficulty: "Intermediate",
          topics: ["Express.js", "REST API", "Node.js", "Middleware"],
          icon: "🚂",
          color: "yellow"
        },
        {
          id: 3,
          title: "React Hooks and State Management",
          description: "Dive deep into React Hooks including useState, useEffect, useContext, and custom hooks. Build dynamic and interactive user interfaces.",
          category: "Frontend",
          readTime: "15 min read",
          difficulty: "Intermediate",
          topics: ["React", "Hooks", "State Management", "Components"],
          icon: "⚛️",
          color: "blue"
        },
        {
          id: 4,
          title: "Node.js Fundamentals and Async Programming",
          description: "Understand Node.js event loop, asynchronous programming, promises, and async/await. Build scalable server-side applications.",
          category: "Backend",
          readTime: "10 min read",
          difficulty: "Beginner",
          topics: ["Node.js", "Async/Await", "Promises", "Event Loop"],
          icon: "🟢",
          color: "green"
        },
        {
          id: 5,
          title: "Full MERN Stack Project: Todo App",
          description: "Build a complete full-stack application from scratch. Connect MongoDB, Express, React, and Node.js to create a production-ready todo application.",
          category: "Full Stack",
          readTime: "25 min read",
          difficulty: "Advanced",
          topics: ["MERN", "Full Stack", "Authentication", "Deployment"],
          icon: "🚀",
          color: "purple"
        }
      ];
      
      setPosts(mernPosts);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  };

  if (loading) {
    return (
      <Card title="MERN Stack Learning Resources">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card title="MERN Stack Learning Resources">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        🎓 Curated learning resources for mastering the MERN Stack
      </p>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 border-2 border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-500 transition-all dark:border-gray-700 dark:hover:border-blue-500"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{post.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.category}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${difficultyColors[post.difficulty]}`}>
                {post.difficulty}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg font-medium"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ⏱️ {post.readTime}
              </span>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                Start Learning →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h4 className="font-bold text-gray-900 dark:text-white mb-2">
          📚 Learning Path
        </h4>
        <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-decimal list-inside">
          <li>Start with MongoDB basics</li>
          <li>Learn Node.js and async programming</li>
          <li>Build APIs with Express.js</li>
          <li>Master React and frontend development</li>
          <li>Combine everything in a full-stack project</li>
        </ol>
      </div>
    </Card>
  );
};

export default APIData;