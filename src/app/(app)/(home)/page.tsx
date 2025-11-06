import {HeroSection} from "@/components/home/hero/hero";
import {Bento} from "@/components/home/bento/bento";
import {Testimonials} from "@/components/home/testimonials/testimonials";
import home from "@/app/(app)/(home)/home.module.scss";
import {GetStarted} from "@/components/home/get-started/get-started";
import bento from "@/components/home/bento/bento.module.scss";

export default function HomePage() {
  return (
      <div className={`container-wrapper ${home.home}`}>
        <HeroSection/>
        <section className={`container overflow-hidden ${bento.bento}`}>
          <h3>Footy Labs - a platform for everyone involved in football</h3>
          <Bento bentoUniqueId="home-page"/>
        </section>
          <Testimonials/>
          <GetStarted/>
      </div>
);
}
