import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import QuizAll from './components/QuizAll/QuizAll';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>,
        },
        {
          path: '/:quizId',
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizAll></QuizAll>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
      ]
    },
    {
      path: '*',
      element: <div>Page not found</div>
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
