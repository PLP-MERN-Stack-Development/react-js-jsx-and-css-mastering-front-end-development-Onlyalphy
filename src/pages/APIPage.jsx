import APIData from '../components/APIData';

const APIPage = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          API Data Explorer
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Browse posts from JSONPlaceholder API
        </p>
      </div>
      <APIData />
    </>
  );
};

export default APIPage;