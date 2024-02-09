import React from 'react';
import hostImage from '../assets/images/max.png';

const HostIntroduction: React.FC = () => {
    return (
        <div className="grid grid-cols-2 items-center mt-[70px]">
            <div className="w-[500px]">
                {/* <div className="flex flex-col flex-wrap justify-center"> */}
                <h1 className="font-[700] text-[38px] leading-[34.2px] -tracking-[0.04em] text-black">Эфир проведёт Макс Авдеев</h1>
                <p className="font-[700] text-[38px] leading-[34.2px] -tracking-[0.04em] text-black/40">основатель СТУДИИ MAX и образовательного продукта Helper</p>
                <p className="font-[400] text-[16px] leading-[17.6ox] text-[#878787] mt-4">Начал более 180 дизайнеров крупнейшим компаниям и более 100 человек в студию MAX. Может нарисовать любой дизайн за полчаса и не понимает почему так не могут все! :))</p>
            </div>
            <div className="flex w-[500px] justify-center">
                <img src={hostImage} alt="Макс Авдеев" className="w-[400px] h-[400px] object-contain rounded-b-[100px]" />
            </div>
        </div>
    );
};

export default HostIntroduction;
