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
        <section className={`container overflow-hidden ${sections.hero}`}>
          <div className="">
            <h1 className="">
              <StaggeredBlurText textArr={splitBySpace(heading)}>
              </StaggeredBlurText>
            </h1>
            <p>
              <StaggerBlurElement initDelay={pDelay}>
                {p}
              </StaggerBlurElement>
            </p>
            {/*<UnderDevelopment/>*/}
          </div>
          <div className={sections.buttons}>
            <StaggerBlurElement initDelay={buttonsDelay}>
              <ContactDialog>
                <Button variant="default"
                >
                  Get a free 30 minute demo
                </Button>
              </ContactDialog>
            </StaggerBlurElement>
            <StaggerBlurElement initDelay={buttonsDelay + 0.2}>
              <ContactDialog>
                <Button variant="outline"
                >
                  Explore Partnership
                </Button>
              </ContactDialog>
            </StaggerBlurElement>
          </div>
          <StaggerBlurElement initDelay={buttonsDelay + 0.2 + 0.2}>
            <Image width={1857} height={1016} src={"/club-needs.png"} alt="platform image"/>
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
            <p>and more...</p>
          </div>
          <div>
            <UserIcon/>
            <p>{1200}+ players stats</p>
          </div>
          <div>
            <Shield/>
            <p><span>{400}+</span> clubs/leagues stats</p>
          </div>
          <div>
          </div>
        </div>
      </section>
  )
}

