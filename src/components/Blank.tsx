type Blanktype = {
  ph: string;
};

function Blank({ ph }: Blanktype) {
  return (
    <textarea
      placeholder={ph}
      className="bg-[#EFEFEF] w-full h-full text-black rounded-xl px-5 pt-3"
    />
  );
}

export default Blank;
