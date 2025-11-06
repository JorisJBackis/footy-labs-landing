import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function splitBySpace(text): string[] {
  return text.split(" ")
      .map(text => text + ' ')
}