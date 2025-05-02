import { IconClose } from '@/components/icons/IconClose';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import './globals.css';

const saans = localFont({
    src: [
        {
            path: '../../public/fonts/Saans-TRIAL-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Saans-TRIAL-LightItalic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Saans-TRIAL-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Saans-TRIAL-RegularItalic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Saans-TRIAL-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Saans-TRIAL-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Saans-TRIAL-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Saans-TRIAL-SemiBoldItalic.woff2',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../../public/fonts/Saans-TRIAL-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Saans-TRIAL-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-saans',
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
                    'text-base font-base text-text-primary font-(family-name:--font-saans) leading-base',
                )}>
                {children}
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
        </html>
    );
}
