"use client";
import {motion} from "motion/react";

export function StaggeredBlurText({
                                    textArr,
                                    blur = 10,
                                    initDelay = 0,
                                    delay = 0.1
                                  }) {
  return (
      <>
        {textArr.map((letter, index) => {
          console.log(letter);
          return (
              <motion.span key={index}
                           style={{
                             whiteSpace: 'pre-wrap',
                             display: 'inline-block',
                              // Force hardware acceleration
                             willChange: 'transform, opacity'
                           }}
                           initial={{
                             opacity: 0,
                             filter: `blur(${blur}px)`,
                             y: 20
                           }}
                           animate={{
                             opacity: 1,
                             filter: `blur(0px)`,
                             y: 0
                           }}
                           transition={{
                             delay: initDelay + index * delay,
                             // ease: [0.165, 0.84, 0.44, 1],
                             // ease: [0.19, 1, 0.22, 1],
                             ease: [0.215, 0.61, 0.355, 1],
                             duration: 0.4
                           }}>
                {letter}
              </motion.span>
          )
        })}
      </>
  )
}