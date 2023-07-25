import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className="">
      <p>Hello! Its ME</p>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
