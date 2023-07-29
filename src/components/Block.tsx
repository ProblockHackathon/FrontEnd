import { Link } from 'react-router-dom';

type Blanktype = {
  title: string;
};

function Block({ title }: Blanktype) {
  const data = [
    {
      id: 0,
      part: '전기 서비스	',
      status: '접수',
      title: '전력 공급 장애',
      text: '오늘 아침부터 전기 공급이 멈췄습니다. 빨리 해결해주세요.',
      user: 0,
      name: 'Steven',
      date: '2023-07-27 12:00:00',
      view: 150,
      pros: 30,
      cons: 30,
      profile: '/avatar.png',
    },
    {
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
    },
  ];

  return (
    <div className="w-full rounded-[19px] border p-3">
      <div className="flex place-content-between py-2">
        <p className="text-[18px] font-bold">{title}</p>
        <p className="text-[9px] align-bottom font-bold">더보기</p>
      </div>

      {data.map((content, idx) => (
        <Link to={`/ViewComplaint/${content.id}`} className="py-2">
          <div className="flex place-content-between">
            <div className="flex">
              <img
                src={content.profile}
                className="w-[17px] h-[17px]"
                alt="loading..."
              />
              <p className="text-[13px] font-bold px-1">{content.name}</p>
            </div>
            <div className="flex">
              <div className="flex w-[50px] h-[25px] bg-[#DDFFD1] rounded-lg px-1">
                <img
                  src="/good.png"
                  className="mx-1 my-auto w-[13px]"
                  alt="loading..."
                />
                <p className="my-auto text-[12px] text-[#13BD7E]">
                  {content.pros}
                </p>
              </div>
              <div className="flex w-[50px] h-[25px] bg-[#FFECEC] rounded-lg px-1 mx-2">
                <img
                  src="/bad.png"
                  className="mx-1 my-auto w-[13px]"
                  alt="loading..."
                />
                <p className="my-auto text-[12px] text-[#FF8080]">
                  {content.pros}
                </p>
              </div>
            </div>
          </div>
          <div className="py-2">
            <p className="text-[13px] font-bold">{content.title}</p>
            <p>{content.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Block;
