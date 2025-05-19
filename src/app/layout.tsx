import { IconClose } from '@/components/icons/IconClose';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Script from 'next/script';

const saans = localFont({
    src: [
        {
            path: '../../public/fonts/aeonik-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/aeonik-medium.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-aeonik',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const { isEnabled } = await draftMode();

    return (
        <html
            lang="de"
            className="scroll-smooth">
            <body
                className={cn(
                    saans.variable,
                    'text-base font-base text-text-primary font-(family-name:--font-aeonik) leading-base mt-[72px]',
                )}>
                <Header />
                {children}
                <Footer />
                {isEnabled && (
                    <div className="bg-system-info-600 fixed bottom-0 left-0 z-[100] text-small px-8 py-2 w-full text-center text-white">
                        Du befindest dich im Draft-Mode!
                        <Link
                            href="/api/draft/disable/"
                            prefetch={false}
                            className="absolute right-8 top-1/2 -translate-y-1/2">
                            <IconClose className="size-5" />
                        </Link>
                    </div>
                )}
            </body>
            <Script
                type="text/javascript"
                src="https://pro.crisalix.com/reviews_widget.js?token=208177cba0bbb2e6adc0dff6f8bc9812&type=micro_review_count&selector=crisalix_widget_wrap_681ef77e"
                async></Script>
        </html>
    );
}
