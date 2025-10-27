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
      <TabsPrimitive.Root
          data-slot="tabs"
          className={cn("flex flex-col gap-2", className)}
          value={value}
          onValueChange={(value) => setValue(value)}
          {...props}
      />
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
  inactive: {color: "var(--foreground)"}
}

function TabsTrigger({
                       className,
                       children,
                       ...props
                     }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const {value} = useStore();
  return (
      // <div className="relative flex-1 items-center justify-center">
      <TabsPrimitive.Trigger
          data-slot="tabs-trigger"
          className={cn(
              "relative bg-transparent  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 " +
              "",
              className
          )}
          {...props}
      >
        <motion.div transition={{duration: 2, ease: "easeOut"}}
                    variants={tabTextVariants} animate={value === props.value ? "active" : "inactive"} className="z-50">
          {children}
        </motion.div>
        {value === props.value ? (
                <motion.div layoutId="tab-bg" id="tab-bg"
                            transition={{
                              ease: "easeOut",
                              duration: 2
                            }} className="rounded-md absolute top-0 right-0 w-full h-full bg-primary">
                </motion.div>
            ) :
            null
        }
      </TabsPrimitive.Trigger>
      // </div>
  )
}

function TabsContent({
                       className,
                       children,
                       ...props
                     }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  const {value} = useStore();
  return (
      // <AnimatePresence mode={"wait"}>
      <motion.div initial={{x: -200, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: 200, opacity: 0}}
                  transition={{duration: 0.2}}>
        {/*<span>{value}</span>*/}
        <TabsPrimitive.Content
            data-slot="tabs-content"
            className={cn("flex-1 outline-none", className)}
            {...props}
        >
          {children}
        </TabsPrimitive.Content>
      </motion.div>
      // </AnimatePresence>
  )
}

export {Tabs, TabsList, TabsTrigger, TabsContent}
