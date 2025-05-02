'use client';

import { cn } from '@/lib/utils';

type InputProps = { label: string; rows: number } & React.InputHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, label, rows, ...props }: InputProps) {
    return (
        <label className="relative block text-tiny border border-border-secondary bg-neutral-25 rounded-xs">
            <textarea
                className={cn(
                    'pb-3 pt-7 block w-full px-theme-lg peer rounded-xs focus-visible:outline focus-visible:outline-border-primary',
                    className,
                )}
                rows={rows}
                {...props}
            />
            <div className={cn('absolute top-[13px] text-text-secondary left-theme-lg transition-all')}>{label}</div>
        </label>
    );
}
