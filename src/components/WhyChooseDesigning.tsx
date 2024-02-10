import { FC } from "react";

interface WhyChooseDesigningProps {
    cards: WhyChooseDesigningCardProps[];
    title: string;
}

type WhyChooseDesigningCardProps = {
    image: any;
    title: string;
    description: string;
    size: number
}

const WhyChooseDesigningCard: FC<WhyChooseDesigningCardProps> = ({ image, title, description, size }) => {
    return (
        <div className="flex flex-row md:flex-col items-start mt-10 md:mt-4 gap-x-3">
            <div className={`${size !== 128 ? 'max-w-[60px] md:max-w-[100px]' : 'max-w-[100px]'} md:w-full`}>
                <img src={image} alt={title} className={`md:w-auto md:h-auto object-contain`} />
            </div>
            <div className="w-full md:mt-[32px]">
                <p className={`font-[700] text-[24px] md:text-[32px] leading-[25.2px] md:leading-[32px] -tracking-[.04em] max-w-[250px] md:max-w-[300px] text-black`}>{title}</p>
                <p className="font-[400] text-[16px] leading-[17.6px] text-[#A6A6A6] mt-[12px] md:max-w-[250px]">{description}</p>
            </div>
        </div>
    )
}

const WhyChooseDesigning: FC<WhyChooseDesigningProps> = ({ cards, title }) => {
    return (
        <div className="mt-[80px]">
            <h1 className="font-[700] text-[42px] md:text-[65px] leading-[40px] md:leading-[61.75px] -tracking-[3px] md:-tracking-[.04em] w-[320px] md:w-[830px] text-black md:mb-[60px]">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-baseline">
                {cards.map((card) => (
                    <WhyChooseDesigningCard key={card.title} {...card} />
                ))}
            </div>
        </div>
    );
};

export default WhyChooseDesigning;