import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pageChange } from 'src/redux/Slices/page';
import styled from 'styled-components';

const Item = styled.a<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? '#5BCFEE' : '#6B6B6B')};
`;

function Header() {
  const OnClickMenu = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const MenuData = (e.target as HTMLAnchorElement).hash;
    const IdMatchedPage = document.querySelector(MenuData);
    dispatch(pageChange({ curPage: MenuData.substring(1) }));
    IdMatchedPage?.scrollIntoView({ behavior: 'smooth' });
  };

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
