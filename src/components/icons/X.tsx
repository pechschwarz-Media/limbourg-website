import { cn } from '@/lib/utils';

export function X({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className={cn('size-6', className)}>
            <path
                d="M17.8428 4.24219H20.6029L14.5728 11.0196L21.6667 20.2422H16.1123L11.7618 14.6488L6.78398 20.2422H4.02219L10.4719 12.993L3.66675 4.24219H9.3622L13.2946 9.35481L17.8428 4.24219ZM16.874 18.6176H18.4035L8.53116 5.78147H6.88995L16.874 18.6176Z"
                fill="currentColor"
            />
        </svg>
    );
}
