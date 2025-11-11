import {BentoBadges} from "@/components/home/bento/badges";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {MapPin} from "lucide-react";
import {Button} from "@/components/ui/button";

export function AgentsBento() {
  return (
      <>
        <div className="flex flex-col">
          <div className="basis-1/2 flex flex-col gap-1.5 sm:gap-1.5">
            <h6>Contact Clubs Directly</h6>
            <div className="basis-1/2 flex flex-col gap-(--space-sm)">
              <div
                  className="bg-muted flex flex-row justify-between p-(--space-sm) border gap-(--space-sm) rounded-md text-muted-foreground">
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
                </div>
                <Button>Contact</Button>
              </div>
            </div>
          </div>


        </div>

        <div>
          <h6>Find matching club needs for your players</h6>
        </div>
        <div className="flex flex-col gap-(--space-sm)">
          <h6>Manage your roster</h6>
          <div className="flex gap-(--space-sm)">
            <div
                className="bg-muted grow flex flex-col p-(--space-sm) border gap-(--space-sm) rounded-md text-muted-foreground">
              <div className="flex justify-between items-center">
                <div className="flex gap-(--space-sm) items-center">
                  <Avatar>
                    <AvatarImage alt="fk-transinvest" src="/leagues/fk-transinvest.webp">
                    </AvatarImage>
                    <AvatarFallback>FK</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm  text-black dark:text-white">Your Player 1</span>
                    <span className="text-sm">Attacking Midfielder</span>
                  </div>
                </div>
              </div>
            </div>
            <div
                className="bg-muted grow flex flex-col p-(--space-sm) border gap-(--space-sm) rounded-md text-muted-foreground">
              <div className="flex justify-between items-center">
                <div className="flex gap-(--space-sm) items-center">
                  <Avatar>
                    <AvatarImage alt="fk-transinvest" src="/leagues/fk-transinvest.webp">
                    </AvatarImage>
                    <AvatarFallback>FK</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm  text-black dark:text-white">Your Player 2</span>
                    <span className="text-sm">Central Midfielder</span>
                  </div>
                </div>
              </div>
            </div>
            <div
                className="bg-muted grow flex flex-col p-(--space-sm) border gap-(--space-sm) rounded-md text-muted-foreground">
              <div className="flex justify-between items-center">
                <div className="flex gap-(--space-sm) items-center">
                  <Avatar>
                    <AvatarImage alt="fk-transinvest" src="/leagues/fk-transinvest.webp">
                    </AvatarImage>
                    <AvatarFallback>FK</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm  text-black dark:text-white">Your Player 3</span>
                    <span className="text-sm">Defensive Midfielder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-(--space-sm)">
          <h6>All Data in One Place</h6>
          <BentoBadges badges={[
            "Player Profiles",
            "Contracts",
            "Market Values",
            "Transfer History",
            "Club Contacts",
            "Injury Records",
            // "Scouting Notes",
          ]} className="flex-grow border-t pt-3">
          </BentoBadges>
        </div>
      </>
  )
}
