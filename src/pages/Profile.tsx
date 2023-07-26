import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageChange } from 'src/redux/Slices/page';

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageChange({ curPage: 'Profile' }));
  }, []);

  return (
    <div className="w-full px-5">
      <p>Profile!</p>
    </div>
  );
}

export default Profile;
