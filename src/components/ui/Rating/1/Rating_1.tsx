import { cva, VariantProps } from 'class-variance-authority';

const ratingsVariants = cva(
    'h-8 border inline-flex items-center rounded-full pl-theme-xs pr-theme-lg font-highlight text-small',
    {
        variants: {
            variant: {
                dark: 'border-neutral-800 bg-neutral-900 text-text-alternate',
                light: 'border-neutral-200 bg-neutral-25 text-text-primary',
                darkPrimary: 'border-brand-primary-800 bg-brand-primary-900 text-text-alternate',
                lightPrimary: 'border-neutral-200 bg-neutral-25 text-text-primary',
            },
        },
        defaultVariants: {
            variant: 'light',
        },
    },
);

type Rating1Props = {
    variant: VariantProps<typeof ratingsVariants>['variant'];
    className?: string;
};

export function Rating_1({ className, variant }: Rating1Props) {
    return (
        <div className="crisalix_widget_wrap_681ef77e">
            <script
                type="text/javascript"
                src="https://pro.crisalix.com/reviews_widget.js?token=208177cba0bbb2e6adc0dff6f8bc9812&type=micro_review_count&selector=crisalix_widget_wrap_681ef77e"
                async></script>
        </div>
    );
}
