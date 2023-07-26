import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

function DefaultLayout() {
  return (
    <div>
      <Outlet />
      <Header />
    </div>
  );
}

export default DefaultLayout;
