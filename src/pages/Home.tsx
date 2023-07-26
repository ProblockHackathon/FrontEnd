import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageChange } from 'src/redux/Slices/page';
import ComplaintBlock from '@/components/ComplaintBlock';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageChange({ curPage: 'Complaint' }));
  }, []);

  return (
    <div className="w-full px-5">
      <ComplaintBlock />
    </div>
  );
}

export default Home;
