import {HeroSection} from "@/components/home/hero/hero";
import {Bento} from "@/components/home/bento/bento";
import {Testimonials} from "@/components/home/testimonials/testimonials";
import home from "@/app/(app)/(home)/home.module.scss";
import {GetStarted} from "@/components/home/get-started/get-started";

export default function HomePage() {
  return (
      <div className={`container-wrapper ${home.home}`}>
        <HeroSection/>
        <Bento bentoUniqueId="home-page"/>
        <Testimonials/>
        <GetStarted/>
      </div>
  );
}
