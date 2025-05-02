'use client';

type InputProps = { label: string };

export function Section({ label }: InputProps) {
    return <div className="font-highlight mt-theme-lg text-text-primary">{label}</div>;
}
