import React from 'react';
import ChijikIcon from '../assets/icons/chizik-icon.png';
import DocmedIcon from '../assets/icons/doc-icon.png';
import FiveIcon from '../assets/icons/five-icon.png';
import KFCIcon from '../assets/icons/kfc-icon.png';
import LentaIcon from '../assets/icons/lenta-icon.png';
import SberIcon from '../assets/icons/sber-icon.png';
import TechnoIcon from '../assets/icons/tech-icon.png';
import VkusvillIcon from '../assets/icons/vkus-icon.png';
import YandexIcon from '../assets/icons/yandex-icon.png';
import Max from '../assets/images/companies/company-max.png';

import video from '../assets/video/max_nonda2.mp4';
// interface ExperienceShowcaseCardProps {
//     title: string;
//     image: any;
// }

// const cards = [
//     { title: "Яндекс", image: YandexIcon },
//     { title: "Сбер", image: SberIcon },
//     { title: "Вкусвилл", image: VkusvillIcon },
//     { title: "Пятёрочка", image: FiveIcon },
//     { title: "KFC", image: KFCIcon },
//     { title: "ТЕХНОНИКОЛЬ", image: TechnoIcon },
//     { title: "Лента", image: LentaIcon },
//     { title: "Чижик", image: ChijikIcon },
//     { title: "Doc med", image: DocmedIcon }
// ];

// const ExperienceShowcaseCard: FC<ExperienceShowcaseCardProps> = ({ title, image }) => {
// return (
// <span className="flex items-center justify-center mx-1">
//     <img src={image} alt={title} className='w-8 h-8 object-contain mr-2' />
//     <p className='font-[500] text-[28px] leading-[28px] -tracking-[4%]'>{title}</p>
// </span>
// <span className="flex items-center justify-center mx-1">
//     <img src={image} alt={title} className='w-8 h-8 object-contain mr-2' />
//     <p className='font-[500] text-[28px] leading-[28px] -tracking-[4%]'>{title}</p>
// </span>
// <div className="flex items-center justify-center mx-2">
//     <img src={image} alt={title} className='w-12 h-12 object-contain' />
//     <p className='font-[500] text-[28px] leading-[28px] -tracking-[4%]'>{title}</p>
// </div>
<></>
// );
// };

const ExperienceShowcase: React.FC = () => {
    // return (
    //     <div className='mt-14 md:mt-28'>
    //         <h1 className="flex flex-row items-end flex-wrap font-[700] text-[56px] md:text-[90px] leading-[53.2px] md:leading-[72px] -tracking-[3px] md:-tracking-[0.06em]">
    //             Эфир создан<br />на основе рабочего <span className='flex'>опыта студии <span className='flex'><img src={Max} alt="MAX" className="w-[51px] h-[51px] md:w-[70px] md:h-[70px] rounded-[20.71px] mx-3" />MAX</span></span>
    //         </h1>


    //         <div className="mt-8">
    //             <p className='md:hidden font-[500] text-[28px] leading-[28px] -tracking-[0.04em]'>Среди клиентов</p>
    //             <p className='max-md:hidden font-[500] text-[28px] leading-[28px] -tracking-[0.04em]'>Клиенты студии это</p>
    //             <span className='space-y-2'>
    //                 {cards.map((card, index) => (
    //                     <ExperienceShowcaseCard key={index} {...card} />
    //                 ))}
    //             </span>
    //         </div>

    //         <div className="rounded-lg overflow-hidden mt-8">
    //             <img src={Concept} alt="Mockup" className="w-full" />
    //         </div>
    //     </div>
    // );

    {/* <div className="flex flex-row flex-wrap items-center mt-8">
                <p className='font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4'>Среди клиентов:</p>
                <div className="flex flex-row items-center space-x-2">
                    {cards.map((card, index) => (
                        <ExperienceShowcaseCard key={index} {...card} />
                    ))}
                </div>
            </div> */}
    {/* 
            <div className="flex flex-row items-center">
                <p className='font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4'>Клиенты студии это</p>
                <div className="flex flex-row items-center">
                    {cards.map((card, index) => (
                        <ExperienceShowcaseCard key={index} {...card} />
                    ))}
                </div>
            </div> */}

    return (
        <div className='mt-14 md:mt-28'>
            <h1 className="max-md:hidden flex flex-row items-end flex-wrap font-[700] text-[56px] md:text-[90px] leading-[53.2px] md:leading-[72px] -tracking-[3px] md:-tracking-[0.06em]">
                Эфир создан<br />на основе рабочего <span className='flex'>опыта студии <span className='flex'><img src={Max} alt="MAX" className="w-[51px] h-[51px] md:w-[70px] md:h-[70px] rounded-[20.71px] mx-3" />MAX</span></span>
            </h1>

            <h1 className="md:hidden flex flex-row items-end flex-wrap font-[700] text-[56px] md:text-[90px] leading-[53.2px] md:leading-[72px] -tracking-[3px] md:-tracking-[0.06em]">
                Эфир создан<br />на основе рабочего <span className='flex'>опыта студии</span>
                <span className='flex'><img src={Max} alt="MAX" className="w-[51px] h-[51px] md:w-[70px] md:h-[70px] rounded-[20.71px] mr-3" />MAX</span>
            </h1>

            <div className='max-md:hidden'>
                <div className='flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center mt-8'>Клиенты студии это
                    <span className="flex items-center"><img src={YandexIcon} className='mx-2' />Яндекс</span>
                    <span className="flex items-center"><img src={SberIcon} className='mx-2' />Сбер</span>
                    <span className="flex items-center"><img src={VkusvillIcon} className='mx-2' />Вкусвилл</span>
                </div>

                <div className='flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center my-1'>
                    <span className="flex items-center"><img src={FiveIcon} className='mr-2' />Пятёрочка</span>
                    <span className="flex items-center"><img src={KFCIcon} className='mx-2' />KFC</span>
                    <span className="flex items-center"><img src={TechnoIcon} className='mx-2' />ТЕХНОНИКОЛЬ</span>
                </div>

                <div className='flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center my-1'>
                    <span className="flex items-center"><img src={LentaIcon} className='mr-2' />Лента</span>
                    <span className="flex items-center"><img src={ChijikIcon} className='mx-2' />Чижик</span>
                    <span className="flex items-center"><img src={DocmedIcon} className='mx-2' />Doc med</span>
                </div>
            </div>

            <div className='md:hidden flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center mt-8 space-y-1'>Клиенты студии это
                <span className="flex items-center mr-2"><img src={YandexIcon} className='mr-2' />Яндекс</span>
                <span className="flex items-center mr-2"><img src={SberIcon} className='mr-2' />Сбер</span>
                <span className="flex items-center mr-2"><img src={VkusvillIcon} className='mr-2' />Вкусвилл</span>
                <span className="flex items-center mr-2"><img src={FiveIcon} className='mr-2' />Пятёрочка</span>
                <span className="flex items-center mr-2"><img src={KFCIcon} className='mr-2' />KFC</span>
                <span className="flex items-center mr-2"><img src={TechnoIcon} className='mr-2' />ТЕХНОНИКОЛЬ</span>
                <span className="flex items-center mr-2"><img src={LentaIcon} className='mr-2' />Лента</span>
                <span className="flex items-center mr-2"><img src={ChijikIcon} className='mr-2' />Чижик</span>
                <span className="flex items-center mr-2"><img src={DocmedIcon} className='mr-2' />Doc med</span>
            </div>

            <div className="rounded-[30px] overflow-hidden mt-8">
                <video src={video} className="w-full rounded-[30px]" autoPlay muted />
            </div>
        </div>
    );
};

export default ExperienceShowcase;