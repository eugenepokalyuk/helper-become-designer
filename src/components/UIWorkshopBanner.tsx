import React from 'react';
import LavkaGuidesImage from '../assets/images/lavka-guides.png';
import LavkaImage from '../assets/images/lavka.png';
const UIWorkshopBanner: React.FC = () => {
    return (
        <div className="bg-white rounded-[40px] mt-[100px] px-[38px] py-[45px]">
            <div>
                <h1 className="font-[700] text-[65px] leading-[61.75px] -tracking-[0.04em] max-w-[670px] mb-5">Вместе нарисуем Яндекс Лавку</h1>
                <p className="font-[400] text-[24px] leading-[24px] -tracking-[0.5px] max-w-[420px] opacity-[32%] mb-2">Вместе в прямом эфире с нуля соберём приложение «Лавки»</p>
                <div>
                    <img src={LavkaImage} alt="yandex lavka menu" />
                </div>
            </div>

            <hr className='m-0 p-0' />

            <div className='mt-[34px]'>
                <p className="font-[700] text-[38px] leading-[38px] -tracking-[0.04em] max-w-[550px]">И мы не только порисуем, мы углубимся в самые дебри продуктового, чтобы они вас не пугали :)</p>
                <div>
                    <img src={LavkaGuidesImage} alt="yandex lavka menu" />
                </div>
            </div>
        </div>
    );
};

export default UIWorkshopBanner;