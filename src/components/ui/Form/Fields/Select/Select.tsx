'use client';

import { IconChevronDown } from '@/components/icons/IconChevronDown';
import { cn } from '@/lib/utils';
import parse from 'html-react-parser';
import { useSearchParams } from 'next/navigation';

type InputProps = {
    label: string;
    options: { value: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, label, options, ...props }: InputProps) {
    const searchParams = useSearchParams();
    const vorauswahl = searchParams.get('auswahl');

    return (
        <label className="relative block text-tiny border border-border-secondary bg-neutral-25 rounded-xs">
            <select
                className={cn(
                    'py-5 w-full block px-theme-lg peer rounded-xs text-text-secondary focus-visible:outline focus-visible:outline-border-primary appearance-none',
                    className,
                )}
                {...props}
                defaultValue={vorauswahl || ''}>
                <option
                    value=""
                    disabled>
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
