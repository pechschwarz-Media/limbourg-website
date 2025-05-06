import { cn } from '@/lib/utils';

type TaglineProps = {
    children: React.ReactNode;
    className?: string;
};

export function Tagline({ children, className }: TaglineProps) {
    return <div className={cn('uppercase font-highlight tracking-r-sm text-neutral-400', className)}>{children}</div>;
}
