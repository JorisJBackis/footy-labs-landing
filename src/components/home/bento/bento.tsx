"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardDescription, CardHeader} from "@/components/ui/card";

export function Bento() {
  return (
      <section>
        <Tabs>
          <TabsList>
            <TabsTrigger value={"Clubs"}>Clubs</TabsTrigger>
            <TabsTrigger value={"Agents"}>Agents</TabsTrigger>
            <TabsTrigger value={"Players"}>Players</TabsTrigger>
          </TabsList>
          <TabsContent value={"Clubs"}>
            Clubs
            {/*<Card className="z-50">*/}
            {/*  <CardHeader>Clubs</CardHeader>*/}
            {/*</Card>*/}
          </TabsContent>
          <TabsContent value={"Agents"}>
            Agents
            {/*<Card>*/}
            {/*  <CardHeader>Agents</CardHeader>*/}
            {/*  /!*<CardDescription>temp</CardDescription>*!/*/}
            {/*</Card>*/}
          </TabsContent>
          <TabsContent value={"Players"}>
            Players
            {/*<Card>*/}
            {/*  <CardHeader>Players</CardHeader>*/}

            {/*</Card>*/}
          </TabsContent>
        </Tabs>
      </section>
  )
}