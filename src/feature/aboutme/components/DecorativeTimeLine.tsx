export function DecorativeTimeLine() {
  return (
    <div className="hidden md:flex flex-col items-center mx-8">
      <span className="w-[3px] h-15 bg-gradient-to-b from-primary to-teal-400"></span>
      <span className="w-3 h-3 bg-gradient-to-br from-primary to-teal-400 rounded-full border-2 border-white shadow-md shadow-primary/50 my-1"></span>
      <span className="w-[3px] h-15 bg-gradient-to-b from-teal-400 to-primary"></span>
      <span className="w-3 h-3 bg-gradient-to-br from-teal-400 to-primary rounded-full border-2 border-white shadow-md shadow-teal-400/50 my-1"></span>
      <span className="w-[3px] h-15 bg-gradient-to-b from-primary to-teal-400"></span>
    </div>
  );
}