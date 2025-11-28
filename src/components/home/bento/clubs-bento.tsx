import {useState} from "react";
import {BentoBadges} from "@/components/home/bento/badges";
import {PlayerRadarBento} from "@/components/home/bento/player-modal";
import {players} from "@/components/home/bento/players-data";
import {motion} from "motion/react";
import {tabTextVariants} from "@/components/ui/tabs";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {playersBentoData} from "@/components/home/bento/players-bento";
import {RotationCards} from "@/components/home/bento/rotation-cards";
import {clubsBentoData} from "@/lib/bento";

const stats = [
  {label: "Pass Accuracy", yourTeam: 85, opponent: 80},
  {label: "Duels Success", yourTeam: 48, opponent: 40},
  {label: "Aerial Duels Success", yourTeam: 51, opponent: 42},
  {label: "Set Piece Success", yourTeam: 18, opponent: 8},
]

export function ClubsBento({bentoUniqueId}: { bentoUniqueId: string }) {
  const [playerIndex, setPlayerIndex] = useState<number>(0);
  return (
      <>
        {/* box-1 */}
        <div className="flex flex-col bg-primary-dark overflow-hidden  ">
          <div className="basis-2/5 flex flex-col gap-1.5 sm:gap-1.5">
            <h6 className="text-primary-foreground">Track Performance</h6>
            <p className="text-primary-foreground">Analyse players performance based off 40+ different metrics available
              on the platform</p>
          </div>
          <div className="relative flex-grow ">
            <BentoBadges badges={["Goals per 90",
              "Shots on Target %",
              "Successful Dribbles %",
              "Key Passes per 90",
              "Tackles Won %",
              "Pass Accuracy %",
              "Interceptions per 90", "35+ more..."]}
                         className="
                         w-[130%] lg:w-[190%] 3xl:w-[130%] pt-3 relative left-1/2 -translate-x-1/2"

                         lastClassName="bg-yellow-light! text-accent-foreground!">
              {/*<Badge variant={"outline"}>30 more...</Badge>*/}
            </BentoBadges>
          </div>
        </div>

        {/* box-2 */}
        <div
            className="relative flex flex-col justify-center items-center p-0! gap-(--space-sm) overflow-hidden max-lg:border-none!">
          <div className="flex">
            <span className="hidden sm:block absolute -left-25 -top-25 3xl:-top-40 3xl:-left-40
            bg-primary size-48 3xl:size-96 blur-[200px] z-0"></span>
            <h3 className="hidden 3xl:block text-white opacity-75">As easy as clicking a button</h3>
            <PlayerRadarBento player={players[playerIndex]}/>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-(--space-sm) px-(--space-md) py-(--space-md) lg:py-0">
            {
              players.map((playerData, index) => (
                  <div key={index} onClick={() => setPlayerIndex(index)}
                       className=" relative min-h-9 px-4 py-2 flex-grow lg:basis-[48%] flex justify-center items-center border rounded-md">
                    {/*<span className="text-center">{playerData.player_pos}</span>*/}
                    <motion.div initial={false} transition={{ease: "easeOut"}}
                                variants={tabTextVariants} animate={index === playerIndex ? "active" : "inactive"}
                                className="font-(family-name:--font-syne)! font-semibold z-[49] text-center p-0!">{playerData.player_pos}</motion.div>
                    {index === playerIndex ?
                        <motion.span
                            transition={{ease: "easeOut", duration: 0.3}}
                            layoutId={"player-button-1"} id={"player-button-1"}
                            className="bg-primary absolute w-full h-full inset-0 border border-primary rounded-md"></motion.span>
                        : null}
                  </div>

              ))
            }
          </div>

        </div>

        {/* box-3 */}
        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-1.5 relative overflow-hidden justify-between">
            <span className="absolute -left-25 -top-25 3xl:-top-40 3xl:-left-40
            bg-yellow-light size-96 3xl:size-[calc(var(--spacing)*96*1.5)] z-0 rounded-full"></span>
          <div className="text-accent-foreground max-w-48 flex flex-col gap-(--space-sm) z-5">
            <h6>Player Name</h6>
            <div className="flex flex-col">
              <span className="font-semibold">Position</span>
              <p
                  className="text-accent-foreground! text-muted-foreground whitespace-nowrap">{players[playerIndex].player_pos}</p>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">League</span>
              <p
                  className="text-accent-foreground! whitespace-nowrap text-muted-foreground">Lithuanian A Lyga</p>
            </div>
          </div>
          {/*<div style={{ perspective: "1200px" }}>*/}
          <RotationCards data={clubsBentoData}/>
          {/*</div>*/}
        </div>

        {/* box-4 */}
        <div className="flex flex-wrap gap-1.5 text-xs relative overflow-hidden">
          {/* <span*/}
          {/*     className="absolute -right-1/2 top-1/2 -translate-y-1/2*/}
          {/*  bg-primary-light size-80 3xl:size-[calc(var(--spacing)*96*1.5)] z-0 rounded-full"></span>*/}

          {/*/!*<h3 className="z-10">Control the field</h3>*!/*/}

                <div className="flex-1 flex flex-col">
                  <h4 className="text-xs font-semibold text-foreground mb-2">Last Game Insights</h4>

                  {/* Chart container with Y-axis */}
                  <div className="flex gap-2 flex-1">
                    {/* Y-axis labels */}
                    <div className="flex flex-col justify-between text-[10px] text-muted-foreground py-1">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>

                    {/* Chart bars */}
                    <div
                        className="flex items-end justify-between gap-2 flex-1 border-b border-l border-border pl-2 pb-1">
                      {stats.map((stat, index) => (
                          <div key={index} className="flex flex-col items-center gap-1.5 flex-1">
                            <div className="flex items-end gap-1 h-24 w-full justify-center">
                              {/* Your team bar */}
                              <div className="w-3 bg-primary rounded-t-sm" style={{height: `${stat.yourTeam}%`}}/>
                              {/* Opponent bar */}
                              <div className="w-3 bg-yellow-mid rounded-t-sm"
                                   style={{height: `${stat.opponent}%`}}/>
                            </div>
                            <span
                                className="text-[9px] text-muted-foreground text-center leading-tight">{stat.label}</span>
                          </div>
                      ))}
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center justify-center gap-4 text-[10px] mt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-primary"/>
                      <span className="text-foreground">Your Team</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="size-2.5 rounded-full bg-yellow-mid"/>
                      <span className="text-foreground">Opponent Team</span>
                    </div>
                  </div>
                </div>

        </div>

      {/*  box-5 */}
      {/*  <div className="flex border-none">*/}
      {/*    <Button>Learn more</Button>*/}
      {/*  </div>*/}
      </>
  )
}