const About = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        About PLP Task Manager
      </h2>
      
      <div className="space-y-4 text-gray-600 dark:text-gray-400">
        <p>
          This is a modern React application built as part of the Power Learn Project (PLP) curriculum,
          demonstrating mastery of React.js, JSX, and Tailwind CSS.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
          Technologies Used
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>React 18 with Hooks</li>
          <li>Vite for fast development</li>
          <li>Tailwind CSS for styling</li>
          <li>React Router for navigation</li>
          <li>Context API for state management</li>
          <li>JSONPlaceholder API for data</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
          Features
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Task management with local storage persistence</li>
          <li>API integration with search and pagination</li>
          <li>Dark mode support</li>
          <li>Fully responsive design</li>
          <li>Reusable component architecture</li>
        </ul>
      </div>
    </div>
  );
};

export default About;