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
        <div className="flex flex-col items-start mt-4">
            <div>
                {/* className={`w-[${size}px] h-[${size}px]`} */}
                <img src={image} alt="Graph" className={`w-full h-full object-contain`} style={{
                    width: size,
                    height: size
                }} />
            </div>
            {/*  */}
            <p className={`font-[700] text-[32px] leading-[32px] -tracking-[.04em] text-black ${size !== 128 && 'mt-[32px]'} max-w-[325px]`}>{title}</p>
            <p className="font-[400] text-[16px] leading-[17.6px] text-[#A6A6A6] mt-[12px] max-w-[250px]">{description}</p>
        </div>
    )
}

const WhyChooseDesigning: FC<WhyChooseDesigningProps> = ({ cards, title }) => {
    return (
        <div className="flex flex-col items-left mt-[150px]">
            <h1 className="font-[700] text-[65px] leading-[61.75px] -tracking-[.04em] text-black max-w-[830px]">{title}</h1>

            <div className="grid grid-cols-3 gap-x-[32px] mt-[50px]">
                {cards.map((card: WhyChooseDesigningCardProps) => (
                    <WhyChooseDesigningCard key={card.title} image={card.image} title={card.title} description={card.description} size={card.size} />
                ))}
            </div>
        </div>
    );
};

export default WhyChooseDesigning;