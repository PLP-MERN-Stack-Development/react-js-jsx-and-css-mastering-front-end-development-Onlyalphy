import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import APIData from './components/APIData';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
        <Navbar />
        
        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              Welcome to PLP Task Manager
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              A modern React application built with Tailwind CSS, featuring task management and API integration</p>
          </div>

<TaskManager />
      <APIData />
    </main>

    <Footer />
  </div>
</ThemeProvider>
);
}
export default App;