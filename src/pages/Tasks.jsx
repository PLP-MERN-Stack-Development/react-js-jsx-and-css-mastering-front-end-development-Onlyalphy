import TaskManager from '../components/TaskManager';

const Tasks = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          My Tasks
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your daily tasks efficiently
        </p>
      </div>
      <TaskManager />
    </>
  );
};

export default Tasks;