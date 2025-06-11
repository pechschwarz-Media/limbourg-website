'use client';

import { IconChevronDown } from '@/components/icons/IconChevronDown';
import { cn } from '@/lib/utils';
import parse from 'html-react-parser';

import React, { forwardRef } from 'react';

type Option = { value: string; label: string };

type InputProps = {
    label: string;
    options: Option[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, InputProps>(
    ({ className, label, options, value, onChange, ...props }, ref) => {
        return (
            <label className="relative block text-tiny border border-border-secondary bg-neutral-25 rounded-xs">
                <select
                    ref={ref}
                    className={cn(
                        'py-5 w-full block px-theme-lg peer rounded-xs text-text-secondary focus-visible:outline focus-visible:outline-border-primary appearance-none',
                        className,
                    )}
                    value={value}
                    onChange={onChange}
                    {...props}>
                    <option
                        value=""
                        disabled>
                        {label}
                    </option>
                    {options.map((option, index) => (
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
    },
);

Select.displayName = 'Select'; // Hilfreich für DevTools & TS
