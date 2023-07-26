import { TbPencilMinus } from 'react-icons/tb';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Submit() {
  return (
    <button
      className="w-full h-[63px] bg-[#13BD7E] rounded-xl border-2 border-black text-white"
      onClick={() => window.alert('벌써 누르면 어떡해! 아직 안만들었는뎅')}
      type="button"
    >
      제출하기
    </button>
  );
}

export default Submit;
