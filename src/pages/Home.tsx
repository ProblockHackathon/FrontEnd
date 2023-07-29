import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageChange } from 'src/redux/Slices/page';
import ComplaintBlock from '@/components/ComplaintBlock';
import Block from '@/components/Block';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageChange({ curPage: 'Complaint' }));
  }, []);

  return (
    <div className="w-full px-5">
      <ComplaintBlock />
      <div className="my-4">
        <Block title="주목할 만한 민원" />
      </div>
      <Block title="실시간 인기 민원" />
    </div>
  );
}

export default Home;
