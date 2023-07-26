import { useRoutes } from 'react-router-dom';
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
      ],
    },
  ]);
  return element;
}

export default App;
