import React, { FC } from 'react';
import ChijikIcon from '../assets/icons/chizik-icon.png';
import DocmedIcon from '../assets/icons/doc-icon.png';
import FiveIcon from '../assets/icons/five-icon.png';
import KFCIcon from '../assets/icons/kfc-icon.png';
import LentaIcon from '../assets/icons/lenta-icon.png';
import SberIcon from '../assets/icons/sber-icon.png';
import TechnoIcon from '../assets/icons/tech-icon.png';
import VkusvillIcon from '../assets/icons/vkus-icon.png';
import YandexIcon from '../assets/icons/yandex-icon.png';
import Concept from '../assets/images/ExperienceShowcase.png';
import Max from '../assets/images/companies/company-max.png';
interface ExperienceShowcaseCardProps {
    title: string;
    image: any;
}

const ExperienceShowcaseCard: FC<ExperienceShowcaseCardProps> = ({ title, image }) => {
    return (
        <div className="flex flex items-center justify-center">
            <div className='w-8 h-8 mr-2'>
                <img src={image} alt="" className='w-full h-full object-contain' />
            </div>
            <p className='mr-2'>{title}</p>
        </div>
    );
};

const ExperienceShowcase: React.FC = () => {
    const cards = [
        { title: "Яндекс", image: YandexIcon },
        { title: "Сбер", image: SberIcon },
        { title: "Вкусвилл", image: VkusvillIcon },
        { title: "Пятёрочка", image: FiveIcon },
        { title: "KFC", image: KFCIcon },
        { title: "ТЕХНОНИКОЛЬ", image: TechnoIcon },
        { title: "Лента", image: LentaIcon },
        { title: "Чижик", image: ChijikIcon },
        { title: "Doc med", image: DocmedIcon }
    ];

    return (
        <div className='mt-[140px]'>
            <h1 className="flex flex-row flex-wrap items-center font-[700] text-[90px] leading-[72px] -tracking-[0.06em]">Эфир создан<br />на основе рабочего опыта студии <span><img src={Max} alt="" className='w-[70px] h-[70px] rounded-[21px] mx-2' /></span> MAX</h1>

            <div className="flex flex-wrap justify-start items-center mb-8 max-w-[800px] mt-[50px]">
                <div className='flex flex-wrap items-center font-[500] text-[35px] leading-[35px] -tracking-[0.04em]'>Клиенты студии это {cards.map((card, index) => (
                    <ExperienceShowcaseCard key={index} title={card.title} image={card.image} />
                ))}</div>
            </div>

            <div className="rounded-lg overflow-hidden">
                <img src={Concept} alt="Mockup" className="w-full" />
            </div>
        </div>
    );
};

export default ExperienceShowcase;