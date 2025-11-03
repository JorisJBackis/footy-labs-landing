"use client";


import * as React from "react";
import type {VariantProps} from "class-variance-authority";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {CheckIcon, ClipboardIcon, CopyIcon} from "lucide-react";
import {motion} from "motion/react";
import {useState} from "react";
import {AnimatePresence} from "framer-motion";

export function Copy({
                       className,
                       children,
                       asChild = false,
                       size = 16,
                       textToCopy,
                       ...props
                     }: React.ComponentProps<"button"> & { asChild?: boolean, size?: number, textToCopy: string }) {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  function handleCopy() {
    navigator.clipboard.writeText(textToCopy);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000)
  }

  return (
      <button
          className={cn(className, "flex items-center gap-0.5 hover:opacity-75 transition-all hover:text-primary")}
          {...props}
          onClick={handleCopy}
      >
        <AnimatePresence mode={"wait"}>
          {copySuccess ?
              <motion.div key={"copied"}
                  initial={{scale: 0}}
                          animate={{scale: 1}}
                          exit={{scale: 0}} transition={{duration: 0.2, ease: "easeOut"}}>
                <CheckIcon size={size} className="text-primary"/>
              </motion.div> :
              <motion.div key={"copy"}
                  initial={{scale: 0}}
                          animate={{scale: 1}}
                          exit={{scale: 0}} transition={{duration: 0.2, ease: "easeOut"}}>
                <CopyIcon size={size}/>
              </motion.div>
          }
        </AnimatePresence>
      </button>
  )
}
