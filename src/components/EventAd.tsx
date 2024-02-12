import React, { useEffect, useState } from 'react';
import { ReactComponent as TelegramIcon } from '../assets/icons/tg-icon.svg';
import calendarImage from '../assets/images/calendar-image.png';
import calendarMobileImage from '../assets/images/calendar-mobile.png';

const EventAd: React.FC = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const cursorClass = window.innerWidth > 425 ? (scrollY > 5200 ? 'animate-pop' : '') : (scrollY > 5900 ? 'animate-pop' : '');

    return (
        <div className={`relative bg-[#ede7df] rounded-[30px] mt-[16rem] md:mt-[12rem] md:mt-24 p-4 `} id="event">
            <div className={`relative w-full z-10 h-[5rem] md:h-[18rem] ${cursorClass}`}>
                <img src={calendarImage} alt="Calendar" className="max-md:hidden absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[8rem] w-full h-auto object-contain z-10" />
                <img src={calendarMobileImage} alt="Calendar" className="md:hidden absolute top-[6rem] left-1/2 transform -translate-x-1/2 -translate-y-full w-[290px] max-w-lg h-auto object-contain z-10" />
            </div>

            <div className='relative flex flex-col w-full z-20 text-center'>
                <div className="max-md:hidden text-center mt-4 mb-4">
                    <h1 className="font-[700] md:text-[150px] md:leading-[124px] -tracking-[0.04em]">15 февраля <span className="text-blue-600">бесплатно</span></h1>
                </div>

                <div className="md:hidden flex justify-center text-center mt-0 mb-4">
                    <h1 className="font-[700] text-[70px] leading-[56px] -tracking-[0.07em]">15 фев <span className="text-blue-600">Бесплатно</span></h1>
                </div>

                <p className="font-[500] text-[16px] md:text-[32px] leading-[16px] md:leading-[32px] -tracking-[0.04em] text-center max-w-[620px] text-black/60 mx-auto">
                    Чтобы получить ссылку на эфир и ещё пару сюрпризов, залетай в нашего
                </p>

                <p className="flex items-center justify-center text-lg md:text-xl font-medium text-center max-w-md mx-auto mb-7 md:mb-[65px]">
                    <TelegramIcon className='w-3 h-3 md:w-5 md:h-5 mr-1 md:mr-2' /><a href="https://t.me/HelperTeleport_bot" className="text-blue-600 md:font-[500] text-[16px] md:text-[32px] -tracking-[0.3px] md:-tracking-[0.04em]">телеграм-бота</a>
                </p>

                <div className='pb-[100px]'>
                    <button className="bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] font-[500] text-[25.65px] md:text-[52px] leading-[29.49pxpx] md:leading-[60px] -tracking-[-1.3px] -tracking-[0.65px] px-[50px] md:px-[100px] py-[30px] md:py-[65px] rounded-full transition duration-300 ease-in-out custom-shadows text-white hover:from-[#3956e3] hover:to-[#173daf] transition duration-300 ease-in-out">
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventAd;