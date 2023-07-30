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
    <div className="w-full h-[600px] flex flex-col gap-y-4 pt-4 px-5">
      <img src="/logo.png" className="fixed" alt="logo" />
      <h3 className="mx-auto text-[22px] font-bold">complaint</h3>
      <ComplaintBlock />
      <div>
        <Block title="주목할 만한 민원" category="Complaint" />
      </div>
      <Block title="실시간 인기 민원" category="Complaint" />
    </div>
  );
}

export default Home;
