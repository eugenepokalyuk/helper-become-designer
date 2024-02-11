import React from 'react';
// import { ReactComponent as ChijikIcon } from '../assets/icons/chizhik-icon.svg';
// import { ReactComponent as DocmedIcon } from '../assets/icons/doc-icon.svg';
// import { ReactComponent as FiveIcon } from '../assets/icons/five-icon.svg';
// import { ReactComponent as KFCIcon } from '../assets/icons/kfc-icon.svg';
// import { ReactComponent as LentaIcon } from '../assets/icons/lenta-icon.svg';
// import { ReactComponent as SberIcon } from '../assets/icons/sber-icon.svg';
// import { ReactComponent as TechnoIcon } from '../assets/icons/tech-icon.svg';
// import { ReactComponent as VkusvillIcon } from '../assets/icons/vkus-icon.svg';
// import { ReactComponent as YandexIcon } from '../assets/icons/yandex-icon.svg';

import ChijikIcon from '../assets/icons/chizik-icon.png';
import SberIcon from '../assets/icons/sber-icon.png';
import YandexIcon from '../assets/icons/yandex-icon.png';
import FiveIcon from '../assets/images/companies/5chka.png';
import DocmedIcon from '../assets/images/companies/docmed.png';
import KFCIcon from '../assets/images/companies/kfc.png';
import LentaIcon from '../assets/images/companies/lenta.png';
import TechnoIcon from '../assets/images/companies/tn.png';
import VkusvillIcon from '../assets/images/companies/vkusvill.png';

import Max from '../assets/images/companies/company-max.png';

import video from '../assets/video/max_nonda2.mp4';
const ExperienceShowcase: React.FC = () => {
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
                    <span className="flex items-center"><img src={YandexIcon} className='mx-2 max-w-[46px] max-h-[46px]' />Яндекс</span>
                    <span className="flex items-center"><img src={SberIcon} className='mx-2 max-w-[46px] max-h-[46px]' />Сбер</span>
                    <span className="flex items-center"><img src={VkusvillIcon} className='mx-2 max-w-[46px] max-h-[46px]' />Вкусвилл</span>
                    {/* <span className="flex items-center"><YandexIcon className='mx-2 max-w-[46px] max-h-[46px]' />Яндекс</span> */}
                    {/* <span className="flex items-center"><SberIcon className='mx-2 max-w-[46px] max-h-[46px]' />Сбер</span> */}
                    {/* <span className="flex items-center"><VkusvillIcon className='mx-2 max-w-[46px] max-h-[46px]' />Вкусвилл</span> */}
                </div>

                <div className='flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center my-1'>
                    <span className="flex items-center"><img src={FiveIcon} className='mx-2 max-w-[46px] max-h-[46px]' />Пятёрочка</span>
                    <span className="flex items-center"><img src={KFCIcon} className='mx-2 max-w-[46px] max-h-[46px]' />KFC</span>
                    <span className="flex items-center"><img src={TechnoIcon} className='mx-2 max-w-[46px] max-h-[46px]' />ТЕХНОНИКОЛЬ</span>
                    {/* <span className="flex items-center"><FiveIcon className='mr-2' />Пятёрочка</span> */}
                    {/* <span className="flex items-center"><KFCIcon className='mx-2 max-w-[46px] max-h-[46px]' />KFC</span> */}
                    {/* <span className="flex items-center"><TechnoIcon className='mx-2 max-w-[46px] max-h-[46px]' />ТЕХНОНИКОЛЬ</span> */}
                </div>

                <div className='flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center my-1'>
                    <span className="flex items-center"><img src={LentaIcon} className='mx-2 max-w-[46px] max-h-[46px]' />Лента</span>
                    <span className="flex items-center"><img src={ChijikIcon} className='mx-2 max-w-[46px] max-h-[46px]' />Чижик</span>
                    <span className="flex items-center"><img src={DocmedIcon} className='mx-2 max-w-[46px] max-h-[46px]' />Doc med</span>
                    {/*                     
                    <span className="flex items-center"><LentaIcon className='mr-2' />Лента</span>
                    <span className="flex items-center"><ChijikIcon className='mx-2 max-w-[46px] max-h-[46px]' />Чижик</span>
                    <span className="flex items-center"><DocmedIcon className='mx-2 max-w-[46px] max-h-[46px]' />Doc med</span> */}
                </div>
            </div>

            <div className='md:hidden flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center mt-8 space-y-1'>Клиенты студии это
                <span className="flex items-center mr-2"><img src={YandexIcon} className='mr-2 max-w-[46px] max-h-[46px]' />Яндекс</span>
                <span className="flex items-center mr-2"><img src={SberIcon} className='mr-2 max-w-[46px] max-h-[46px]' />Сбер</span>
                <span className="flex items-center mr-2"><img src={VkusvillIcon} className='mr-2 max-w-[46px] max-h-[46px]' />Вкусвилл</span>
                <span className="flex items-center mr-2"><img src={FiveIcon} className='mr-2 max-w-[46px] max-h-[46px]' />Пятёрочка</span>
                <span className="flex items-center mr-2"><img src={KFCIcon} className='mr-2 max-w-[46px] max-h-[46px]' />KFC</span>
                <span className="flex items-center mr-2"><img src={TechnoIcon} className='mr-2 max-w-[46px] max-h-[46px]' />ТЕХНОНИКОЛЬ</span>
                <span className="flex items-center mr-2"><img src={LentaIcon} className='mr-2 max-w-[46px] max-h-[46px]' />Лента</span>
                <span className="flex items-center mr-2"><img src={ChijikIcon} className='mr-2 max-w-[46px] max-h-[46px]' />Чижик</span>
                <span className="flex items-center mr-2"><img src={DocmedIcon} className='mr-2 max-w-[46px] max-h-[46px]' />Doc med</span>
            </div>

            <div className="max-md:hidden rounded-[30px] overflow-hidden mt-8">
                <video src={video} className="w-full rounded-[30px]" autoPlay muted loop />
            </div>

            <div className="md:hidden rounded-[30px] overflow-hidden mt-8 w-full h-[580px]">
                <video src={video} className="w-auto h-full rounded-[30px]" autoPlay muted loop style={{
                    objectFit: 'cover',
                    transform: 'scale(1.5)'
                }} />
            </div>

        </div>
    );
};

export default ExperienceShowcase;