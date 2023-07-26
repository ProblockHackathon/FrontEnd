import { useRoutes } from 'react-router-dom';
import Community from './pages/Community';
import DefaultLayout from './pages/DefaultLayout';
import Home from './pages/Home';
import WriteComplaint from './pages/WriteComplaint';

function App() {
  const element = useRoutes([
    {
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/WriteComplaint',
          element: <WriteComplaint />,
        },
        {
          path: '/Community',
          element: <Community />,
        },
      ],
    },
  ]);
  return element;
}

export default App;
