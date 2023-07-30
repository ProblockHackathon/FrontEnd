import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageChange } from 'src/redux/Slices/page';
import ComplaintBlock from '@/components/ComplaintBlock';
import Block from '@/components/Block';

function Community() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageChange({ curPage: 'Community' }));
  }, []);

  return (
    <div className="w-full px-5 pb-[80px]">
      <Block title="Best 글" category="Community" />
      <div className="my-4">
        <Block title="신규 글" category="Community" />
      </div>
      <Block title="여기 뭐적지" category="Community" />
    </div>
  );
}

export default Community;
