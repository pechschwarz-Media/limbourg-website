import { cn } from '@/lib/utils';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ className, children, ...props }: CheckboxProps) {
    return (
        <input
            type="checkbox"
            className={cn(className)}
            {...props}>
            {children}
        </input>
    );
}
