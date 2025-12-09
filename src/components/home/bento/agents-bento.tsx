import {BentoBadges} from "@/components/home/bento/badges";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Briefcase, Mail, MapPin, Phone, User} from "lucide-react";
import {Button} from "@/components/ui/button";
import {players} from "@/components/home/bento/players-data";
import {RotationCards} from "@/components/home/bento/rotation-cards";
import {agentsBentoData, clubsBentoData} from "@/lib/bento";
import {cn} from "@/lib/utils";
import {Icons} from "@/components/icons";

export function AgentsBento() {
  return (
      <>
        <div className="flex flex-col bg-yellow-light overflow-hidden">
          <div className="basis-2/5 flex flex-col gap-(--space-sm) sm:gap-(--space-sm)">
            <h6>Scout smart</h6>
            <p className="text-accent-foreground"><span className="relative">
              <Icons.highlight className="w-full absolute -bottom-2 left-0 text-background" strokeWidth={8}/>
              {`Identify top talent`}
              </span> across your network with real-time player insights
              and AI-powered recruitment opportunities.</p>


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
                         badgeClassName="bg-yellow-dark text-accent-foreground"
                         lastClassName="bg-primary! text-primary-foreground!">
              {/*<Badge variant={"outline"}>30 more...</Badge>*/}
            </BentoBadges>
          </div>

        </div>

        <div className="flex flex-col gap-(--space-md) relative overflow-hidden">
            {/*          <span className="hidden sm:block absolute -left-25 -top-25 3xl:-top-40 3xl:-left-40*/}
            {/*bg-yellow-light size-48 3xl:size-96 blur-[200px] z-0"></span>*/}
          <h6 className="z-10">Manage <span className="relative">
              <Icons.highlight className="w-full absolute -bottom-2 left-0 text-background" strokeWidth={24}/>
            {` clubs `}
              </span> you work with</h6>
          <div className="z-10 flex 3xl:flex-row 3xl:flex-wrap flex-col gap-(--space-sm) justify-between h-full">
            <TeamInfoCard></TeamInfoCard>
            <TeamInfoCard></TeamInfoCard>
            <TeamInfoCard className="hidden 3xl:block"></TeamInfoCard>
            <TeamInfoCard className="hidden 3xl:block"></TeamInfoCard>
          </div>
        </div>

        {/* box-3 */}
        <div
            className="flex flex-col sm:flex-row gap-(--space-sm) sm:gap-(--space-sm) relative overflow-hidden justify-between">
            <span className="absolute -left-25 -top-25 3xl:top-1/2 3xl:-translate-y-1/2 3xl:-left-40
            bg-primary-dark size-96 3xl:size-[calc(var(--spacing)*96*1.5] z-0 rounded-full"></span>
          <div className="text-primary-foreground max-w-48 flex flex-col gap-(--space-sm) z-5">
            <h6 className="text-primary-foreground">Igor Spiridonov</h6>
            <div className="flex flex-col">
              <span className="font-semibold">Position</span>
              <p
                  className="text-primary-foreground whitespace-nowrap">Goalkeeper</p>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Age</span>
              <p
                  className="text-primary-foreground  whitespace-nowrap">37</p>
            </div>
          </div>
          {/*<div style={{ perspective: "1200px" }}>*/}
          <RotationCards className="-translate-y-0 lg:-translate-y-10" data={agentsBentoData}/>
          {/*</div>*/}
        </div>


        <div className="relative overflow-hidden flex flex-col gap-(--space-sm)">
           <span
               className="hidden 3xl:block absolute -right-1/2 top-1/2 -translate-y-1/2
            bg-primary-dark size-40 3xl:size-[calc(var(--spacing)*80*1.5)] z-0 rounded-full"></span>
          <h6 className="z-10">One-click reach</h6>
      <ContactCard name={"Michael K."} role={"Club"} email={"michael.k@club.com"} phone={"+3106715511"} />
        </div>
      </>
  )
}

export default function TeamInfoCard({className}: { className?: string }) {
  return (
      <div
          className={cn("3xl:basis-[40%] flex-grow max-w-4xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-2xl p-2", className)}>
        {/* Header Section */}
        <div className="flex items-start gap-(--space-sm) mb-(--space-sm)">
          {/* Team Logo */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-(--space-sm) shadow-lg">
            <img
                src="/leagues/afc-bournemouth.png"
                alt="Team Logo"
                className="w-10 h-10 object-contain"
            />
          </div>

          {/* Team Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h2 className="text-base font-bold text-primary mb-1">AFC Bournemouth</h2>
              <button className="text-primary hover:text-indigo-700 dark:hover:text-indigo-300">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-(--space-sm) mb-(--space-sm)">
              <span className="text-base">🇫🇮</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">United Kingdom</span>
            </div>

            <div className="flex gap-(--space-sm)">
            <span
                className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-primary rounded-full text-xs font-semibold">
              Ykkönen
            </span>
              <span
                  className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 text-primary rounded-full text-xs font-semibold">
              Tier 3
            </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-1 bg-white/50 dark:bg-gray-900/20 rounded-xl p-2">
          <div className="flex items-center gap-(--space-sm)">
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">32 players</span>
          </div>

          <div className="flex items-center gap-(--space-sm)">
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">22.7 yrs</span>
          </div>

          <div className="flex items-center gap-(--space-sm)">
            <span className="text-base text-gray-400">€</span>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">€25K</span>
          </div>

          <div className="flex items-center gap-(--space-sm)">
            <span className="text-base text-gray-400">€</span>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">€781/p</span>
          </div>
        </div>
      </div>
  )
}

interface ContactCardProps {
  name: string
  role: string
  email: string
  phone: string
}

export function ContactCard({ name, role, email, phone }: ContactCardProps) {
  return (
      <div className="bg-background border border-border rounded-2xl p-(--space-sm) space-y-(--space-sm) relative">
        <Button className="flex 3xl:hidden absolute -top-[1.1255rem] right-4 bg-primary-light">Connect</Button>
        <Button className="hidden 3xl:flex absolute -top-[1.1255rem] right-4 bg-primary-light">Direct Connect</Button>
        <div className="flex items-center gap-3">
          <User className="size-5 text-muted-foreground flex-shrink-0" />
          <span className="text-sm font-medium text-primary">{name}</span>
        </div>

        <div className="flex items-center gap-3">
          <Briefcase className="size-5 text-muted-foreground flex-shrink-0" />
          <span className="text-sm text-muted-foreground">{role}</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="size-5 text-muted-foreground flex-shrink-0" />
          <span className="text-sm text-primary">{email}</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="size-5 text-muted-foreground flex-shrink-0" />
          <span className="text-sm text-primary">{phone}</span>
        </div>
      </div>
  )
}
