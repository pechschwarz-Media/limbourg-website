import { Button } from '@/components/ui/Button/Button';
import { AcfButton } from '@/lib/types';
import { cn } from '@/lib/utils';

export type ButtonGroupProps = {
    className?: string;
    buttons: { button: AcfButton }[];
};

export function ButtonGroup({ className, buttons }: ButtonGroupProps) {
    return (
        <div className={cn('flex flex-col md:flex-row items-center gap-theme-md', className)}>
            {buttons?.map((button, index) => {
                return (
                    <Button
                        {...button?.button}
                        as="link"
                        key={index}>
                        {button?.button?.link?.title}
                    </Button>
                );
            })}
        </div>
    );
}
