import TaskManager from '../components/TaskManager';
import APIData from '../components/APIData';

const Home = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          Welcome to PLP Task Manager
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A modern React application built with Tailwind CSS, featuring task management and API integration
        </p>
      </div>

      <TaskManager />
      <APIData />
    </>
  );
};

export default Home;