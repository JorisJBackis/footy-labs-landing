import {HeroSection} from "@/components/home/hero/hero";
import {Bento} from "@/components/home/bento/bento";

export default function HomePage() {
  return (
      <div className="container-wrapper">
        <HeroSection/>
        <Bento bentoUniqueId="home-page"/>
      </div>
  );
}
