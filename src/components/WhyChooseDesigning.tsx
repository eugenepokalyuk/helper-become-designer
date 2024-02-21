import { FC } from "react";
import memoji1Mobile from '../assets/images/memoji1-mobile.png';
import memoji1 from '../assets/images/memoji1.png';
import memoji2Mobile from '../assets/images/memoji2-mobile.png';
import memoji2 from '../assets/images/memoji2.png';
import memoji3Mobile from '../assets/images/memoji3-mobile.png';
import memoji3 from '../assets/images/memoji3.png';

const WhyChooseDesigningList = () => {
    return (
        <>
            <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
                <div className='max-w-[100px] md:max-w-[200px] md:w-full'>
                    <img src={memoji1} alt={'Средняя зп со старта — 110 000 ₽/мес'} className={`max-md:hidden md:w-[200px] md:max-h-[200px] object-contain`} />
                    <img src={memoji1Mobile} alt={'Средняя зп со старта — 110 000 ₽/мес'} className={`md:hidden md:w-[200px] md:max-h-[200px] object-contain`} />
                </div>
                <div className="w-full h-auto">
                    <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>Средняя зп со старта — <span className="text-nowrap">110 000 ₽/мес</span></p>
                    <p className="font-[400] text-[16px] leading-[17.6px] text-[#9F9F9F] mt-[8px] md:max-w-[250px]">Это в среднем на 30 тыс ₽/мес больше, чем  в других областях креативной it индустрии.</p>
                </div>
            </div>

            <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
                <div className='max-w-[100px] md:max-w-[200px] md:w-full'>
                    <img src={memoji2} alt={'Надёжные работодатели и крутые условия'} className={`max-md:hidden md:w-[200px] md:max-h-[200px] object-contain`} />
                    <img src={memoji2Mobile} alt={'Средняя зп со старта — 110 000 ₽/мес'} className={`md:hidden md:w-[200px] md:max-h-[200px] object-contain`} />
                </div>
                <div className="w-full">
                    <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>{'Надёжные работодатели и крутые условия'}</p>
                    <p className="font-[400] text-[16px] leading-[17.6px] text-[#9F9F9F] mt-[8px] md:max-w-[250px]">Продуктовые дизайнеры работают в известных IT-компаниях в России и за рубежом</p>
                </div>
            </div>

            <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
                <div className='max-w-[100px] md:max-w-[200px] md:w-full'>
                    <img src={memoji3} alt={'IT-профессия, в которой не нужно программировать'} className={`max-md:hidden md:w-[200px] md:max-h-[200px] object-contain`} />
                    <img src={memoji3Mobile} alt={'Средняя зп со старта — 110 000 ₽/мес'} className={`md:hidden md:w-[200px] md:max-h-[200px] object-contain`} />
                </div>
                <div className="w-full">
                    <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>{'IT-профессия, в которой не нужно программировать'}</p>
                    <p className="font-[400] text-[16px] leading-[17.6px] text-[#9F9F9F] mt-[8px] md:max-w-[250px]">Это креативная IT профессия которой может обучиться каждый</p>
                </div>
            </div>
        </>
    )
}

const WhyChooseDesigning: FC = () => {
    return (
        <div className="mt-[135px]">
            <h1 className="font-[700] text-[42px] md:text-[65px] leading-[40px] md:leading-[61.75px] -tracking-[3px] md:-tracking-[.04em] w-[320px] md:w-[830px] text-black md:mb-[60px]">Почему продуктовый дизайнер — работа мечты?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-baseline">
                <WhyChooseDesigningList />
            </div>
        </div>
    );
};

export default WhyChooseDesigning;