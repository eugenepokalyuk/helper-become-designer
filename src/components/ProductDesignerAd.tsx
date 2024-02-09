import React from 'react';
import Subtract from '../assets/icons/Subtract.png';
const ProductDesignerAd: React.FC = () => {
    const sad = <span className='absolute left-6 top-1 w-4 h-4'><img src={Subtract} alt="" className='w-4 h-4 object-cover' /></span>;
    return (
        <div className="rounded-lg text-white text-center">
            <div>
                <p className='font-[500] text-[35px] leading-[35px] -tracking-[0.04em]'>12 февраля в 19:00</p>
                <p className='font-[500] text-[35px] leading-[35px] -tracking-[0.04em] opacity-[0.7]'>Бесплатный отрытый урок</p>
            </div>
            <h1 className="font-[700] text-[145px] leading-[116px] -tracking-[0.06em] my-10">Как стать дизайнером продукта</h1>
            <p className="font-[500] text-[35px] leading-[35px] -tracking-[0.04em] pt-2 mb-[70px]">с нуля и зарабатывать 145 000₽/мес</p>

            <button className="bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] font-[500] text-[52px] leading-[60px] -tracking-[-1.3px] px-[100px] py-[65px] hover:brightness-90 rounded-full transition duration-300 ease-in-out">
                Зарегистрироваться
            </button>

            <div className="max-w-[450px] mx-auto mt-[30px]">
                <p className='relative font-[700] text-[21px] leading-[23px] -tracking-[-0.67px] '>{sad} Будет полезно людям без опыта, начинающим и тем, кто хочет сменить направление</p>
            </div>
        </div>
    );
};

export default ProductDesignerAd;