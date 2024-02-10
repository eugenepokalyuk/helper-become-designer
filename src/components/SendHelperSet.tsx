import { FC } from "react";
import figma from '../assets/icons/figma-icon.png';
import marina from '../assets/icons/marina-icon.png';
import notion from '../assets/icons/notion-icon.png';

// type SendHelperSetCardProps = {
//     image: any;
//     title: string;
//     description: string;
//     size: number
// }

const SendHelperSet: FC = () => {
    return (
        <div className="mt-[80px]">
            <h1 className="font-[700] text-[42px] md:text-[65px] leading-[40px] md:leading-[61.75px] -tracking-[3px] md:-tracking-[.04em] w-[320px] md:w-[830px] text-black md:mb-[60px]">После эфира отправим набор полезностей</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-baseline">

                <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
                    <div className={`max-w-[60px] md:max-w-[100px] md:w-full`}>
                        <img src={figma} alt={'Пришлём все исходники после эфира'} className={`md:w-auto md:h-auto object-contain`} />
                    </div>
                    <div className="w-full md:mt-[32px]">
                        <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>Пришлём все исходники после эфира</p>
                        <p className="font-[400] text-[16px] leading-[17.6px] text-[#A6A6A6] mt-[12px] md:max-w-[250px]">Бесплатно отдадим всё, что отрисовали во время эфира</p>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
                    <div className={`max-w-[60px] md:max-w-[100px] md:w-full`}>
                        <img src={notion} alt={'Пришлём все исходники после эфира'} className={`md:w-auto md:h-auto object-contain`} />
                    </div>
                    <div className="w-full md:mt-[32px]">
                        <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>Закинем большой пак полезностей для лёгкого старта</p>
                        <p className="font-[400] text-[16px] leading-[17.6px] text-[#A6A6A6] mt-[12px] md:max-w-[250px]">Внутри будут гайды и полезные материалы</p>
                    </div>
                </div>

                <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
                    <div className={`max-w-[60px] md:max-w-[100px] md:w-full`}>
                        <img src={marina} alt={'Пришлём все исходники после эфира'} className={`md:w-auto md:h-auto object-contain`} />
                    </div>
                    <div className="w-full md:mt-[32px]">
                        <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>Бесплатная консультация и траектория развития</p>
                        <p className="font-[400] text-[16px] leading-[17.6px] text-[#A6A6A6] mt-[12px] md:max-w-[250px]">Марина расскажет по шагам как войти в профессию</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SendHelperSet;