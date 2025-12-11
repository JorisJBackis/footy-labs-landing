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
        <div className="flex w-full gap-4 h-[600px]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex-[1] relative">
              <Image
                  src="/resources/about-us_bento3.jpg"
                  alt="photo"
                  fill
                  className="object-cover rounded-xl"
              />
            </div>

            <div className="flex-[2] relative">
              <Image
                  src="/resources/about-us_bento1.jpg"
                  alt="photo"
                  fill
                  className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex-[3] relative">
              <Image
                  src="/resources/about-us_bento2.jpg"
                  alt="photo"
                  fill
                  className="object-cover rounded-xl"
              />
            </div>

            <div className="flex-[2] relative">
              <Image
                  src="/resources/about-us_bento4.jpg"
                  alt="photo"
                  fill
                  className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>


      </div>
  )
}