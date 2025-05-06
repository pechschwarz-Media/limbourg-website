import { cn } from '@/lib/utils';

export default function ArrowRight({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className={cn('text-black', className)}>
            <path
                d="M9.70697 17.0449L15.414 11.3379L9.70697 5.63086L8.29297 7.04486L12.586 11.3379L8.29297 15.6309L9.70697 17.0449Z"
                fill="#27272A"
            />
        </svg>
    );
}
