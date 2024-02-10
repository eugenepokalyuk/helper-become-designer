import { FC } from 'react';

interface ServiceInterfaceShowcaseCardProps {
    logo: string;
    description: string;
}

interface ServiceInterfaceShowcaseProps {
    services: Array<{
        logo: string;
        description: string;
    }>;
}

const makeNumbersBold = (text: string) => {
    const regex = /(\d+ млн|\~\d+ млн)/g;
    return text.replace(regex, (match) => `<span class="font-[700] text-[16px] leadgin-[17.6px]">${match}</span>`);
};

const ServiceInterfaceShowcaseCard: FC<ServiceInterfaceShowcaseCardProps> = ({ logo, description }) => {
    const updatedDescription = makeNumbersBold(description);
    return (
        <div className="flex flex-col items-center justify-start text-center md:m-4 my-4 md:w-full text-center">
            <img src={logo} alt="Service Logo" className="w-[60px] md:w-[90px] h-[60px] md:h-[90px] mb-3 md:mb-2 rounded-[16px] md:rounded-[22.33px]" />
            <p className="font-[400] text-[16px] leading-[17.6px] max-w-[165px]" dangerouslySetInnerHTML={{ __html: updatedDescription }}></p>
        </div>
    );
};

const ServiceInterfaceShowcase: FC<ServiceInterfaceShowcaseProps> = ({ services }) => {
    return (
        <div className='max-w-[340px] md:max-w-[600px] mt-[120px] md:mt-[150px] mx-auto'>
            <h2 className="font-[500] text-[32px] leading-[32px] -tracking-[.04em] text-black text-center">А еще... Вы сможете придумывать интерфейсы для продуктов, которыми пользуются миллионы людей</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-[30px]">
                {services.map((service, index) => (
                    <ServiceInterfaceShowcaseCard key={index} logo={service.logo} description={service.description} />
                ))}
            </div>
        </div>
    );
};

export default ServiceInterfaceShowcase;