import styles from "@/components/home/get-started/get-started.module.scss";
import {Button} from "@/components/ui/button";
import {ContactDialog} from "@/components/contact/contact-dialog";
import {cn} from "@/lib/utils";

export function GetStarted() {
  return (
      <section className={`container overflow-hidden ${styles.started}`}>
        <h3>Join in 3 easy steps</h3>
        <div className={styles.started__content}>
          <div className={styles.started__content__roadmap}>
            <div>
              <div>
                <span className="font-bold">1</span>
                <span className="h-full w-0 border"></span>
              </div>
              <div>
                <h6>Book a call</h6>
                <p>Book a call with us. We'll set you up and provide free trial account according to your needs.</p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold">2</p>
                <span className="h-full w-0 border"></span>
              </div>
              <div>
                <h6>Find yourself</h6>
                <p>From clubs to individual players, onboard effortlessly with automatically connected data.</p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold">3</p>
                <span className="h-full w-0 border"></span>
              </div>
              <div>
                <h6>Dedicated Onboarding</h6>
                <p>Our team will guide you through the dashboard, helping you analyze, scout, and connect
                  effortlessly.</p>
                <ContactDialog>
                  <Button>Get Started</Button>
                </ContactDialog>
              </div>
            </div>
          </div>
       <PlayerDiscovery />
        </div>
      </section>
  )
}

export function PlayerDiscovery() {
  const players = [
    {
      name: "Lucas Silva",
      position: "CM",
      country: "Brazil",
      flag: "🇧🇷",
      image: "/get-started/young-male-footballer.jpg",
    },
    {
      name: "Emma Larsson",
      position: "ST",
      country: "Sweden",
      flag: "🇸🇪",
      image: "/get-started/female-footballer.jpg",
    },
    {
      name: "Marcus Johnson",
      position: "GK",
      country: "USA",
      flag: "🇺🇸",
      image: "/get-started/goalkeeper-portrait.jpg",
    },
    {
      name: "Sofia Martinez",
      position: "RW",
      country: "Spain",
      flag: "🇪🇸",
      image: "/get-started/spanish-female-footballer.jpg",
    },
  ]

  return (
      <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl">
        {/* Yellow geometric background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
          {/* Geometric shapes */}
          <div className="absolute bottom-0 left-0 w-32 h-48 bg-yellow-500 transform -skew-x-12 translate-y-12" />
          <div className="absolute bottom-0 left-24 w-32 h-40 bg-yellow-600 transform -skew-x-12 translate-y-12" />
          <div className="absolute bottom-0 right-24 w-32 h-48 bg-yellow-600 transform -skew-x-12 translate-y-12" />
          <div className="absolute bottom-0 right-0 w-32 h-40 bg-yellow-500 transform -skew-x-12 translate-y-12" />
        </div>

        {/* Content card */}
        <div className="relative h-full flex items-center justify-center p-6">
          <div className="bg-background rounded-2xl shadow-xl p-6 w-full max-w-md">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 ">
              <Button variant="outline" className="px-4 py-2 border  rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                Position
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Button>
              <Button variant="outline" className="px-4 py-2 border  rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                League
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Button>
              <Button variant="outline" className="px-4 py-2 border  rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                Age Range
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-50">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Button>
              {/*<button className="w-10 h-10 border  rounded-lg transition-colors flex items-center justify-center">*/}
              {/*  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">*/}
              {/*    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />*/}
              {/*  </svg>*/}
              {/*</button>*/}
            </div>

            {/* Player avatars */}
            <div className="flex gap-4 justify-center">
              {players.map((player, index) => (
                  <div key={index} className={cn("relative group cursor-pointer", index === players.length-1 ? "hidden sm:block" : "")}>
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white shadow-md transition-transform group-hover:scale-105">
                      <img
                          src={player.image || "/placeholder.svg"}
                          alt={player.name}
                          className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Country flag badge */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-background rounded-full shadow-md flex items-center justify-center text-xs">
                      {player.flag}
                    </div>
                    {/* Tooltip on hover */}
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2  text-primary-foreground px-3 py-1.5 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-primary">
                      {player.name}
                      <div className="text-primary-foreground/60">{player.position}</div>
                    </div>
                  </div>
              ))}
            </div>

            {/* Bottom text */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Discover opportunities that fit you
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
