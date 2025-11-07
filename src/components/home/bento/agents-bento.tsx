import {BentoBadges} from "@/components/home/bento/badges";

export function AgentsBento() {
  return (
      <>
        <div className="flex flex-col">
          <div className="basis-1/2 flex flex-col gap-1.5 sm:gap-1.5">
            <h6>Propose players to clubs</h6>
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

        <div>
          Coming soon!
        </div>
        <div>
          Coming soon!
          {/*<BentoBadges badges={} />*/}
        </div>
        <div>
          Coming soon!
        </div>
      </>
  )
}
