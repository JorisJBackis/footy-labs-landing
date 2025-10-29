"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardDescription, CardHeader} from "@/components/ui/card";
import bento from "@/components/home/bento/bento.module.scss";
import {PlayerRadarBento} from "@/components/home/bento/player-modal";
import {BentoBadges} from "@/components/home/bento/badges";
import {Badge} from "@/components/ui/badge";
import {useState} from "react";
import {players} from "@/components/home/bento/players-data";
import {ClubsBento} from "@/components/home/bento/clubs-bento";


export function Bento({bentoUniqueId}: { bentoUniqueId: string }) {
  return (
      <section className={`container overflow-hidden ${bento.bento}`}>
        <h3>Footy Labs - a platform for everyone involved in football</h3>
        <Tabs className={bento.bento__tabs}>
          <TabsList className={`bg-transparent ${bento.bento__tabslist}`}>
            <TabsTrigger tabId={bentoUniqueId} value={"Clubs"}>Clubs</TabsTrigger>
            <TabsTrigger tabId={bentoUniqueId} value={"Agents"}>Agents</TabsTrigger>
            <TabsTrigger tabId={bentoUniqueId} value={"Players"}>Players</TabsTrigger>
          </TabsList>
          <TabsContent value={"Clubs"} className={bento.bento__content}>
            <ClubsBento bentoUniqueId={bentoUniqueId}/>
          </TabsContent>
          <TabsContent value={"Agents"} className={bento.bento__content}>
            <div className="bg-green-400">
              Coming soon!

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
          </TabsContent>
          <TabsContent value={"Players"} className={bento.bento__content}>
            <div className="flex flex-col bg-blue-400">
              <div className="basis-1/2 flex flex-col gap-1.5 sm:gap-1.5">
                <h6>Track Performance</h6>
                {/*<p>Analyse players performance based off 40+ different metrics available on the platform</p>*/}
              </div>
              {/*<BentoBadges badges={[]} className="flex-grow border-t pt-3">*/}
                {/*<Badge variant={"outline"}>30 more...</Badge>*/}
              {/*</BentoBadges>*/}
            </div>

            <div className="basis-1/2 flex flex-col gap-1.5 sm:gap-1.5">
              <h6>Apply directly</h6>
              <p>Profile showcase...</p>
            </div>
            <div>
              <div className="basis-1/2 flex flex-col gap-1.5 sm:gap-1.5">
                <h6>Make profile</h6>
                <p>Profile showcase...</p>
              </div>
            </div>
            <div>
              <div className="basis-1/2 flex flex-col gap-1.5 sm:gap-1.5">
                <h6>See club needs</h6>
                <p>Club needs showcase...</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
  )
}

