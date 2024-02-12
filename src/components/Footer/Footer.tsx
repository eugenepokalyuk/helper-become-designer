import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="mt-10">
            <div className="flex flex-col max-w-7xl mx-auto flex justify-start items-center md:items-start">
                <div className="font-[500] text-[52px] leading-[43.31px] -tracking-[4.15px] text-[#929292]/40">
                    <h1>Helper</h1>
                </div>
                <div className="flex flex-col md:flex-row text-center mt-5 font-[400] text-[14px] leading-[15.54px] text-[#D3D3D3] md:space-x-6 space-y-4 md:space-y-0">
                    <a
                        href='https://assets-global.website-files.com/639b398738ab4f737908bd30/646b2f68964f4afec25d5476_%D0%A5%D0%B5%D0%BB%D0%BF%D0%B5%D1%80_%D0%9E%D0%9E%D0%9E_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D1%80%D0%B0%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D1%83_%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D1%8B_18_05_2023.docx'
                        target="_blank"
                        className='cursor-pointer footer-link'>Согласие на рассылку</a>
                    <a
                        href='https://assets-global.website-files.com/657b5d05b2b515e0807c0914/65c2026bbbd210d6f23ce50c_%D0%A5%D0%B5%D0%BB%D0%BF%D0%B5%D1%80_%D0%9E%D0%9E%D0%9E_%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5_02_08_2023_docx.pdf'
                        target="_blank"
                        className='cursor-pointer footer-link'>Пользовательское соглашение</a>
                    <a
                        href='https://assets-global.website-files.com/639b398738ab4f737908bd30/646b2f685895e07b93c2f5c5_%D0%A5%D0%B5%D0%BB%D0%BF%D0%B5%D1%80_%D0%9E%D0%9E%D0%9E_%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5_%D0%BD%D0%B0_%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_cookies_18_05_2023.docx'
                        target="_blank"
                        className='cursor-pointer footer-link'>Согласие на использование cookies</a>
                    <a
                        href='https://assets-global.website-files.com/639b398738ab4f737908bd30/646b2f682bb254ea3ace185a_%D0%A5%D0%B5%D0%BB%D0%BF%D0%B5%D1%80_%D0%9E%D0%9E%D0%9E_%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8_18_05_2023.docx'
                        target="_blank"
                        className='cursor-pointer footer-link'>Положение о конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;