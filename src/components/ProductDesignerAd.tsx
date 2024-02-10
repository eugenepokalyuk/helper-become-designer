// import React from 'react';
// import Subtract from '../assets/icons/Subtract.png';
// const ProductDesignerAd: React.FC = () => {
//     const sad = <span className='absolute left-6 top-1 w-4 h-4'><img src={Subtract} alt="" className='w-4 h-4 object-cover' /></span>;
//     return (
//         <div className="rounded-lg text-white text-center">
//             <div>
//                 <p className='font-[500] text-[35px] leading-[35px] -tracking-[0.04em]'>12 февраля в 19:00</p>
//                 <p className='font-[500] text-[35px] leading-[35px] -tracking-[0.04em] opacity-[0.7]'>Бесплатный отрытый урок</p>
//             </div>
//             <h1 className="font-[700] text-[145px] leading-[116px] -tracking-[0.06em] my-10">Как стать дизайнером продукта</h1>
//             <p className="font-[500] text-[35px] leading-[35px] -tracking-[0.04em] pt-2 mb-[70px]">с нуля и зарабатывать 145 000₽/мес</p>

//             <button className="bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] font-[500] text-[52px] leading-[60px] -tracking-[-1.3px] px-[100px] py-[65px] hover:brightness-90 rounded-full transition duration-300 ease-in-out">
//                 Зарегистрироваться
//             </button>

//             <div className="max-w-[450px] mx-auto mt-[30px]">
//                 <p className='relative font-[700] text-[21px] leading-[23px] -tracking-[-0.67px] '>{sad} Будет полезно людям без опыта, начинающим и тем, кто хочет сменить направление</p>
//             </div>
//         </div>
//     );
// };

// export default ProductDesignerAd;
import React from 'react';
import Subtract from '../assets/icons/Subtract.png';

const ProductDesignerAd: React.FC = () => {
    return (
        <div className="rounded-lg text-white text-center mt-[4rem] mb-[120px] md:mb-[80px] md:mb-0">
            <div className="font-[500] text-[20px] md:text-[35px] leading-[22px] md:leading-[35px] -tracking-[0.04em]">
                <p>12 февраля в 19:00</p>
                <p className='opacity-70'>Бесплатный отрытый урок</p>
            </div>
            <h1 className="text-[60px] md:text-[145px] font-[700] leading-[48px] md:leading-[116px] -tracking-[0.06em] mt-[48px] mb-[26px]">
                Как стать дизайнером продукта
            </h1>
            {/* <p className="font-[500] text-[35px] leading-[35px] -tracking-[0.04em] pt-2 mb-[70px]">с нуля и зарабатывать 145 000₽/мес</p> */}
            <p className="font-[500] text-[20px] md:text-[35px] leading-[22px] md:leading-[35px] -tracking-[0.04em] pt-2 mb-[70px] w-[220px] mx-auto md:w-full">
                с нуля и зарабатывать 145 000₽/мес
            </p>

            <button className="bg-gradient-to-r from-[#4164FD] to-[#1C3ED2] font-[500] text-[25.65px] md:text-[52px] leading-[29.49pxpx] md:leading-[60px] -tracking-[-1.3px] -tracking-[0.65px] px-[50px] md:px-[100px] py-[30px] md:py-[65px] hover:brightness-90 rounded-full transition duration-300 ease-in-out">
                Зарегистрироваться
            </button>

            {/* <div className="max-w-xs md:max-w-sm lg:max-w-[450px] mx-auto mt-6 md:mt-10">
                <p className='relative text-sm md:text-base lg:text-[21px] leading-tight md:leading-snug lg:leading-[23px]'>{sad} Будет полезно людям без опыта, начинающим и тем, кто хочет сменить направление</p>
            </div> */}

            <div className="relative max-w-[350px] md:max-w-[450px] mx-auto mt-[30px] flex flex-row">
                <img src={Subtract} className='absolute w-4 h-4 object-contain left-3 md:left-6 md:top-1' />
                <p className='flex relative font-[700] text-[16px] md:text-[21px] leading-[17.6px] md:leading-[23px] -tracking-[-0.67px]'>Будет полезно людям без опыта, начинающим и тем, кто хочет сменить направление</p>
            </div>
        </div>
    );
};

export default ProductDesignerAd;