import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-10">
            <div className="flex flex-col max-w-7xl mx-auto flex justify-start items-center md:items-start">
                <div className="font-[500] text-[52px] leading-[43.31px] -tracking-[4.15px] text-[#929292]/40">
                    <h1>Helper</h1>
                </div>
                <div className="flex flex-col md:flex-row text-center mt-5 font-[400] text-[14px] leading-[15.54px] text-[#D3D3D3] space-x-6">
                    <span>Согласие на рассылку</span>
                    <span>Пользовательское соглашение</span>
                    <span>Согласие на использование cookies</span>
                    <span>Положение о конфиденциальности</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;