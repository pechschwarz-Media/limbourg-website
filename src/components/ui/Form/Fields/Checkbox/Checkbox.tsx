'use client';

import { IconCheck } from '@/components/icons/IconCheck';
import parse from 'html-react-parser';

type InputProps = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ label, ...props }: InputProps) {
    return (
        <label className="flex items-center gap-theme-lg text-tiny text-text-secondary">
            <input
                type="checkbox"
                className="peer absolute opacity-0 pointer-events-none"
                {...props}
            />
            <div className="relative size-5 rounded-xs border border-border-secondary [&>div]:hidden peer-checked:[&>div]:block">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <IconCheck className="size-4" />
                </div>
            </div>
            <div>{parse(label)}</div>
        </label>
    );
}
