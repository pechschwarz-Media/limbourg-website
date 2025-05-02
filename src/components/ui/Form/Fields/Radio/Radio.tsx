'use client';

type InputProps = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Radio({ label, ...props }: InputProps) {
    return (
        <label className="text-tiny p-theme-xl flex items-center justify-between gap-theme-xl cursor-pointer bg-neutral-25 border border-border-secondary rounded-xs">
            <div className="font-highlight text-text-primary">{label}</div>
            <input
                type="radio"
                className="peer absolute opacity-0 pointer-events-none"
                {...props}
            />
            <div className="relative size-4 rounded-full border border-border-secondary [&>div]:hidden peer-checked:[&>div]:block">
                <div className="absolute size-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950"></div>
            </div>
        </label>
    );
}
