import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import Blank from '@/components/Blank';
import ComplaintBlock from '@/components/ComplaintBlock';
import Submit from '@/components/Submit';

function ViewComplaint() {
  const navigate = useNavigate();
  const data = {
    id: 1,
    part: '전기 서비스	',
    status: '접수',
    title: '전력 공급 장애',
    text: '오늘 아침부터 전기 공급이 멈췄습니다. 빨리 해결해주세요.',
    user: 0,
    name: 'Paul',
    date: '2023-07-27 12:00:00',
    view: 150,
    pros: 30,
    cons: 30,
    profile: '/avatar.png',
  };

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
        <div className="flex pt-5">
          <img
            src={data.profile}
            className="w-[30px] h-[30px]"
            alt="loading..."
          />
          <p className="text-[20px] font-bold px-1">{data.name}</p>
        </div>
        <div className="w-full h-[56px] mt-5 mb-4 ">
          <div className="bg-[#EFEFEF] w-full h-full text-black rounded-xl px-5 pt-3">
            {data.title}
          </div>
        </div>
        <div className="w-full h-[240px] mt-5 mb-4 ">
          <div className="bg-[#EFEFEF] w-full h-full text-black rounded-xl px-5 pt-3">
            {data.text}
          </div>
        </div>
        <div className="flex place-content-evenly">
          <div className="p-4 w-[108px] h-[108px] bg-[#DDFFD1] rounded-full">
            <img
              src="/good.png"
              className="m-auto w-[57px] h-[57px]"
              alt="loading..."
            />
            <p className="text-center text-[12px] text-[#13BD7E] pt-[6px]">
              공감해요
            </p>
          </div>
          <div className="p-4 w-[108px] h-[108px] bg-[#FFECEC] rounded-full">
            <img
              src="/bad.png"
              className="m-auto w-[57px] h-[57px]"
              alt="loading..."
            />
            <p className="text-center text-[12px] text-[#FF8080] pt-[6px]">
              별로에요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewComplaint;
