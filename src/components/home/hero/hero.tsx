"use client";

import sections from "@/components/home/hero/hero.module.scss"
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import Image from "next/image";
import {PlusIcon, Shield, UserIcon} from "lucide-react";

// const h1 = ["Some", "Catchy", "Opening"]
export function HeroSection() {
  return (
      <div className="relative">
        <section className={`container overflow-hidden ${sections.hero}`}>
          <div className="">
            <h1 className="">
              Some catchy opening
            </h1>
            <p>Some text about our product. It's cool - trust. Maybe some more text. But it's cool anyway.</p>
            {/*<UnderDevelopment/>*/}
          </div>
          <div className={sections.buttons}>
            <Button variant="default"
                    onClick={() => {
                      toast.message("Book a demo is under development")
                    }}
            >
              Get a free 30 minute demo
            </Button>
            <Button variant="outline"
                    onClick={() => {
                      toast.message("Book a demo is under development")
                    }}
            >
              Speak to a founder
            </Button>
          </div>
          <Image width={1857} height={1016} src={"/club-needs.png"} alt="platform image"/>
        </section>
        <StatsCoveredSection/>
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

