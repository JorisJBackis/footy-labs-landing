import {UnderDevelopment} from "@/components/under-development";
import {Team} from "@/components/resources/team";
import {getArticles} from "@/sanity/sanity-utils";
import React from "react";
import {BlogItem} from "@/components/blog/blog-item";
import {Separator} from "@/components/ui/separator";
import {LatestArticles} from "@/components/resources/latest-articles";
import {OurCraft} from "@/components/resources/our-craft";
import Image from "next/image";
import styles from "./resources.module.scss";

export default function ResourcesPage() {
  return (
      <div className="container-wrapper">
        <div className="container flex flex-col gap-(--space-xl) ">
          <div className="flex flex-col gap-(--space-sm)  relative overflow-hidden">
            <h1 className="text-center">Footy Labs team</h1>
            {/*<div>*/}
            <div className="w-screen  mr-[-50vw] ml-[-50vw] relative left-1/2 right-1/2 sm:hidden">
              <div className={` ${styles.about} w-full`}>
                <Image src={"/saka.png"} alt={"saka"} width={650} height={630}/>
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
