import React from 'react';
import { ReactComponent as TelegramIcon } from '../assets/icons/tg-icon.svg';
import calendarImage from '../assets/images/calendar-image.png';

const EventAd: React.FC = () => {
    return (
        <div className="relative bg-[#ede7df] rounded-[40px] flex flex-col items-center mt-60">
            <div className='relative w-full mt-60 mb-20'>
                <img src={calendarImage} alt="Calendar" className="absolute -bottom-40 w-full h-[32rem] object-contain rotate-[0deg]" />
            </div>

            <div className="text-center mb-4 z-10">
                <h1 className="font-[700] text-[180px] leading-[144px] -tracking-[0.06em]">15 февраля <div className="text-[#3154EB]">бесплатно</div></h1>
            </div>

            <p className="font-[500] text-[32px] leading-[32px] -tracking-[0.04em] text-center max-w-[620px] text-black/60">
                Чтобы получить ссылку на эфир и ещё пару сюрпризов, залетай в нашего
            </p>
            <p className="flex items-center font-[500] text-[32px] leading-[32px] -tracking-[0.04em] text-center max-w-[620px]"><TelegramIcon className='w-[20px] h-[17px] mr-4' /><a href="TELEGRAM_LINK" className="text-blue-600">телеграм-бота</a></p>

            <button className=" my-[65px] bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] font-[500] text-[52px] leading-[60px] -tracking-[-1.3px] text-white px-[100px] py-[65px] hover:brightness-90 rounded-full transition duration-300 ease-in-out">
                Зарегистрироваться
            </button>
        </div>
    );
};

export default EventAd;