# PLP Task Manager

A modern, responsive React application built with Vite, React, and Tailwind CSS. Features task management, API integration, and dark mode support.

## 🚀 Features

- ✅ **Task Management**: Add, complete, delete, and filter tasks
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 🔍 **API Integration**: Fetch and search posts from JSONPlaceholder
- 📄 **Pagination**: Navigate through API results
- 💾 **Local Storage**: Persist tasks between sessions
- 📱 **Responsive Design**: Works on mobile, tablet, and desktop

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - useState, useEffect, useContext
- **Context API** - Global state management for theme
- **JSONPlaceholder API** - Mock REST API for testing

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-js-jsx-and-css-mastering-front-end-development-Onlyalphy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure
```
src/
├── components/
│   ├── Button.jsx       # Reusable button component
│   ├── Card.jsx         # Card container component
│   ├── Navbar.jsx       # Navigation bar with theme toggle
│   ├── Footer.jsx       # Footer with links
│   ├── TaskManager.jsx  # Task management component
│   └── APIData.jsx      # API data display component
├── context/
│   └── ThemeContext.jsx # Theme context provider
├── hooks/
│   └── useLocalStorage.js # Custom localStorage hook
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## 🎯 Components Overview

### Button Component
Reusable button with multiple variants (primary, secondary, danger, success) and sizes (sm, md, lg).

### Card Component
Container component for displaying content in a boxed layout with optional title and footer.

### TaskManager Component
Complete task management system with:
- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Active, Completed)
- Persist tasks in localStorage

### API Integration
Fetches data from JSONPlaceholder API with:
- Loading states
- Error handling
- Search functionality
- Pagination (6 posts per page)

## 🎨 Styling

The project uses Tailwind CSS with:
- Utility-first approach
- Dark mode support via `dark:` variants
- Responsive design with breakpoints (sm, md, lg)
- Custom animations and transitions

## 🧪 React Hooks Used

- **useState**: Managing component state
- **useEffect**: Side effects (API calls, localStorage)
- **useContext**: Global theme management
- **Custom Hook**: useLocalStorage for data persistence

## 📱 Responsive Design

The application is fully responsive:
- **Mobile**: < 640px - Single column layout
- **Tablet**: 640px - 1024px - Two column grid
- **Desktop**: > 1024px - Three column grid

## 📸 Screenshots

### Light Mode
![Light Mode](./screenshots/light-mode.png)

### Dark Mode
![Dark Mode](./screenshots/dark-mode.png)

### Task Manager
![Task Manager](./screenshots/task-manager.png)

### API Data Display
![API Data](./screenshots/api-data.png)

### Mobile View
![Mobile View](./screenshots/mobile-view.png)

## 🌐 Live Demo

[View Live Demo](your-deployment-url-here)

## 🚀 Deployment

This project can be deployed to:
- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your GitHub repo and deploy automatically
- **GitHub Pages**: Use `gh-pages` package to deploy

## 👤 Author

Your Name - [GitHub Profile](https://github.com/yourusername)

## 📄 License

This project is part of the Power Learn Project (PLP) curriculum.

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com)
- Power Learn Project (PLP)