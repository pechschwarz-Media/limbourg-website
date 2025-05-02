'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

type InputProps = { label: string } & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, label, ...props }: InputProps) {
    const [value, setValue] = useState('');

    return (
        <label className="relative block text-tiny border border-border-secondary bg-neutral-25 rounded-xs">
            <input
                className={cn(
                    'pb-3 pt-7 w-full block px-theme-lg peer rounded-xs focus-visible:outline focus-visible:outline-border-primary',
                    className,
                )}
                {...props}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div
                className={cn(
                    'absolute top-1/2 -translate-y-1/2 text-text-secondary left-theme-lg peer-focus:top-3 peer-focus:translate-y-0 transition-all',
                    value && 'top-3 translate-y-0',
                )}>
                {label}
            </div>
        </label>
    );
}
