import {teamMembers} from "@/lib/about-us-data";
import Image from "next/image";
import React from "react";

export function OurCraft() {
  return (
      <div className="flex flex-col gap-(--space-xl) items-center">
        <div className="flex flex-col sm:flex-row gap-(--space-md) justify-between">
          <h3 className="basis-1/2">We're building the platform for football professionals who care about progress</h3>
          <p className="basis-1/2 text-foreground/85">
            Football thrives on talent and opportunity. But scattered data, broken communication, and outdated systems
            were holding the game back.
            <br className="mb-2 sm:mb-4"/>
            Our team brings together football insiders and data scientists who share a conviction: the game deserves
            better tools. Combining our passion for football with expertise in data and technology, we built FootyLabs
            to connect players, agents, and clubs seamlessly. From scouting and career tracking to streamlined
            communication, we've created the infrastructure to move the game forward with transparency and insight at
            its core.

            <br className="mb-2 sm:mb-4"/>
            Today, our team of football practitioners and technologists helps agents, clubs and players across Europe
            focus on what matters: developing talent and unlocking potential.
          </p>
        </div>
        <Image src={"/resources/danius-conf.png"} alt={"saka"} width={500} height={500}/>


      </div>
  )
}