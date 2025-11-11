import {teamMembers} from "@/lib/about-us-data";

export function Team() {
  return (
      <div className="flex flex-col gap-(--space-xl)">
        <div className="flex flex-col gap-(--space-sm) max-w-1/2">
          <h3 className="">We care about the quality of what we build</h3>
          <p className="">FootyLabs was created by a small, dedicated team passionate about football and technology. Our team is
            distributed across Europe, united by a shared mission — to make football management simpler, smarter, and
            more
            transparent.</p>
        </div>
        <div className="flex flex-wrap w-full gap-(--space-lg)">
          {
            teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col just sm:gap-(--space-sm) basis-[45%] lg:basis-[21%] 2xl:basis-[17%] ">
                  <div className="bg-gray-400 h-24 w-24"></div>
                  <div className="flex flex-col gap-1">
                    <span>{member.name}</span>
                    <span className="text-muted-foreground">{member.role}</span>
                  </div>
                </div>
            ))
          }

        </div>
      </div>
  )
}