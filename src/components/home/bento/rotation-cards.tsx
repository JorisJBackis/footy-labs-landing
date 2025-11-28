"use client";

import {cn} from "@/lib/utils";
import {motion} from "motion/react";
import {perspective} from "next-sanity/src/live/hooks/context";

export function RotationCards({className, data}: { className?: string, data: any }) {
  return (
      <div style={{perspective: "1200px"}} className="w-full max-w-2xl">
        <div
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(15deg) rotateY(-35deg)",
            }}
            className="grid grid-cols-2 grid-rows-2 gap-4 -translate-x-0 -translate-y-0 lg:translate-x-16 lg:translate-y-4 3xl:-translate-x-16"
        >
          {data.metrics.map((metric, index) => (
              <div
                  key={index}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                  className={`bg-background flex flex-col gap-1 border p-4 pl-6 rounded-lg border-l-4 justify-center shadow-lg ${metric.borderColor}`}
              >
                <span className="font-medium text-crisp">{metric.label}</span>
                <span className="text-2xl font-bold text-crisp">{metric.value}</span>
                <span className="text-muted-foreground text-sm text-crisp">{metric.subtitle}</span>
              </div>
          ))}
        </div>
      </div>
  )
}