import { FC } from 'react';
import Flag from '../../assets/images/flag.png';
import { ReactComponent as Logo } from '../../assets/logo.svg';
interface HeaderProps {
  isScrolled: boolean;
}
const Header: FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed py-[13px] px-[20px] pt-0 flex justify-between w-full z-20 ${isScrolled ? 'header-scrolled pt-3' : 'header-not-scrolled'}`}>
      <div className={`flex items-start ${isScrolled ? 'mt-0' : 'mt-3'}`}>
        <Logo className={`hover:cursor-pointer logo-animation ${isScrolled ? 'logo-dark' : 'logo-light'}`} />
      </div>
      {isScrolled ? (
        <div className="flex items-center ">
          <p className='font-[400] text-[14px] leading-[16.9px] mr-4'>12 февраля в 19:00</p>
          <button className="bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] font-[400] text-[14px] leading-[16.8px] px-[12px] py-[5px] hover:brightness-90 rounded-full transition duration-300 ease-in-out text-white">
            Записаться
          </button>
        </div>
      ) : (
        <div className='relative'>
          <div>
            <img src={Flag} alt="" className='w-full h-full' />
            <p className='absolute top-0 text-center p-3 font-[500] text-[14px] leading-[15.82px] -tracking-[2%] grad bg-gradient-to-r from-[#49B4BC] via-[#96C794] via-[#BBD080] to-[#57C552] inline-block text-transparent bg-clip-text'>Проект студии MAX. Топ 10 студий РФ (Tagline 2023)</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
