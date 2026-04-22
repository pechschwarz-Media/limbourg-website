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
            <Script
                src="https://cloud.ccm19.de/app.js?apiKey=1fa07ed09355d056614058f87d142228edbba2d785876b9f&domain=69e8b2a109ec0a0c5d089232"
                strategy="beforeInteractive"
                referrerPolicy="origin"
            />
            <meta
                name="google-site-verification"
                content="yd8FUlg1CN-dzFjbGNdm7gVd2FbY6Tbs62AoyaKdROg"
            />
            <body
                className={cn(
                    saans.variable,
                    'text-base font-base text-text-primary font-(family-name:--font-aeonik) leading-base mt-[72px] antialiased',
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
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script
                    type="module"
                    src="https://otv.aweos.de/otv-modul-widget.js?api-widget-key=cw_55f4e802427c3728e8879898af5259b5a6396f3dff09b169279dc6e37beb3ebf&clinic-id=praxis-dr-limbourg"
                    data-clinic-id="praxis-dr-limbourg"
                    data-api-url="https://otv.aweos.de"
                    data-api-widget-key="cw_55f4e802427c3728e8879898af5259b5a6396f3dff09b169279dc6e37beb3ebf"
                    data-auto-init="true"
                    data-widget-target-selector=".openOtvWidgetBtn"
                />
            </body>
        </html>
    );
}
