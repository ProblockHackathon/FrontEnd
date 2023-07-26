import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Item = styled.div<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? '#141414' : '#D9D9D9')};
`;

function Header() {
  const curPage = useSelector((state: any) => state.page.page);

  return (
    <div className="bg-slate-100 fixed bottom-0 backdrop-blur w-screen px-5">
      <div className="flex text-black text-center place-content-between py-2">
        <Link to="/Community" className="w-1/3">
          <Item isSelected={curPage === 'Community'}>
            <BsFillPeopleFill size="25px" className="m-auto" />
            <p className="mx-auto text-sm ">Community</p>
          </Item>
        </Link>
        <Link to="/" className="w-1/3">
          <Item isSelected={curPage === 'Complaint'}>
            <AiFillHome size="25px" className="m-auto" />
            <p className="mx-auto text-sm">Complaint</p>
          </Item>
        </Link>
        <Link to="/Profile" className="w-1/3">
          <Item isSelected={curPage === 'Profile'}>
            <CgProfile size="25px" className="m-auto" />
            <p className="mx-auto text-sm">Profile</p>
          </Item>
        </Link>
      </div>
    </div>
  );
}

export default Header;
