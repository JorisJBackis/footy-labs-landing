import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

export function BentoBadges({children, badges, className}: {
  children?: React.ReactNode,
  badges: string[],
  className?: string
}) {
  return (
      <div className={cn("flex flex-wrap justify-center items-center gap-1.5", className)}>
        {
          badges.map((badge, index) => (
              <Badge key={index} className="transition-colors hover:text-muted-foreground duration-300 ease-out py-1" variant="outline">{badge}</Badge>
          ))
        }
        {children}
      </div>
  )
}