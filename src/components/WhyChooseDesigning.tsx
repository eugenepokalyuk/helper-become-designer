import { FC } from "react";
import companies from '../assets/images/companies/icon-companies-logo.png';
import graph from '../assets/images/graph.png';
import lady from '../assets/images/lady.png';
// interface WhyChooseDesigningProps {
//     cards: WhyChooseDesigningCardProps[];
//     title: string;
// }
// const cards: any = [
//   {
//     image: graph,
//     title: 'Средняя зп со старта — 145 000 ₽/мес',
//     description: 'Это в среднем на 30 тыс ₽/мес больше, чем  в других областях креативной it индустрии.',
//     size: 128
//   }, {
//     image: companies,
//     title: 'Надёжные работодатели и крутые условия',
//     description: 'Вместе в прямом эфире с нуля соберём копию приложения Яндекс лавки',
//     size: 128
//   }, {
//     image: lady,
//     title: 'IT-профессия в которой не нужно программировать',
//     description: 'Продуктовый дизайнер - креативная IT профессия которая доступна каждому',
//     size: 128
//   }
// ];

// type WhyChooseDesigningCardProps = {
//     image: any;
//     title: string;
//     description: string;
//     size: number
// }

// const WhyChooseDesigningCard: FC<WhyChooseDesigningCardProps> = ({ image, title, description, size }) => {
//     return (
//         <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
//             <div className={`${size !== 128 ? 'max-w-[60px] md:max-w-[100px]' : 'max-w-[100px]'} md:w-full`}>
//                 <img src={image} alt={title} className={`md:w-auto md:h-auto object-contain`} />
//             </div>
//             <div className="w-full md:mt-[32px]">
//                 <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>{title}</p>
//                 <p className="font-[400] text-[16px] leading-[17.6px] text-[#A6A6A6] mt-[12px] md:max-w-[250px]">{description}</p>
//             </div>
//         </div>
//     )
// }

const WhyChooseDesigning: FC = () => {
    return (
        <div className="mt-[80px]">
            <h1 className="font-[700] text-[42px] md:text-[65px] leading-[40px] md:leading-[61.75px] -tracking-[3px] md:-tracking-[.04em] w-[320px] md:w-[830px] text-black md:mb-[60px]">Почему продуктовый дизайнер — работа мечты?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-baseline">

                <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
                    <div className='max-w-[100px] md:max-w-[200px] md:w-full'>
                        <img src={graph} alt={'Средняя зп со старта — 145 000 ₽/мес'} className={`md:w-[200px] md:h-[200px] object-contain`} />
                    </div>
                    <div className="w-full h-auto md:mt-[32px]">
                        <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>Средняя зп со старта — 145 000 ₽/мес</p>
                        <p className="font-[400] text-[16px] leading-[17.6px] text-[#A6A6A6] mt-[12px] md:max-w-[250px]">Это в среднем на 30 тыс ₽/мес больше, чем  в других областях креативной it индустрии.</p>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
                    <div className='max-w-[100px] md:max-w-[200px] md:w-full'>
                        <img src={companies} alt={'Надёжные работодатели и крутые условия'} className={`md:w-[200px] md:h-[200px] object-contain`} />
                    </div>
                    <div className="w-full md:mt-[32px]">
                        <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>{'Надёжные работодатели и крутые условия'}</p>
                        <p className="font-[400] text-[16px] leading-[17.6px] text-[#A6A6A6] mt-[12px] md:max-w-[250px]">Вместе в прямом эфире с нуля соберём копию приложения Яндекс лавки</p>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
                    <div className='max-w-[100px] md:max-w-[200px] md:w-full'>
                        <img src={lady} alt={'IT-профессия в которой не нужно программировать'} className={`md:w-[200px] md:h-[200px] object-contain`} />
                    </div>
                    <div className="w-full md:mt-[32px]">
                        <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>{'IT-профессия в которой не нужно программировать'}</p>
                        <p className="font-[400] text-[16px] leading-[17.6px] text-[#A6A6A6] mt-[12px] md:max-w-[250px]">Продуктовый дизайнер - креативная IT профессия которая доступна каждому</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseDesigning;