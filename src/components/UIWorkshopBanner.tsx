import React, { useEffect, useState } from 'react';
import LavkaGuidesImage from '../assets/images/lavka-guides.webp';
import CursorWe from '../assets/images/lavka/cursor_we.webp';
import CursorYou from '../assets/images/lavka/cursor_you.webp';
import LavkaImage from '../assets/images/lavka/lavka_screen.webp';

const UIWorkshopBanner: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const cursorClass = window.innerWidth > 425 ? (scrollY > 1500 ? 'animate-pop' : '') : (scrollY > 2200 ? 'animate-pop' : '');
    return (
        <>
            <div className="bg-white rounded-xl mt-[60px] md:mt-20">
                <div className='px-4 md:px-10 py-5 md:py-10'>
                    <h1 className='font-[700] text-[42px] md:text-[65px] leading-[40px] md:leading-[61.75px] -tracking-[3px] md:-tracking-[0.04em] md:max-w-[671px] mb-[10px]'>Вместе нарисуем Яндекс Лавку</h1>
                    <p className='font-[400] text-[16px] md:text-[24px] leading-[16px] md:leading-[24px] -tracking-[0.3px] md:-tracking-[0.5px] opacity-[32%] max-w-[400px] mb-[32px] md:mb-[70px]'>Вместе в прямом эфире с нуля соберём приложение «Лавки»</p>

                    <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative">
                        <img
                            src={LavkaImage}
                            alt="Yandex Lavka menu"
                            className="w-full h-auto"
                        />
                        <img
                            src={CursorYou}
                            alt="Cursor You"
                            className={`absolute w-[85px] md:w-[200px] h-auto top-[23%] md:top-[13rem] -left-[0%] md:-left-[4rem] cursor-you ${cursorClass} ${cursorClass ? 'animate-cursor-smooth-you' : ''}`}
                        />
                        <img
                            src={CursorWe}
                            alt="Cursor We"
                            className={`absolute w-[60px] md:w-[150px] h-auto top-[25%] md:top-[14rem] -right-[8%] md:-right-[6rem] cursor-we ${cursorClass} ${cursorClass ? 'animate-cursor-smooth-we' : ''}`}
                        />
                    </div>

                    <hr className='my-6 md:my-4' />

                    <div className='mt-8 md:mt-12'>
                        <p className="md:hidden font-[700] text-[28px] leading-[29.4px] -tracking-[0.04em]">И мы не только <span className='text-nowrap md:text-wrap'>порисуем,</span> <span className='text-nowrap md:text-wrap'>мы углубимся в самые</span> дебри, чтобы они вас тоже не пугали :)</p>
                        <p className="max-md:hidden font-[700] text-[38px] leading-[38px] -tracking-[0.04em] max-w-[600px]">И мы не только порисуем, <span className='text-nowrap'>мы углубимся</span> в самые дебри продуктового, чтобы они вас <span className='text-nowrap'>не пугали :)</span></p>
                    </div>
                </div>

                <div className="mx-auto mt-4 md:mt-0">
                    <img
                        src={LavkaGuidesImage}
                        alt="Yandex Lavka guides"
                        className="w-full md:w-1/2 mx-auto h-full"
                    />
                </div>
            </div>
        </>
    );
};

export default UIWorkshopBanner;