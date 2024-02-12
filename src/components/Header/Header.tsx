import { FC } from 'react';
import Flag from '../../assets/images/flag.webp';
import { ReactComponent as Logo } from '../../assets/logo.svg';
interface HeaderProps {
  isScrolled: boolean;
}
const Header: FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <>
      <header className={`fixed py-[13px] px-[20px] pt-0 flex justify-between w-full z-30 ${isScrolled ? 'header-scrolled pt-3' : 'header-not-scrolled'}`}>
        <div className={`flex items-start ${isScrolled ? 'mt-0' : 'mt-3'}`}>
          <Logo className={`hover:cursor-pointer logo-animation ${isScrolled ? 'logo-dark' : 'logo-light'}`} />
        </div>

        {isScrolled && (
          <div className="flex items-center">
            <p className='font-[400] text-[14px] leading-[16.9px] mr-4'>15 февраля в 19:00</p>
            <a href="#event">
              <button className="bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] font-[400] text-[14px] leading-[16.8px] px-[12px] py-[5px] rounded-full transition duration-300 ease-in-out text-white">
                Записаться
              </button>
            </a>
          </div>
        )}
      </header>

      <div className='absolute top-0 right-8'>
        <img src={Flag} alt="flag object" className='w-[90px] h-[45px] md:w-full md:h-full' />
        <p className='absolute top-0 md:top-1.5 text-center p-[6px] md:p-3 font-[500] text-[8px] md:text-[14px] leading-[9px] md:leading-[15.82px] -tracking-[2%] grad bg-gradient-to-r from-[#49B4BC] via-[#96C794] via-[#BBD080] to-[#57C552] inline-block text-transparent bg-clip-text z-20'>Проект студии MAX. Топ 10 студий РФ (Tagline 2023)</p>
      </div>
    </>
  );
};

export default Header;