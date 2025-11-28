import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

export function BentoBadges({children, badges, className, badgeClassName,lastClassName}: {
  children?: React.ReactNode,
  badges: string[],
  className?: string,
  lastClassName?: string,
  badgeClassName?: string
}) {
  return (
      <div className={cn("flex flex-wrap flex-grow justify-center items-center gap-1.5", className)}>
        {
          badges.map((badge, index) => (
              <Badge key={index}
                     className={cn(index === badges.length - 1 && !lastClassName ?
                             "bg-accent! text-accent-foreground!" :
                             lastClassName && index === badges.length - 1 ? lastClassName : "",
                         "w-fit bg-background/10 border-none text-primary-foreground transition-opacity hover:opacity-75 duration-300 ease-out px-8 py-4",
                     badgeClassName)}
                     variant="outline">{badge}</Badge>
          ))
        }
        {children}
      </div>
  )
}