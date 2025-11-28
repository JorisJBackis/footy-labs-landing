"use client";

import sections from "@/components/home/hero/hero.module.scss"
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import Image from "next/image";
import {PlusIcon, Shield, UserIcon} from "lucide-react";
import {ContactDialog} from "@/components/contact/contact-dialog";
import {StaggerBlurElement, StaggeredBlurText} from "@/components/text";
import {splitBySpace} from "@/lib/utils";

const delayStep = 0.1;
const heading = 'AI-driven matchmaking for clubs, agents & players';
const headingDelay = 0;
const p = 'Discover talent, manage your network, and make smarter decisions, all in one place.';
// const pDelay = headingDelay + splitBySpace(heading).length * delayStep; // 0 + 3 * 0.1 - corresponds to actual delay, no pause
const pDelay = headingDelay + splitBySpace(heading).length * delayStep + 0.2; // 0 + 3 * 0.1 - corresponds to actual delay, no pause
const buttonsDelay = headingDelay + pDelay + 0.2;

export function HeroSection() {
  return (
      <div className="relative">
        <section className={`container ${sections.hero}`}>
          <div className="relative z-10">
            <h1 className="relative z-10">
              <StaggeredBlurText textArr={splitBySpace(heading)}>
              </StaggeredBlurText>
            </h1>
            <p className="relative z-10">
              <StaggerBlurElement initDelay={pDelay}>
                {p}
              </StaggerBlurElement>
            </p>
            {/*<UnderDevelopment/>*/}
          </div>
          <div className={`${sections.buttons} relative z-10`}>
            <StaggerBlurElement initDelay={buttonsDelay}>
              <ContactDialog>
                <Button variant="default"
                        className="relative z-10"
                >
                  Get a free 30 minute demo
                </Button>
              </ContactDialog>
            </StaggerBlurElement>
            <StaggerBlurElement initDelay={buttonsDelay + 0.2}>
              <ContactDialog>
                <Button variant="outline"
                        className="relative z-10"
                >
                  Explore Partnership
                </Button>
              </ContactDialog>
            </StaggerBlurElement>
          </div>
          <StaggerBlurElement initDelay={buttonsDelay + 0.2 + 0.2}>
            <div className="relative">
                    <span className="hidden sm:block absolute -left-25 -top-25 3xl:-top-40 3xl:-left-40
            bg-primary-light size-24 sm:size-96 3xl:size-[calc(var(--spacing)*96*1.5]  blur-[50px] sm:blur-[200px] z-0"></span>
              <span className="absolute -right-25 bottom-25 3xl:bottom-[25%] 3xl:-right-40
            bg-yellow-mid size-36 sm:size-80 3xl:size-[calc(var(--spacing)*96*1.5]  blur-[200px] z-0"></span>
              <span className="hidden sm:block absolute -left-25 top-1/2 -translate-y-1/2 3xl:-left-40
            bg-yellow-light size-40 3xl:size-[calc(var(--spacing)*96*1.5]  blur-[200px] z-0"></span>
              <Image width={1857} height={1016} src={"/club-needs.png"}
                     alt="platform image" className="relative z-10"/>
            </div>
          </StaggerBlurElement>

        </section>
        <StaggerBlurElement initDelay={buttonsDelay + 0.2 + 0.2 + 0.2}>

          <StatsCoveredSection/>
        </StaggerBlurElement>
      </div>
  )
}

const leagueLogos = [
  "ac-sparta.svg",
  "afc-bournemouth.png",
  "FK_TransINVEST_logo.png",
  "fk-zalgiris.png",
  "sjk-logo.svg",
  "sydney-fc.png"
];

export function StatsCoveredSection() {
  return (
      <section className={`container overflow-hidden bg-background border-t border-b ${sections.stats}`}>
        <div className={sections.stats__logos}>
          {leagueLogos.map((logoSrc) => (
              <Image src={`/leagues/${logoSrc}`}
                     alt={"logo"}
                     key={logoSrc}
                     width={32}
                     height={32}/>
          ))
          }

        </div>

        <div className={sections.stats__items}>
          <div>
            {/*<PlusIcon/>*/}
            <p className="font-semibold">and more...</p>
          </div>
          <div>
            <UserIcon/>
            <p className="font-semibold"><span className="text-lg">{1200}+</span> players stats</p>
          </div>
          <div>
            <Shield/>
            <p className="font-semibold"><span className="text-lg">{400}+</span> clubs/leagues stats</p>
          </div>
          <div>
          </div>
        </div>
      </section>
  )
}
