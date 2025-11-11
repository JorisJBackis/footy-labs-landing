import {UnderDevelopment} from "@/components/under-development";
import {Team} from "@/components/about-us/team";
import {getArticles} from "@/sanity/sanity-utils";
import React from "react";
import {BlogItem} from "@/components/blog/blog-item";
import {Separator} from "@/components/ui/separator";
import {LatestArticles} from "@/components/about-us/latest-articles";
import {OurCraft} from "@/components/about-us/our-craft";
import Image from "next/image";
import styles from "./about-us.module.scss";

export default function AboutUsPage() {
  return (
      <div className="container-wrapper">
        <div className="container flex flex-col gap-(--space-xl) ">
          <div className="flex flex-col gap-(--space-sm)  relative overflow-hidden">
            <h1 className="text-center">Footy Labs team</h1>
            {/*<div>*/}
            <div className="w-screen  mr-[-50vw] ml-[-50vw] relative left-1/2 right-1/2 h-[20rem] sm:h-[32rem]">
              <div className={` ${styles.about} w-fit -translate-x-1/2`}>
                <Image src={"/saka.png"} alt={"saka"} width={500} height={500}/>
              </div>
            </div>
            {/*</div>*/}
          </div>
          <OurCraft/>
          <Team/>
          <LatestArticles/>
        </div>
      </div>
  );
}
