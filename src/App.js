import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'topics',
          element: <Home></Home>,
        },
        {
          path: 'statistics',
          element: <Home></Home>,
        },
        {
          path: 'blog',
          element: <Home></Home>,
        },
        {
          path: 'about',
          element: <Home></Home>,
        },
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}
      ></RouterProvider>

    </div>
  );
}

export default App;
