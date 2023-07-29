import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Blank from '@/components/Blank';
import ComplaintBlock from '@/components/ComplaintBlock';
import Submit from '@/components/Submit';

function WriteComplaint() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <div className="p-5">
        <button
          onClick={() => {
            navigate(-1);
          }}
          type="button"
        >
          <IoIosArrowBack size="24px" className="text-[#8B8B8B]" />
        </button>
        <p className="text-2xl font-bold">민원 작성 </p>
        <div className="w-full h-[56px] mt-5 mb-4 ">
          <Blank ph="제목을 입력해주세요" />
        </div>
        <div className="w-full h-[240px] mt-5 mb-4 ">
          <Blank ph="내용을 입력해주세요" />
        </div>
      </div>

      <div className="w-full fixed bottom-[83px]">
        <div className="p-5">
          <Submit />
        </div>
      </div>
    </div>
  );
}

export default WriteComplaint;
