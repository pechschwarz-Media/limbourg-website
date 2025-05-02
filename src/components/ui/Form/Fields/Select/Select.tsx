'use client';

import { IconChevronDown } from '@/components/icons/IconChevronDown';
import { cn } from '@/lib/utils';
import parse from 'html-react-parser';

type InputProps = {
    label: string;
    options: { value: string; label: string }[];
} & React.InputHTMLAttributes<HTMLSelectElement>;

export function Select({ className, label, options, ...props }: InputProps) {
    return (
        <label className="relative block text-tiny border border-border-secondary bg-neutral-25 rounded-xs">
            <select
                className={cn(
                    'py-5 w-full block px-theme-lg peer rounded-xs text-text-secondary focus-visible:outline focus-visible:outline-border-primary appearance-none',
                    className,
                )}
                {...props}>
                <option
                    value=""
                    disabled
                    selected>
                    {label}
                </option>
                {options?.map((option, index) => (
                    <option
                        key={index}
                        value={option.value}>
                        {parse(option.label)}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-theme-lg">
                <IconChevronDown className="size-4" />
            </div>
        </label>
    );
}
