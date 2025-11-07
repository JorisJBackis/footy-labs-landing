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
import {PlayersBento} from "@/components/home/bento/players-bento";
import {AgentsBento} from "@/components/home/bento/agents-bento";


export function Bento({bentoUniqueId}: { bentoUniqueId: string}) {
  return (
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
            <AgentsBento />
          </TabsContent>
          <TabsContent value={"Players"} className={bento.bento__content}>
            <PlayersBento />
          </TabsContent>
        </Tabs>
  )
}

