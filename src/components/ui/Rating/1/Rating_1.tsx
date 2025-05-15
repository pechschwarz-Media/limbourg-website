import { cva, VariantProps } from 'class-variance-authority';
import Script from 'next/script';

export function Rating_1() {
    return (
        <div className="crisalix_widget_wrap_681ef77e">
            <Script
                type="text/javascript"
                src="https://pro.crisalix.com/reviews_widget.js?token=208177cba0bbb2e6adc0dff6f8bc9812&type=micro_review_count&selector=crisalix_widget_wrap_681ef77e"
                async></Script>
        </div>
    );
}
