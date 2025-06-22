import BurgerDropdownMenu from "./BurgerDropdownMenu/BurgerDropdownMenu";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      {/* Transparent area around black header */}
      <div className="relative mx-auto max-w-[1450px] rounded-md bg-transparent px-[10px] pt-[10px] backdrop-blur-xs">
        {/* black header */}
        <div className="flex items-center justify-between rounded-md bg-black p-2 text-white">
          <button className="text-3xl">A.C.</button>

          <button className="rounded bg-[#00bcd4] px-2 py-1 font-medium text-black">
            Buy site
          </button>

          <div className="sm:hidden">
            <BurgerDropdownMenu />
          </div>

          <nav className="hidden sm:block">
            <ul className="flex gap-4">
              <li>About me</li>
              <li>Projects</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
