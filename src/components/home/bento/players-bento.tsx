import {Copy} from "@/components/contact/copy";
import {cn} from "@/lib/utils";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {MapPin, TwitterIcon} from "lucide-react";
import {BentoBadges} from "@/components/home/bento/badges";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import Link from "next/link";
import {ShareButtons} from "@/components/home/bento/share-buttons";

const playersBentoData = {
  profileLink: "https://app.footylabs.ai/player/02088ca6-ac3c-4177-bcd4-7968cc2f78e1",
  metrics: [
    {
      label: "FootyLabs Score",
      value: "7.2",
      subtitle: "+8.0% this week",
      borderColor: "border-l-green-500",
    },
    {
      label: "Market Value",
      value: "€575,000",
      subtitle: "Estimated value",
      borderColor: "border-l-blue-500",
    },
    {
      label: "Profile Views",
      value: "113",
      subtitle: "This month",
      borderColor: "border-l-purple-500",
    },
    {
      label: "League Ranking",
      value: "#53",
      subtitle: "In your position",
      borderColor: "border-l-orange-500",
    },
  ]
}

export function PlayersBento() {
  return (
      <>
        <div className="flex flex-col">
          <div className="basis-1/2 flex flex-col gap-1.5 sm:gap-1.5">
            <h6>See club needs</h6>
            <p className="">Discover opportunities matched to your profile and playing style</p>


          </div>
          <BentoBadges badges={[
            "Position",
            "Age Range",
            "Preferred Foot",
            "Market Value",
            "Playing Style",
            "Physical Attributes",
            "Availability Status",
            "Transfer Interest",
            "League Experience",
            "Player Role",
            "Salary Range",
            "20+ more...",
          ]} className="flex-grow border-t pt-3">
          </BentoBadges>

        </div>

        <div className="basis-1/2 flex flex-col gap-(--space-sm)">
          <h6>Analyze your performance</h6>
          <p>Track your progress with AI-powered insights and data-driven metrics</p>
          <div className="grid grid-cols-2 grid-rows-2 gap-(--space-sm) h-full">
            {
              playersBentoData.metrics.map((metric, index) => {
                return (
                    <div key={index}
                         className={cn("flex flex-col gap-1 border p-(--space-sm) pl-(--space-md) rounded-md border-l-4 justify-center", metric.borderColor)}>
                      <span className="font-medium">{metric.label}</span>
                      <span className="text-xl font-bold">{metric.value}</span>
                      <span className="text-muted-foreground text-sm">{metric.subtitle}</span>
                    </div>
                )
              })
            }
          </div>

        </div>
        <div>
          <div className="basis-1/2 flex flex-col gap-1.5">
            <h6>Make profile</h6>
            <p>Share your professional profile with clubs and agents worldwide</p>
            {/*<div className="flex gap-(--space-sm) items-center">*/}

            <div className='rounded-md bg-muted text-muted-foreground flex justify-between border'>
              <Link href={playersBentoData.profileLink} target={"_blank"}
                    className="p-(--space-sm) max-w-[80%] truncate hover:underline">{playersBentoData.profileLink}</Link>
              <Copy textToCopy={playersBentoData.profileLink} className="p-(--space-sm)"/>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">Share:</span>
              <ShareButtons/>
            </div>
            {/*</div>*/}
          </div>
        </div>

        <div>
          <div className="basis-1/2 flex flex-col gap-(--space-sm)">
            <div className="bg-muted flex flex-col p-(--space-sm) transition-shadow shadow-sm gap-(--space-sm) rounded-md text-muted-foreground">
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
                <div>
                  <Badge variant="default" className="bg-green-600">Exellent fit </Badge>
                </div>
              </div>
              <div className="flex text-xs gap-1">
                <span className="flex gap-0.5 items-center justify-center">
                  <MapPin className="h-3 w-3"/>
                Lithuania
                </span>
                <span>6-10k</span>
                <span>Age: 20-26</span>
              </div>
            </div>
            <p className="text-sm">12 new opportunities this week</p>
          </div>
        </div>
      </>
  )
}