import {Copy} from "@/components/contact/copy";
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Briefcase, Mail, MapPin, Phone, TwitterIcon, User} from "lucide-react";
import {BentoBadges} from "@/components/home/bento/badges";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import Link from "next/link";
import {ShareButtons} from "@/components/home/bento/share-buttons";
import {playersBentoData} from "@/lib/bento";


export function PlayersBento() {
  return (
      <>
        <div className="flex flex-col bg-gray-light overflow-hidden">
          <div className="basis-2/5 flex flex-col gap-1.5 sm:gap-1.5">
            <h6>Get discovered</h6>
            <p className="text-accent-foreground">
              <span className="relative">
              <Icons.highlight className="w-full absolute -bottom-2 left-0 text-primary-light" strokeWidth={8}/>
                {`Track your performance `}
              </span>
               with personalised stats and visuals and find new opportunities</p>


          </div>
          {/*<BentoBadges badges={[*/}
          {/*  "Position",*/}
          {/*  "Age Range",*/}
          {/*  "Preferred Foot",*/}
          {/*  "Market Value",*/}
          {/*  "Playing Style",*/}
          {/*  "Physical Attributes",*/}
          {/*  "Availability Status",*/}
          {/*  "Transfer Interest",*/}
          {/*  "League Experience",*/}
          {/*  "Player Role",*/}
          {/*  "Salary Range",*/}
          {/*  "20+ more...",*/}
          {/*]} className="flex-grow border-t pt-3">*/}
          {/*</BentoBadges>*/}
          <div className="relative flex-grow ">
            <BentoBadges badges={[
              "Position",
              // "Age Range",
              "Preferred Foot",
              "Market Value",
              "Playing Style",
              "Physical Attributes",
              "Availability Status",
              "Transfer Interest",

              "Interceptions per 90", "20+ more..."]}
                         className="text-accent-foreground
                         w-[140%] lg:w-[190%] 3xl:w-[160%]  pt-3 relative left-1/2 -translate-x-1/2"
                         badgeClassName="bg-gray-dark text-accent-foreground"
                         lastClassName="bg-primary-light! text-foreground!">
              {/*<Badge variant={"outline"}>30 more...</Badge>*/}
            </BentoBadges>
          </div>

        </div>

        <div className="basis-1/2 flex flex-col gap-(--space-sm) relative overflow-hidden">
  {/*<span className="hidden sm:block absolute -left-25 -top-25 3xl:-top-40 3xl:-left-40*/}
  {/*          bg-gray-dark size-48 3xl:size-96 blur-[200px] z-0"></span>*/}
          <h6 className="z-10">Analyse your           <span className="relative">
              <Icons.highlight className="w-full absolute -bottom-2 left-0 text-primary-light" strokeWidth={16}/>
            {`performance `}
              </span></h6>
          {/*<p>Track your progress with AI-powered insights and data-driven metrics</p>*/}
          <div className="z-10 grid grid-cols-2 grid-rows-2 gap-(--space-sm) h-full">
            {
              playersBentoData.metrics.map((metric, index) => {
                return (
                    <div key={index}
                         className={cn("shadow-xl bg-background flex flex-col gap-1 border p-(--space-sm) pl-(--space-md) rounded-md border-l-4 justify-center", metric.borderColor)}>
                      <span className="font-medium">{metric.label}</span>
                      <span className="text-xl font-bold">{metric.value}</span>
                      <span className="text-muted-foreground text-sm">{metric.subtitle}</span>
                    </div>
                )
              })
            }
          </div>

        </div>
        <div className=" relative overflow-hidden">
                 <span className="absolute -left-25 -top-25 3xl:top-1/2 3xl:-translate-y-1/2 3xl:-left-40
            bg-primary-light size-96 3xl:size-[calc(var(--spacing)*96*1.5] z-0 rounded-full"></span>
          <div className="h-full flex flex-col gap-1.5 justify-between">
            <div className="z-10 flex justify-between items-start">
              <div>
                <h6 className="z-10 max-w-48">Make profile</h6>
                <p className="z-10 text-foreground max-w-48">Share your professional profile with clubs and agents
                  worldwide</p>
              </div>
              <div className="z-10 flex items- gap-1">
                <Icons.arrow className="sm:block hidden pt-[5%]"/>
                <div className="flex gap-(--space-sm)">
                  {/*<span className="text-xs text-muted-foreground">Share:</span>*/}
                  <ShareButtons/>
                </div>
              </div>
            </div>
            {/*<div className="flex gap-(--space-sm) items-center">*/}

            <div
                className='ml-auto w-full z-10 max-w-[37.5rem] rounded-md bg-muted text-muted-foreground flex justify-between border'>
              <Link href={playersBentoData.profileLink} target={"_blank"}
                    className="p-(--space-sm) max-w-[80%] truncate hover:underline">{playersBentoData.profileLink}</Link>
              <Copy textToCopy={playersBentoData.profileLink} className="p-(--space-sm)"/>
            </div>

          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="basis-1/2 flex flex-col gap-(--space-sm)">
            <h6 className="z-10">Find your match</h6>
            <span
                className="hidden 3xl:block absolute -right-1/2 top-1/2 -translate-y-1/2
            bg-yellow-mid size-40 3xl:size-[calc(var(--spacing)*80*1.5)] z-0 rounded-full"></span>
            <ClubProposition/>
            {/*<p className="text-sm">12 new opportunities this week</p>*/}
          </div>
        </div>
      </>
  )
}

export function ClubProposition() {
  return (
      <div className="shadow-xl z-10 flex flex-col rounded-md border relative h-full">
        <div
            className="flex-grow z-10 bg-background flex  rounded-t-md flex-col p-(--space-sm)  gap-(--space-sm) text-muted-foreground justify-center">
          <div className="flex justify-between items-center">
            <div className="flex gap-(--space-sm) items-center">
              <Avatar>
                <AvatarImage alt="fk-transinvest" src="/leagues/fk-transinvest.webp">
                </AvatarImage>
                <AvatarFallback>FK</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="font-semibold text-sm  text-black dark:text-white">FK Transinvest</span>
                <span className="text-sm">Attacking Midfielder</span>
              </div>
            </div>
            <div className="absolute top-0 right-0">
              {/*<Button className="bg-primary-dark! absolute -top-[1.1255rem] right-4 bg-primary-light">Excellent fit </Button>*/}

              <Button className="flex 3xl:hidden absolute -top-[1.1255rem] right-4 bg-primary-dark">Fit</Button>
              <Button className="hidden 3xl:flex absolute -top-[1.1255rem] right-4 bg-primary-dark">Excellent
                fit</Button>
            </div>
          </div>
          {/*<div className="flex flex-col justify-start text-xs gap-1">*/}
          <div className="flex flex-wrap justify-between text-xs gap-(--space-sm)">
                <span className="flex w-fit gap-1 items-center justify-start">
                  <span className="bg-primary-light rounded-full h-3 w-3"/>
                <span>Lithuania</span>
                </span>
            <span className="flex gap-1 w-fit items-center justify-start">
                  <span className="bg-primary rounded-full h-3 w-3"/>
              <span>Salary: 6-10k</span>
                </span>
            <span className="flex gap-1 w-fit items-center justify-start">
                  <span className="bg-yellow-mid rounded-full h-3 w-3"/>
              <span>Age: 20-26</span>
                </span>
          </div>
        </div>
        <div className="bg-muted rounded-b-md">
          <p className="text-sm text-muted-foreground px-(--space-sm)">12 new opportunities this week</p>

        </div>
      </div>
  )
}
