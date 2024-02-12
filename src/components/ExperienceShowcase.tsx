import React from 'react';
import ChijikIcon from '../assets/icons/chizik-icon.png';
import SberIcon from '../assets/icons/sber-icon.png';
import YandexIcon from '../assets/icons/yandex-icon.png';
import FiveIcon from '../assets/images/companies/company-5chka.webp';
import DocmedIcon from '../assets/images/companies/company-docmed.webp';
import KFCIcon from '../assets/images/companies/company-kfc.webp';
import LentaIcon from '../assets/images/companies/company-lenta.webp';
import Max from '../assets/images/companies/company-max.png';
import TechnoIcon from '../assets/images/companies/company-tn.webp';
import VkusvillIcon from '../assets/images/companies/company-vkusvill.webp';

import video from '../assets/video/max_nonda2.mp4';

const ExperienceShowcase: React.FC = () => {
    return (
        <div className='mt-14 md:mt-28'>
            <h1 className="max-md:hidden flex flex-row items-end flex-wrap font-[700] text-[56px] md:text-[90px] leading-[53.2px] md:leading-[72px] -tracking-[3px] md:-tracking-[0.06em]">
                Эфир создан<br />на основе рабочего <span className='flex'>опыта студии <span className='flex'><img src={Max} alt="MAX icon" className="w-[51px] h-[51px] md:w-[70px] md:h-[70px] rounded-[20.71px] mx-3" />MAX</span></span>
            </h1>

            <h1 className="md:hidden flex flex-row items-end flex-wrap font-[700] text-[56px] md:text-[90px] leading-[53.2px] md:leading-[72px] -tracking-[3px] md:-tracking-[0.06em]">
                Эфир создан<br />на основе рабочего <span className='flex'>опыта студии</span>
                <span className='flex'><img src={Max} alt="MAX icon" className="w-[51px] h-[51px] md:w-[70px] md:h-[70px] rounded-[20.71px] mr-3" />MAX</span>
            </h1>

            <div className='max-md:hidden'>
                <div className='flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center mt-8'>Клиенты студии это
                    <span className="flex items-center"><img src={YandexIcon} alt="yandex icon" className='mx-2 max-w-[46px] max-h-[46px]' />Яндекс</span>
                    <span className="flex items-center"><img src={SberIcon} alt="sber icon" className='mx-2 max-w-[46px] max-h-[46px]' />Сбер</span>
                    <span className="flex items-center"><img src={VkusvillIcon} alt="vkussvil icon" className='mx-2 max-w-[46px] max-h-[46px]' />Вкусвилл</span>
                </div>

                <div className='flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center my-1'>
                    <span className="flex items-center"><img src={FiveIcon} alt="five icon" className='mx-2 max-w-[46px] max-h-[46px]' />Пятёрочка</span>
                    <span className="flex items-center"><img src={KFCIcon} alt="kfc icon" className='mx-2 max-w-[46px] max-h-[46px]' />KFC</span>
                    <span className="flex items-center"><img src={TechnoIcon} alt="techno icon" className='mx-2 max-w-[46px] max-h-[46px]' />ТЕХНОНИКОЛЬ</span>
                </div>

                <div className='flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center my-1'>
                    <span className="flex items-center"><img src={LentaIcon} alt="lenta icon" className='mx-2 max-w-[46px] max-h-[46px]' />Лента</span>
                    <span className="flex items-center"><img src={ChijikIcon} alt="chijik icon" className='mx-2 max-w-[46px] max-h-[46px]' />Чижик</span>
                    <span className="flex items-center"><img src={DocmedIcon} alt="docmed icon" className='mx-2 max-w-[46px] max-h-[46px]' />Doc med</span>
                </div>
            </div>

            <div className='md:hidden flex flex-wrap font-[500] text-[28px] leading-[28px] -tracking-[0.04em] mr-4 flex items-center mt-8 space-y-1'>Клиенты студии это
                <span className="flex items-center mr-2"><img src={YandexIcon} alt='Yandex Icon' className='mr-2 max-w-[46px] max-h-[46px]' />Яндекс</span>
                <span className="flex items-center mr-2"><img src={SberIcon} alt='Sber Icon' className='mr-2 max-w-[46px] max-h-[46px]' />Сбер</span>
                <span className="flex items-center mr-2"><img src={VkusvillIcon} alt='Vkusvill Icon' className='mr-2 max-w-[46px] max-h-[46px]' />Вкусвилл</span>
                <span className="flex items-center mr-2"><img src={FiveIcon} alt='Five Icon' className='mr-2 max-w-[46px] max-h-[46px]' />Пятёрочка</span>
                <span className="flex items-center mr-2"><img src={KFCIcon} alt='KFC Icon' className='mr-2 max-w-[46px] max-h-[46px]' />KFC</span>
                <span className="flex items-center mr-2"><img src={TechnoIcon} alt='Techno Icon' className='mr-2 max-w-[46px] max-h-[46px]' />ТЕХНОНИКОЛЬ</span>
                <span className="flex items-center mr-2"><img src={LentaIcon} alt='Lenta Icon' className='mr-2 max-w-[46px] max-h-[46px]' />Лента</span>
                <span className="flex items-center mr-2"><img src={ChijikIcon} alt='Chijik Icon' className='mr-2 max-w-[46px] max-h-[46px]' />Чижик</span>
                <span className="flex items-center mr-2"><img src={DocmedIcon} alt='Docmed Icon' className='mr-2 max-w-[46px] max-h-[46px]' />Doc med</span>
            </div>

            <div className="rounded-[30px] overflow-hidden mt-8">
                <video src={video} className="w-full rounded-[30px]" autoPlay muted loop playsInline />
            </div>
        </div>
    );
};

export default ExperienceShowcase;