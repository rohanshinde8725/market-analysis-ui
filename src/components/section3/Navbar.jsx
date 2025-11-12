const Navbar = () => {
  return (
    <>
      <div className="w-full pt-10 pl-15 pr-15 flex justify-between uppercase">
        <h3 className="text-white py-2 px-3 rounded-full bg-black h-9 text-sm tracking-[2px] cursor-pointer">
          Market opportunity
        </h3>
        <button className="bg-gray-200 h-9 text-sm py-2 px-3 rounded-3xl tracking-[2px] cursor-pointer">
          digital banking platform
        </button>
      </div>
    </>
  ); 
};

export default Navbar;
