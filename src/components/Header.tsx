import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-slate-100 fixed bottom-0 backdrop-blur w-screen px-5">
      <div className="flex text-black text-center place-content-between py-2">
        <div className="w-1/3">
          <BsFillPeopleFill size="25px" className="m-auto" />
          <p className="mx-auto text-sm ">Community</p>
        </div>
        <Link to="/" className="w-1/3">
          <AiFillHome size="25px" className="m-auto" />
          <p className="mx-auto text-sm">Complaint</p>
        </Link>
        <div className="w-1/3">
          <CgProfile size="25px" className="m-auto" />
          <p className="mx-auto text-sm">Profile</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
