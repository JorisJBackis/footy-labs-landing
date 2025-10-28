import {useState} from "react";
import {BentoBadges} from "@/components/home/bento/badges";
import {PlayerRadarBento} from "@/components/home/bento/player-modal";
import {players} from "@/components/home/bento/players-data";
import {motion} from "motion/react";

export function ClubsBento({bentoUniqueId}: { bentoUniqueId: string }) {
  const [playerIndex, setPlayerIndex] = useState<number>(0);
  return (
      <>
        {/* box-1 */}
        <div className="flex flex-col">
          <div className="basis-1/2 flex flex-col gap-0.5 sm:gap-1.5">
            <h6>Track Performance</h6>
            <p>Analyse players performance based off 40+ different metrics available on the platform</p>
          </div>
          <BentoBadges badges={["Goals per 90",
            "Shots on Target %",
            "Successful Dribbles %",
            "Key Passes per 90",
            "Tackles Won %",
            "Pass Accuracy %",
            "Interceptions per 90", "35+ more..."]} className="flex-grow border-t pt-3">
            {/*<Badge variant={"outline"}>30 more...</Badge>*/}
          </BentoBadges>
        </div>

        {/* box-2 */}
        <div className="flex justify-center items-center p-0!">
          <PlayerRadarBento player={players[playerIndex]}/>
        </div>

        {/* box-3 */}
        <div className="flex flex-col gap-0.5 sm:gap-1.5">
          <h6>Player Name</h6>
          <p
              className="text-muted-foreground">Performance Analysis - Position: Atacking Midfielder - League:
            Lihnunian A
            Lyga</p>
          <div className="flex gap-3 w-full justify-between">
            <div className="flex flex-col gap-0.5 justify-center items-center">
              <span className="text-muted-foreground font-medium">Minutes</span>
              <span className="font-semibold text-primary">643</span>
            </div>
            <div className="flex flex-col gap-0.5 justify-center items-center">
              <span className="text-muted-foreground font-medium">Goals</span>
              <span className="font-semibold text-primary">1</span>
            </div>
            <div className="flex flex-col gap-0.5 justify-center items-center">
              <span className="text-muted-foreground font-medium">Assists</span>
              <span className="font-semibold text-primary">0</span>
            </div>
            <div className="flex flex-col gap-0.5 justify-center items-center">
              <span className="text-muted-foreground font-medium">Footylabs Score</span>
              <span className="font-semibold text-green-600">8.1</span>
            </div>
          </div>
        </div>

        {/* box-4 */}
        <div className="flex flex-wrap gap-1.5 text-xs">
          {
            players.map((playerData, index) => (
                <div key={index} onClick={() => setPlayerIndex(index)}
                     className="relative px-1 basis-[48%] flex justify-center items-center border rounded-md">
                  <span className="text-center">{playerData.player_pos}</span>
                  {index === playerIndex ?
                      <motion.span
                          transition={{ease: "easeOut", duration: 0.3}}
                          layoutId={"player-button-1"} id={"player-button-1"}
                          className="absolute w-full h-full inset-0 border border-primary rounded-md"></motion.span>
                      : null}
                </div>

            ))
          }
        </div>
      </>
  )
}