import {teamMembers} from "@/lib/resources-data";

export function OurCraft() {
  return (
      <div className="flex flex-col gap-(--space-xl)">
        <div className="flex flex-row gap-(--space-sm) justify-between">
          <h3 className="basis-1/2">We're building the platform for football professionals who care about progress</h3>
          <p className="basis-1/2 text-foreground/85">
            Football used to feel pure — driven by talent, trust, and opportunity. But over time,
            that clarity has been clouded by scattered data, broken communication, and outdated systems that slow
            everyone down. Frustrated by how disconnected the ecosystem became, we set out to build something better — a
            platform that helps players, agents, and clubs work together seamlessly.
            <br/>
            <br/>
            What started as a simple player management tool has grown into a connected system that streamlines scouting,
            career tracking, and communication across football. We don’t see FootyLabs as just another management
            platform, but as a new way to move the game forward — with transparency, insight, and connection at its
            core.
            <br/>
            <br/>
            Today, players, agents, and clubs across Europe use FootyLabs to simplify their workflows and focus on what
            really matters: growing the game and unlocking potential.</p>
        </div>

      </div>
  )
}