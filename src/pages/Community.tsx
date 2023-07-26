import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageChange } from 'src/redux/Slices/page';

function Community() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageChange({ curPage: 'Community' }));
  }, []);

  return (
    <div className="w-full px-5">
      <p>Hello!</p>
    </div>
  );
}

export default Community;
