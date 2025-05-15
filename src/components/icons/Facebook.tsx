import { cn } from '@/lib/utils';

export function Facebook({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className={cn('size-6', className)}>
            <path
                d="M22 12.733C22 7.17638 17.5229 2.67188 12 2.67188C6.47715 2.67188 2 7.17638 2 12.733C2 17.7547 5.65684 21.9171 10.4375 22.6719V15.6413H7.89844V12.733H10.4375V10.5164C10.4375 7.99483 11.9305 6.60199 14.2146 6.60199C15.3088 6.60199 16.4531 6.7985 16.4531 6.7985V9.27448H15.1922C13.95 9.27448 13.5625 10.0501 13.5625 10.8458V12.733H16.3359L15.8926 15.6413H13.5625V22.6719C18.3432 21.9171 22 17.7549 22 12.733Z"
                fill="currentColor"
            />
        </svg>
    );
}
