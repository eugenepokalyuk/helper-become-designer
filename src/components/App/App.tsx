import { useEffect, useState } from "react"

import CompanyYandexMarketImage from '../../assets/images/companies/company-market.png'
import CompanyMegaImage from '../../assets/images/companies/company-mega.png'
import CompanyOzonImage from '../../assets/images/companies/company-ozon.png'
import CompanyYandexTaxiImage from '../../assets/images/companies/company-ytaxi.png'

import EventAd from "../EventAd"
import ExperienceShowcase from '../ExperienceShowcase'
import Footer from "../Footer/Footer"
import Gradient from '../Gradient'
import Header from '../Header/Header'
import HostIntroduction from '../HostIntroduction'
import ProductDesignerAd from '../ProductDesignerAd'
import RealtimeDesignBanner from '../RealtimeDesignBanner'
import SendHelperSet from "../SendHelperSet"
import ServiceInterfaceShowcaseCard from '../ServiceInterfaceShowcaseCard'
import UIWorkshopBanner from '../UIWorkshopBanner'
import WhyChooseDesigning from '../WhyChooseDesigning'

import { useInView } from 'react-intersection-observer'

const services = [{
  logo: CompanyMegaImage,
  description: `Больше 30 млн посетителей в мес`
}, {
  logo: CompanyYandexTaxiImage,
  description: "Больше 40 млн юзеров в месяц"
}, {
  logo: CompanyOzonImage,
  description: "~1 млн <br /> заказов в день"
}, {
  logo: CompanyYandexMarketImage,
  description: "~15 млн активных покупателей"
}];
const App = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState<boolean>(true);
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      setBannerVisible(false)
    } else {
      setBannerVisible(true)
    }
  }, [inView]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log(window.scrollY);
  //     if (window.scrollY > 1000) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <>
      <Gradient />
      <Header isScrolled={bannerVisible} />
      <div className="max-w-[1024px] mx-auto px-4 pb-[50px] pt-[50px]">
        <main>
          <div ref={ref}>
            <ProductDesignerAd />
          </div>
          <WhyChooseDesigning />
          <ServiceInterfaceShowcaseCard services={services} />
          <RealtimeDesignBanner />
          <UIWorkshopBanner />
          <ExperienceShowcase />
          <HostIntroduction />
          <SendHelperSet />
          <EventAd />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
