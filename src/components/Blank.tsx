type Blanktype = {
  ph: string;
};

function Blank({ ph }: Blanktype) {
  return (
    <textarea
      placeholder={ph}
      className="w-full h-full rounded-xl border-2 border-[#C4C4C4] px-5 pt-3"
    />
  );
}

export default Blank;
