import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges the tailwind clases (using twMerge). Conditionally removes false values
 * @param inputs The tailwind classes to merge
 * @returns className string to apply to an element or HOC
 */
export default function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Converts a date to a string by using the current locale.
 * @param date
 * @returns string representation of human readable date
 */
export function toHumanReadable(date: Date): string {
    const now = new Date();
    const oneDay = 1000 * 60 * 60 * 24;

    // Normalize times (remove hours/minutes/seconds)
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const diffDays = Math.floor(
        (startOfToday.getTime() - startOfDate.getTime()) / oneDay
    );

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays > 1 && diffDays <= 7) return `Previous ${diffDays} days`;

    // Fallback: show date string (you can format with Intl if you want locale support)
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}


/**
 * Converts a record to an array of key-value pairs.
 * @param record \<Record\<K, T\>\>
 * @returns 
 */
export function toArray<T,K extends string | number | symbol>(record: Record<K, T>): [K, T][] {
    return Object.entries(record) as [K, T][];
}
