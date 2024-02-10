import { useEffect, useState } from "react"
import figma from "../../assets/icons/figma-icon.png"
import marina from "../../assets/icons/marina-icon.png"
import notion from "../../assets/icons/notion-icon.png"

import CompanyYandexMarketImage from '../../assets/images/companies/company-market.png'
import CompanyMegaImage from '../../assets/images/companies/company-mega.png'
import CompanyOzonImage from '../../assets/images/companies/company-ozon.png'
import CompanyYandexTaxiImage from '../../assets/images/companies/company-ytaxi.png'

import companies from "../../assets/images/companies/icon-companies-logo.png"
import graph from "../../assets/images/graph.png"
import lady from "../../assets/images/lady.png"
import EventAd from "../EventAd"
import ExperienceShowcase from '../ExperienceShowcase'
import Footer from "../Footer/Footer"
import Gradient from '../Gradient'
import Header from '../Header/Header'
import HostIntroduction from '../HostIntroduction'
import ProductDesignerAd from '../ProductDesignerAd'
import RealtimeDesignBanner from '../RealtimeDesignBanner'
import ServiceInterfaceShowcaseCard from '../ServiceInterfaceShowcaseCard'
import UIWorkshopBanner from '../UIWorkshopBanner'
import WhyChooseDesigning from '../WhyChooseDesigning'

const cards: any = [
  {
    image: graph,
    title: 'Средняя зп со старта — 145 000 ₽/мес',
    description: 'Это в среднем на 30 тыс ₽/мес больше, чем  в других областях креативной it индустрии.',
    size: 128
  }, {
    image: companies,
    title: 'Надёжные работодатели и крутые условия',
    description: 'Вместе в прямом эфире с нуля соберём копию приложения Яндекс лавки',
    size: 128
  }, {
    image: lady,
    title: 'IT-профессия в которой не нужно программировать',
    description: 'Продуктовый дизайнер - креативная IT профессия которая доступна каждому',
    size: 128
  }
];
const cards2: any = [
  {
    image: figma,
    title: 'Пришлём все исходники после эфира',
    description: 'Бесплатно отдадим всё, что отрисовали во время эфира',
    size: 105
  }, {
    image: notion,
    title: 'Закинем большой пак полезностей для лёгкого старта',
    description: 'Внутри будут гайды и полезные материалы',
    size: 105
  }, {
    image: marina,
    title: 'Бесплатная консультация и траектория развития',
    description: 'Марина расскажет по шагам как войти в профессию',
    size: 105
  }
];
const services = [{
  logo: CompanyMegaImage,
  description: `Больше 30 млн посетителей в мес`
}, {
  logo: CompanyYandexTaxiImage,
  description: "Больше 40 млн юзеров в месяц"
}, {
  logo: CompanyOzonImage,
  description: "~1 млн заказов в день"
}, {
  logo: CompanyYandexMarketImage,
  description: "~15 млн активных покупателей"
}];
const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Gradient />
      <Header isScrolled={isScrolled ? true : false} />
      <div className="max-w-[1024px] mx-auto px-4 pb-[50px] pt-[50px]">
        <main>
          <ProductDesignerAd />
          <WhyChooseDesigning cards={cards} title={'Почему продуктовый дизайнер — работа мечты?'} />
          <ServiceInterfaceShowcaseCard services={services} />
          <RealtimeDesignBanner />
          <UIWorkshopBanner />
          <ExperienceShowcase />
          <HostIntroduction />
          <WhyChooseDesigning cards={cards2} title={'После эфира отправим набор полезностей'} />
          <EventAd />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
