import { MainPage } from '../pages/main/page';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
]);