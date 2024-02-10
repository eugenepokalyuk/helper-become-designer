// import React from 'react';
// import { ReactComponent as TelegramIcon } from '../assets/icons/tg-icon.svg';
// import calendarImage from '../assets/images/calendar-image.png';

// const EventAd: React.FC = () => {
//     return (
//         <div className="relative bg-[#ede7df] rounded-[40px] flex flex-col items-center mt-60">
//             <div className='relative w-full mt-60 mb-20'>
//                 <img src={calendarImage} alt="Calendar" className="absolute -bottom-40 w-full h-[32rem] object-contain rotate-[0deg]" />
//             </div>

//             <div className="text-center mb-4 z-10">
//                 <h1 className="font-[700] text-[180px] leading-[144px] -tracking-[0.06em]">15 февраля <div className="text-[#3154EB]">бесплатно</div></h1>
//             </div>

//             <p className="font-[500] text-[32px] leading-[32px] -tracking-[0.04em] text-center max-w-[620px] text-black/60">
//                 Чтобы получить ссылку на эфир и ещё пару сюрпризов, залетай в нашего
//             </p>
//             <p className="flex items-center font-[500] text-[32px] leading-[32px] -tracking-[0.04em] text-center max-w-[620px]"><TelegramIcon className='w-[20px] h-[17px] mr-4' /><a href="TELEGRAM_LINK" className="text-blue-600">телеграм-бота</a></p>

//             <button className=" my-[65px] bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] font-[500] text-[52px] leading-[60px] -tracking-[-1.3px] text-white px-[100px] py-[65px] hover:brightness-90 rounded-full transition duration-300 ease-in-out">
//                 Зарегистрироваться
//             </button>
//         </div>
//     );
// };

// export default EventAd;
import React from 'react';
import { ReactComponent as TelegramIcon } from '../assets/icons/tg-icon.svg';
import calendarImage from '../assets/images/calendar-image.png';
import calendarMobileImage from '../assets/images/calendar-mobile.png';

const EventAd: React.FC = () => {
    return (
        <div className="relative bg-[#ede7df] rounded-[30px] mt-[16rem] md:mt-[12rem] md:mt-24 p-4">

            {/* <div className='relative w-full mt-60 mb-20'>
                <img src={calendarImage} alt="Calendar" className="absolute -bottom-40 w-full h-[32rem] object-contain rotate-[0deg]" />
            </div> */}

            <div className='relative w-full z-10 h-[5rem] md:h-[18rem]'>
                <img src={calendarImage} alt="Calendar" className="max-md:hidden absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[8rem] w-full h-auto object-contain" />
                <img src={calendarMobileImage} alt="Calendar" className="md:hidden absolute top-[6rem] left-1/2 transform -translate-x-1/2 -translate-y-full w-full max-w-lg h-auto object-contain" />
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
                    <TelegramIcon className='w-5 h-5 mr-2' /><a href="TELEGRAM_LINK" className="text-blue-600">телеграм-бота</a>
                </p>

                <button className='text-center font-[500] text-[25px] md:text-[52px] leading-[30px] md:leading-[60px] -tracking-[1.32px] px-[50px] py-[30px] md:px-[100px] md:py-[60px] bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] rounded-full md:mb-[100px] text-white md:scale-[80%]'>
                    Зарегистрироваться
                </button>
            </div>
        </div>
    );
};

export default EventAd;