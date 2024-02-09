import { FC } from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
interface HeaderProps {
  isScrolled: boolean;
}
const Header: FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed py-[13px] px-[20px] flex justify-between w-full z-20 ${isScrolled ? 'header-scrolled' : 'header-not-scrolled'}`}>
      <div className="flex items-center ">
        <Logo className={`hover:cursor-pointer logo-animation ${isScrolled ? 'logo-dark' : 'logo-light'}`} />
      </div>

      <div className="flex items-center ">
        <p className='font-[400] text-[14px] leading-[16.9px] mr-4'>12 февраля в 19:00</p>
        <button className="bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] font-[400] text-[14px] leading-[16.8px] px-[12px] py-[5px] hover:brightness-90 rounded-full transition duration-300 ease-in-out text-white">
          Записаться
        </button>
      </div>
    </header>
  );
};

export default Header;
