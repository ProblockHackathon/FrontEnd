import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Select from 'react-select';
import Blank from '@/components/Blank';
import ComplaintBlock from '@/components/ComplaintBlock';
import Submit from '@/components/Submit';
import api from '@/api';

function WriteComplaint() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [part, setPart] = useState({ value: '', label: '' });
  const options = [
    { value: '대인관계', label: '대인관계' },
    { value: '수도', label: '수도' },
    { value: '번역', label: '번역' },
  ];

  function postapi() {
    api
      .post('/add', {
        part: part.value,
        title,
        text,
        user_id: 1,
      })
      .then(function (response) {
        if (response.data.code === 500) {
          console.log('성공');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function onClick() {
    postapi();
  }

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
          <Blank ph="제목을 입력해주세요" setText={setTitle} />
        </div>
        <div className="w-full h-[240px] mt-5 mb-4 ">
          <Blank ph="내용을 입력해주세요" setText={setText} />
        </div>

        <Select
          className="item"
          placeholder="카테고리를 정해주세요"
          onChange={() => setPart}
          options={options}
        />
      </div>

      <div className="w-full fixed bottom-[83px]">
        <div className="p-5">
          <Submit onClick={() => onClick} />
        </div>
      </div>
    </div>
  );
}

export default WriteComplaint;
