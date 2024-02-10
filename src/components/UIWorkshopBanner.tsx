// import React from 'react';
// import LavkaGuidesImage from '../assets/images/lavka-guides.png';
// import LavkaImage from '../assets/images/lavka.png';
// const UIWorkshopBanner: React.FC = () => {
//     return (
//         <div className="bg-white rounded-[40px] mt-[100px] px-[38px] py-[45px]">
//             <div>
//                 <h1 className="font-[700] text-[65px] leading-[61.75px] -tracking-[0.04em] max-w-[670px] mb-5">Вместе нарисуем Яндекс Лавку</h1>
//                 <p className="font-[400] text-[24px] leading-[24px] -tracking-[0.5px] max-w-[420px] opacity-[32%] mb-2">Вместе в прямом эфире с нуля соберём приложение «Лавки»</p>
//                 <div>
//                     <img src={LavkaImage} alt="yandex lavka menu" />
//                 </div>
//             </div>

//             <hr className='m-0 p-0' />

//             <div className='mt-[34px]'>
//                 <p className="font-[700] text-[38px] leading-[38px] -tracking-[0.04em] max-w-[550px]">И мы не только порисуем, мы углубимся в самые дебри продуктового, чтобы они вас не пугали :)</p>
//                 <div>
//                     <img src={LavkaGuidesImage} alt="yandex lavka menu" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UIWorkshopBanner;
import React from 'react';
import LavkaGuidesImage from '../assets/images/lavka-guides.png';
import LavkaImage from '../assets/images/lavka.png';

const UIWorkshopBanner: React.FC = () => {
    return (
        <>
            <div className="bg-white rounded-xl mt-[60px] md:mt-20">
                <div className='px-4 md:px-10 py-5 md:py-10'>
                    <div>
                        <h1 className="font-[700] text-[42px] md:text-[65px] leading-[40px] md:leading-[61.75px] -tracking-[3px] md:-tracking-[0.04em] max-w-[320px] md:max-w-[670px] mb-[10px] md:mb-5">Вместе нарисуем Яндекс Лавку</h1>
                        <p className="font-[400] text-[16px] md:text-[24px] leading-[16px] md:leading-[24px] -tracking-[0.3px] md:-tracking-[0.5px] max-w-[280px] md:max-w-[420px] opacity-[32%] mb-2">Вместе в прямом эфире с нуля соберём приложение «Лавки»</p>
                        <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
                            <img src={LavkaImage} alt="Yandex Lavka menu" className="w-full h-auto" />
                        </div>
                    </div>

                    <hr className='my-6 md:my-4' />

                    <div className='mt-8 md:mt-12'>
                        <p className="md:hidden font-[700] text-[28px] leading-[29.4px] md:text-3xl leading-tight tracking-tight max-w-[295px] md:max-w-[550px]">И мы не только <span className='text-nowrap md:text-wrap'>порисуем,</span> <span className='text-nowrap md:text-wrap'>мы углубимся в самые</span> дебри, чтобы они вас тоже не пугали :)</p>
                        <p className="max-md:hidden font-[700] text-[28px] leading-[29.4px] md:text-3xl leading-tight tracking-tight max-w-[295px] md:max-w-[550px]">И мы не только порисуем, <span className='text-nowrap'>мы углубимся</span> в самые дебри продуктового, чтобы они вас <span className='text-nowrap'>не пугали :)</span></p>
                    </div>
                </div>

                <div className="mx-auto mt-4 md:mt-0">
                    {/* <div className="md:hidden mx-auto mt-4 md:mt-6"> */}
                    <img src={LavkaGuidesImage} alt="Yandex Lavka guides" className="w-full md:w-1/2 mx-auto h-full" />
                </div>
            </div>
        </>
    );
};

export default UIWorkshopBanner;