import React from 'react';
import { ReactComponent as LightIcon } from '../assets/lightning.svg';

const ProductDesignerAd: React.FC = () => {
    return (
        <div className="rounded-lg text-white text-center mt-[1rem] mb-[120px] md:mb-[80px] md:mb-0">
            <div className="font-[500] text-[20px] md:text-[35px] leading-[22px] md:leading-[35px] -tracking-[0.04em]">
                <p>15 февраля в 19:00</p>
                <p className='opacity-70'>Бесплатный отрытый урок</p>
            </div>
            <h1 className="text-[60px] md:text-[145px] font-[700] leading-[48px] md:leading-[116px] -tracking-[0.06em] mt-[48px] mb-[26px]">
                Как стать дизайнером продукта
            </h1>
            <p className="font-[500] text-[20px] md:text-[35px] leading-[22px] md:leading-[35px] -tracking-[0.04em] pt-2 mb-[70px] w-[220px] mx-auto md:w-full">
                с нуля и зарабатывать 145 000₽/мес
            </p>

            <a href="#event">
                <button className="bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] font-[500] text-[25.65px] md:text-[52px] leading-[29.49pxpx] md:leading-[60px] -tracking-[-1.3px] -tracking-[0.65px] px-[50px] md:px-[100px] py-[30px] md:py-[65px] rounded-full transition duration-300 ease-in-out custom-shadows text-white hover:from-[#3956e3] hover:to-[#173daf] transition duration-300 ease-in-out">
                    Записаться
                </button>
            </a>

            <div className="relative max-w-[350px] md:max-w-[450px] mx-auto mt-[30px] flex flex-row">
                <LightIcon className='absolute w-4 h-4 svg-path-none object-contain left-3 md:left-6 md:top-1' />
                <p className='flex relative font-[700] text-[16px] md:text-[21px] leading-[17.6px] md:leading-[23px] -tracking-[-0.67px]'>Будет полезно людям без опыта, начинающим дизайнерам и тем, кто хочет сменить направление</p>
            </div>
        </div>
    );
};

export default ProductDesignerAd;