import { TbPencilMinus } from 'react-icons/tb';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

function ComplaintBlock() {
  return (
    <div className="w-full h-[83px] bg-[#13BD7E] my-10 rounded-xl border-2 border-black text-white">
      <Link
        to="/WriteComplaint"
        className="w-full h-full flex place-content-between px-5"
      >
        <div className="flex">
          <TbPencilMinus size="40px" className="my-auto text-black" />
          <p className="my-auto px-4 text-start text-xl">민원 작성하기</p>
        </div>
        <IoIosArrowForward size="36px" className="my-auto" />
      </Link>
    </div>
  );
}

export default ComplaintBlock;