import {BentoBadges} from "@/components/home/bento/badges";

export function AgentsBento() {
  return (
      <>
        <div className="flex flex-col">
          <div className="basis-1/2 flex flex-col gap-1.5 sm:gap-1.5">
            <h6>Propose players to clubs</h6>
            <p className="">Discover opportunities matched to your profile and playing style</p>


          </div>


        </div>

        <div>

          Coming soon!
        </div>
        <div>
          Coming soon!
          {/*<BentoBadges badges={} />*/}
        </div>
        <div className="flex flex-col gap-(--space-sm)">
          <h6>Manage Data in One Place</h6>
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
