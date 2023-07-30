import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '@/api';

function ViewComplaint() {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [data2, setData] = useState([]);
  function searchApi() {
    api
      .get(`/${id}`)
      .then(function (response) {
        setData(response.data[0]);
      })
      .catch(function (error) {
        console.log('실패');
      });
  }
  function delComp() {
    api
      .delete(`/${id}`)
      .then(function (response) {
        if (response.data.code === 500) {
          console.log('성공');
          navigate('/');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function addViews() {
    api
      .post(`api/${id}/views`)
      .then(function (response) {
        if (response.data.code === 500) {
          console.log('성공');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function addPros() {
    api
      .post(`api/${id}/total_pros`)
      .then(function (response) {
        if (response.data.code === 500) {
          console.log('성공');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function addCons() {
    api
      .post(`api/${id}/total_cons`)
      .then(function (response) {
        if (response.data.code === 500) {
          console.log('성공');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function voteAgatin() {
    window.alert('Already Vote!');
  }
  useEffect(() => {
    searchApi();
    addViews();
  }, []);

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
    vote: true,
    whichvote: false,
  };

  return (
    <div className="w-full">
      <div className="p-5">
        <div className="flex place-content-between">
          <button
            onClick={() => {
              navigate(-1);
            }}
            type="button"
          >
            <IoIosArrowBack size="24px" className="text-[#8B8B8B]" />
          </button>
          <button onClick={delComp} type="button" className="text-[13px]">
            삭제
          </button>
        </div>

        <div className="flex pt-5">
          <img
            src={data.profile}
            className="w-[30px] h-[30px]"
            alt="loading..."
          />
          <p className="text-[20px] font-bold px-1">{data.name}</p>
          {data.user === 0 ? (
            <span className="text-[20px] font-bold px-1">(Me)</span>
          ) : (
            <div />
          )}
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
        {data.vote ? (
          <div className="flex place-content-evenly">
            {data.whichvote ? (
              <button
                onClick={voteAgatin}
                type="button"
                className="p-4 w-[108px] h-[108px] bg-[#DDFFD1] rounded-full"
              >
                <img
                  src="/fillgood.png"
                  className="m-auto w-[45px] h-[45px]"
                  alt="loading..."
                />
                <p className="text-center text-[15px] text-[#13BD7E] pt-[6px]">
                  {data.pros}
                </p>
              </button>
            ) : (
              <button
                onClick={voteAgatin}
                type="button"
                className="p-4 w-[108px] h-[108px] bg-[#DDFFD1] rounded-full"
              >
                <img
                  src="/good.png"
                  className="m-auto w-[45px] h-[45px]"
                  alt="loading..."
                />
                <p className="text-center text-[15px] text-[#13BD7E] pt-[6px]">
                  {data.pros}
                </p>
              </button>
            )}
            {data.whichvote ? (
              <button
                onClick={voteAgatin}
                type="button"
                className="p-4 w-[108px] h-[108px] bg-[#FFECEC] rounded-full"
              >
                <img
                  src="/bad.png"
                  className="m-auto w-[45px] h-[45px]"
                  alt="loading..."
                />
                <p className="text-center text-[15px] text-[#FF8080] pt-[6px]">
                  {data.cons}
                </p>
              </button>
            ) : (
              <button
                onClick={voteAgatin}
                type="button"
                className="p-4 w-[108px] h-[108px] bg-[#FFECEC] rounded-full"
              >
                <img
                  src="/fillbad.png"
                  className="m-auto w-[45px] h-[45px]"
                  alt="loading..."
                />
                <p className="text-center text-[15px] text-[#FF8080] pt-[6px]">
                  {data.cons}
                </p>
              </button>
            )}
          </div>
        ) : (
          <div className="flex place-content-evenly">
            <button
              onClick={addPros}
              type="button"
              className="p-4 w-[108px] h-[108px] bg-[#DDFFD1] rounded-full"
            >
              <img
                src="/good.png"
                className="m-auto w-[45px] h-[45px]"
                alt="loading..."
              />
              <p className="text-center text-[15px] text-[#13BD7E] pt-[6px]">
                {data.pros}
              </p>
            </button>
            <button
              onClick={addCons}
              type="button"
              className="p-4 w-[108px] h-[108px] bg-[#FFECEC] rounded-full"
            >
              <img
                src="/bad.png"
                className="m-auto w-[45px] h-[45px]"
                alt="loading..."
              />
              <p className="text-center text-[15px] text-[#FF8080] pt-[6px]">
                {data.cons}
              </p>
            </button>
          </div>
        )}

        {data.user === 1 ? (
          <div />
        ) : (
          <div className="mx-auto text-center text-[12px] py-7">
            <p className="font-bold">버튼을 눌러 당신의 의견을 말해주세요!</p>
            <p className="text-[#7C7C7C]">
              한번 투표하면 다시 되돌릴 수 없습니다
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewComplaint;
