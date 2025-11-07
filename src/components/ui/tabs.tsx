"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import {cn} from "@/lib/utils"
import {AnimatePresence, MotionConfig} from "framer-motion";
import {motion} from "motion/react";
import {create} from "zustand/react";

type Store = {
  value: string;
  setValue: (value: string) => string;
}

const useStore = create<Store>()((set) => ({
  value: "Clubs",
  setValue: (newValue) => set((state) => ({
    value: newValue
  }))
}))


function Tabs({
                className,
                ...props
              }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  const {value, setValue} = useStore();
  return (
      <MotionConfig transition={{duration: 0.3}}>
        <TabsPrimitive.Root
            data-slot="tabs"
            className={cn("flex flex-col gap-2", className)}
            value={value}
            onValueChange={(value) => setValue(value)}
            {...props}
        />
      </MotionConfig>
  )
}

function TabsList({
                    className,
                    ...props
                  }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
      <TabsPrimitive.List
          data-slot="tabs-list"
          className={cn(
              "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
              className
          )}
          {...props}
      />
  )
}

const tabTextVariants = {
  active: {color: "var(--primary-foreground)"},
  inactive: {color: "var(--muted-foreground)"}
}

function TabsTrigger({
                       tabId,
                       className,
                       children,
                       ...props
                     }: React.ComponentProps<typeof TabsPrimitive.Trigger> & { tabId: string }) {
  const {value} = useStore();
  return (
      <TabsPrimitive.Trigger
          data-slot="tabs-trigger"
          className={cn(
              "relative bg-transparent  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 " +
              "",
              className
          )}
          {...props}
      >
        <motion.div initial={false} transition={{ease: "easeOut"}}
                    variants={tabTextVariants} animate={value === props.value ? "active" : "inactive"} className="z-[49]">
          {children}
        </motion.div>
        {value === props.value ? (
                <motion.div layoutId={`tab-bg-${tabId}`} id={`tab-bg-${tabId}`}
                            transition={{
                              ease: "easeOut",

                            }} className="rounded-md absolute top-0 right-0 w-full h-full bg-primary">
                </motion.div>
            ) :
            null
        }
      </TabsPrimitive.Trigger>
  )
}

function TabsContent({
                       className,
                       children,
                       ...props
                     }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  const {value} = useStore();
  return (
      <AnimatePresence mode={"wait"}>
        <TabsPrimitive.Content
            data-slot="tabs-content"
            className={cn("flex-1 outline-none", className)}
            {...props}
            asChild={true}
        >
          <motion.div initial={{x: -20, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: 20, opacity: 0}}>
            {children}
          </motion.div>
        </TabsPrimitive.Content>
      </AnimatePresence>
  )
}

export {Tabs, TabsList, TabsTrigger, TabsContent}
