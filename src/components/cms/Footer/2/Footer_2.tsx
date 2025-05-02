'use client';

import { IconArrowRight } from '@/components/icons/IconArrowRight';
import { Logo } from '@/components/static/Logo/Logo';
import { LogoInverted } from '@/components/static/LogoInverted/LogoInverted';
import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const footerVariants = cva('py-theme-6xl', {
    variants: {
        variant: {
            light: 'bg-neutral-25',
            dark: 'bg-neutral-950 text-text-alternate',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const footerTopVariants = cva('border-b pb-theme-3xl sm:pb-theme-6xl', {
    variants: {
        variant: {
            light: 'border-b-neutral-300',
            dark: 'border-b-neutral-600',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const footerMainVariants = cva('lg:pb-theme-6xl lg:border-b', {
    variants: {
        variant: {
            light: 'lg:border-b-neutral-300',
            dark: 'lg:border-b-neutral-600',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const footerLegalNavVariants = cva(
    'flex flex-col sm:flex-row sm:items-center gap-y-theme-lg sm:gap-y-0 sm:gap-x-theme-3xl [&>li]:sm:pr-theme-3xl sm:divide-x',
    {
        variants: {
            variant: {
                light: 'sm:divide-neutral-300',
                dark: 'sm:divide-neutral-25',
            },
        },
        defaultVariants: {
            variant: 'light',
        },
    },
);

const footerLegalLinkVariants = cva('hover:text-brand-secondary-200 transition-all', {
    variants: {
        variant: {
            light: 'text-text-secondary',
            dark: '',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const footerTextVariants = cva('text-tiny leading-body', {
    variants: {
        variant: {
            light: 'text-text-secondary',
            dark: 'text-text-tertiary',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

const footerCopyrightVariants = cva(
    'flex flex-col gap-y-theme-lg sm:gap-y-0 sm:flex-row sm:items-center gap-x-theme-3xl text-tiny',
    {
        variants: {
            variant: {
                light: 'text-text-secondary',
                dark: 'text-text-tertiary',
            },
        },
        defaultVariants: {
            variant: 'light',
        },
    },
);

const footerLangmenuVariants = cva(
    'bg-neutral-800 rounded-xs absolute top-full left-0 min-w-2xs p-theme-sm mt-theme-lg md:-ml-[14px] max-h-44 overflow-auto',
    {
        variants: {
            variant: {
                light: 'bg-neutral-100',
                dark: 'bg-neutral-800',
            },
        },
        defaultVariants: {
            variant: 'light',
        },
    },
);

const footerLangLinkVariants = cva('flex items-center gap-x-theme-lg p-theme-md rounded-sm transition-all', {
    variants: {
        variant: {
            light: 'hover:bg-neutral-200',
            dark: 'hover:bg-neutral-950',
        },
    },
    defaultVariants: {
        variant: 'light',
    },
});

type Footer1Props = {
    variant: VariantProps<typeof footerVariants>['variant'];
};

export default function Footer_1({ variant }: Footer1Props) {
    const [openLanguageMenu, setOpenLanguageMenu] = useState(false);

    return (
        <footer className={cn(footerVariants({ variant }))}>
            <div className="container">
                <div className={cn(footerMainVariants({ variant }))}>
                    <div className="grid lg:grid-cols-3 gap-theme-3xl">
                        <div className="order-2 lg:order-1">
                            <address className="not-italic leading-body">
                                {parse('pechschwarz<br />Wuppertal<br />Max-Planck-Str. 19<br />42277 Wuppertal')}
                            </address>
                        </div>
                        <div className="order-1 lg:order-2">
                            <nav
                                role="navigation"
                                aria-label="Footer-Navigation">
                                <ul className="space-y-theme-2xl">
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-h4 leading-tight font-headline relative group hover:text-brand-secondary-400 hover:pl-theme-4xl transition-all"
                                            role="menuitem">
                                            <IconArrowRight className="absolute left-0 top-1/2 opacity-0 text-brand-secondary-400 -translate-x-theme-4xl -translate-y-1/2 group-hover:translate-x-0 group-hover:opacity-100 transition-all group-hover:delay-100" />
                                            Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-h4 leading-tight font-headline relative group hover:text-brand-secondary-400 hover:pl-theme-4xl transition-all"
                                            role="menuitem">
                                            <IconArrowRight className="absolute left-0 top-1/2 opacity-0 text-brand-secondary-400 -translate-x-theme-4xl -translate-y-1/2 group-hover:translate-x-0 group-hover:opacity-100 transition-all group-hover:delay-100" />
                                            Solutions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-h4 leading-tight font-headline relative group hover:text-brand-secondary-400 hover:pl-theme-4xl transition-all"
                                            role="menuitem">
                                            <IconArrowRight className="absolute left-0 top-1/2 opacity-0 text-brand-secondary-400 -translate-x-theme-4xl -translate-y-1/2 group-hover:translate-x-0 group-hover:opacity-100 transition-all group-hover:delay-100" />
                                            Customers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-h4 leading-tight font-headline relative group hover:text-brand-secondary-400 hover:pl-theme-4xl transition-all"
                                            role="menuitem">
                                            <IconArrowRight className="absolute left-0 top-1/2 opacity-0 text-brand-secondary-400 -translate-x-theme-4xl -translate-y-1/2 group-hover:translate-x-0 group-hover:opacity-100 transition-all group-hover:delay-100" />
                                            Ressources
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="text-h4 leading-tight font-headline relative group hover:text-brand-secondary-400 hover:pl-theme-4xl transition-all"
                                            role="menuitem">
                                            <IconArrowRight className="absolute left-0 top-1/2 opacity-0 text-brand-secondary-400 -translate-x-theme-4xl -translate-y-1/2 group-hover:translate-x-0 group-hover:opacity-100 transition-all group-hover:delay-100" />
                                            Pricing
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="space-y-theme-3xl order-3">
                            <div className="leading-body">
                                {parse('Finanzlösungen, die mit dir wachsen –<br />smart, flexibel, grenzenlos.')}
                            </div>
                            <div className="flex gap-theme-lg">
                                <Button
                                    as="link"
                                    variant="primary"
                                    link={{ url: '', title: '', target: '_self' }}>
                                    See a Demo
                                </Button>
                                <Button
                                    as="link"
                                    variant="light"
                                    link={{ url: '', title: '', target: '_self' }}>
                                    See a Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-theme-3xl sm:pt-theme-6xl">
                    <div className="grid md:grid-cols-12 gap-theme-3xl">
                        <div className="order-2 md:order-1 md:col-span-7 space-y-theme-3xl lg:space-y-theme-6xl">
                            <Link
                                href="/"
                                className="inline-block">
                                {variant === 'dark' && <Logo className="h-8 w-auto" />}
                                {variant === 'light' && <LogoInverted className="h-8 w-auto" />}
                            </Link>
                            <nav
                                role="navigation"
                                aria-label="Footernavigation">
                                <ul className={cn(footerLegalNavVariants({ variant }))}>
                                    <li className="last:pr-0">
                                        <Link
                                            href="#"
                                            role="menuitem"
                                            className={cn(footerLegalLinkVariants({ variant }))}>
                                            Impressum
                                        </Link>
                                    </li>
                                    <li className="last:pr-0">
                                        <Link
                                            href="#"
                                            role="menuitem"
                                            className={cn(footerLegalLinkVariants({ variant }))}>
                                            Datenschutz
                                        </Link>
                                    </li>
                                    <li className="last:pr-0">
                                        <Link
                                            href="#"
                                            role="menuitem"
                                            className={cn(footerLegalLinkVariants({ variant }))}>
                                            AGB
                                        </Link>
                                    </li>
                                    <li className="last:pr-0">
                                        <Link
                                            href="#"
                                            role="menuitem"
                                            className={cn(footerLegalLinkVariants({ variant }))}>
                                            Cookies
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav
                                role="navigation"
                                aria-label="Footernavigation">
                                <ul className="flex items-center gap-x-theme-3xl">
                                    <li>
                                        <Link
                                            href="#"
                                            aria-label="Facebook">
                                            <svg
                                                width="20"
                                                height="21"
                                                viewBox="0 0 20 21"
                                                fill="none"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20 10.3038C20 4.74719 15.5229 0.242676 10 0.242676C4.47715 0.242676 0 4.74719 0 10.3038C0 15.3255 3.65684 19.4879 8.4375 20.2427V13.2121H5.89844V10.3038H8.4375V8.0872C8.4375 5.56564 9.9305 4.1728 12.2146 4.1728C13.3088 4.1728 14.4531 4.36931 14.4531 4.36931V6.84529H13.1922C11.95 6.84529 11.5625 7.6209 11.5625 8.41658V10.3038H14.3359L13.8926 13.2121H11.5625V20.2427C16.3432 19.4879 20 15.3257 20 10.3038Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            aria-label="Instagram">
                                            <svg
                                                width="18"
                                                height="19"
                                                viewBox="0 0 18 19"
                                                fill="none"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M13 0.242676H5C2.23858 0.242676 0 2.48126 0 5.24268V13.2427C0 16.0041 2.23858 18.2427 5 18.2427H13C15.7614 18.2427 18 16.0041 18 13.2427V5.24268C18 2.48126 15.7614 0.242676 13 0.242676ZM16.25 13.2427C16.2445 15.0353 14.7926 16.4872 13 16.4927H5C3.20735 16.4872 1.75549 15.0353 1.75 13.2427V5.24268C1.75549 3.45003 3.20735 1.99817 5 1.99268H13C14.7926 1.99817 16.2445 3.45003 16.25 5.24268V13.2427ZM13.75 5.49268C14.3023 5.49268 14.75 5.04496 14.75 4.49268C14.75 3.9404 14.3023 3.49268 13.75 3.49268C13.1977 3.49268 12.75 3.9404 12.75 4.49268C12.75 5.04496 13.1977 5.49268 13.75 5.49268ZM9 4.74268C6.51472 4.74268 4.5 6.7574 4.5 9.24268C4.5 11.728 6.51472 13.7427 9 13.7427C11.4853 13.7427 13.5 11.728 13.5 9.24268C13.5027 8.04838 13.0294 6.90225 12.1849 6.05776C11.3404 5.21327 10.1943 4.74002 9 4.74268ZM6.25 9.24268C6.25 10.7615 7.4812 11.9927 9 11.9927C10.5188 11.9927 11.75 10.7615 11.75 9.24268C11.75 7.72388 10.5188 6.49268 9 6.49268C7.4812 6.49268 6.25 7.72388 6.25 9.24268Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            aria-label="X">
                                            <svg
                                                width="18"
                                                height="17"
                                                viewBox="0 0 18 17"
                                                fill="none"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.1761 0.242676H16.9362L10.9061 7.02008L18 16.2427H12.4456L8.0951 10.6493L3.11723 16.2427H0.35544L6.80517 8.99348L0 0.242676H5.69545L9.6279 5.3553L14.1761 0.242676ZM13.2073 14.6181H14.7368L4.86441 1.78196H3.2232L13.2073 14.6181Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            aria-label="LinkedIn">
                                            <svg
                                                width="18"
                                                height="19"
                                                viewBox="0 0 18 19"
                                                fill="none"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M1.5 0.242676C0.67157 0.242676 0 0.914246 0 1.74268V16.7427C0 17.5711 0.67157 18.2427 1.5 18.2427H16.5C17.3284 18.2427 18 17.5711 18 16.7427V1.74268C18 0.914246 17.3284 0.242676 16.5 0.242676H1.5ZM5.52076 4.2454C5.52639 5.20165 4.81061 5.79087 3.96123 5.78665C3.16107 5.78243 2.46357 5.1454 2.46779 4.24681C2.47201 3.40165 3.13998 2.72243 4.00764 2.74212C4.88795 2.76181 5.52639 3.40728 5.52076 4.2454ZM9.2797 7.00444H6.75971H6.7583V15.5643H9.4217V15.3646C9.4217 14.9847 9.4214 14.6047 9.4211 14.2246C9.4203 13.2108 9.4194 12.1959 9.4246 11.1824C9.426 10.9363 9.4372 10.6804 9.5005 10.4455C9.7381 9.56798 10.5271 9.00128 11.4074 9.14058C11.9727 9.22908 12.3467 9.55678 12.5042 10.0898C12.6013 10.423 12.6449 10.7816 12.6491 11.129C12.6605 12.1766 12.6589 13.2242 12.6573 14.2719C12.6567 14.6417 12.6561 15.0117 12.6561 15.3815V15.5629H15.328V15.3576C15.328 14.9056 15.3278 14.4537 15.3275 14.0018C15.327 12.8723 15.3264 11.7428 15.3294 10.6129C15.3308 10.1024 15.276 9.59898 15.1508 9.10538C14.9638 8.37128 14.5771 7.76378 13.9485 7.32508C13.5027 7.01287 13.0133 6.81178 12.4663 6.78928C12.404 6.78669 12.3412 6.7833 12.2781 6.77989C11.9984 6.76477 11.7141 6.74941 11.4467 6.80334C10.6817 6.95662 10.0096 7.30678 9.5019 7.92408C9.4429 7.99488 9.3852 8.06678 9.2991 8.17408L9.2797 8.19838V7.00444ZM2.68164 15.5671H5.33242V7.01001H2.68164V15.5671Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            aria-label="YouTube">
                                            <svg
                                                width="21"
                                                height="15"
                                                viewBox="0 0 21 15"
                                                fill="none"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20.5914 2.20301C20.4775 1.78041 20.2549 1.39501 19.9457 1.08518C19.6366 0.775338 19.2517 0.551868 18.8294 0.437007C17.2634 0.00700739 10.9984 7.59651e-06 10.9984 7.59651e-06C10.9984 7.59651e-06 4.73438 -0.00699261 3.16738 0.404007C2.7453 0.524154 2.3612 0.750785 2.05194 1.06214C1.74269 1.3735 1.51866 1.75913 1.40138 2.18201C0.988377 3.74801 0.984376 6.99601 0.984376 6.99601C0.984376 6.99601 0.980376 10.26 1.39038 11.81C1.62038 12.667 2.29538 13.344 3.15338 13.575C4.73538 14.005 10.9834 14.012 10.9834 14.012C10.9834 14.012 17.2484 14.019 18.8144 13.609C19.2369 13.4943 19.6221 13.2714 19.932 12.9622C20.2419 12.653 20.4658 12.2682 20.5814 11.846C20.9954 10.281 20.9984 7.03401 20.9984 7.03401C20.9984 7.03401 21.0184 3.76901 20.5914 2.20301ZM8.99438 10.005L8.99938 4.00501L14.2064 7.01001L8.99438 10.005Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className={cn(footerTextVariants({ variant }))}>
                                The Visa Corporate Card and Visa Commercial Card are issued by FDIC member banks
                                pursuant to a license from Visa USA Inc. Visa is a registered trademark of Visa
                                International Service Association. All other trademarks and service marks belong to
                                their respective owners.
                            </div>
                            <div className={cn(footerCopyrightVariants({ variant }))}>
                                <div>© 2018 - 2025 Company Name</div>
                                <Link
                                    href="https://pechschwarzmedia.de"
                                    aria-label="Website von pechschwarz"
                                    target="_blank">
                                    Created with love by pechschwarz®
                                </Link>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 md:col-span-4 lg:col-span-3 lg:col-start-10 flex flex-col justify-between gap-y-theme-3xl lg:gap-y-theme-6xl">
                            <div>
                                <div className="font-highlight mb-theme-xl">Language</div>
                                <div className="relative">
                                    <button
                                        className="flex items-center gap-x-theme-lg cursor-pointer"
                                        aria-label="Sprachmenü öffnen"
                                        aria-expanded={openLanguageMenu}
                                        onClick={() => {
                                            setOpenLanguageMenu(!openLanguageMenu);
                                        }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-6 rounded-full"
                                            viewBox="0 0 512 512"
                                            fill="none">
                                            <path
                                                fill="#D80027"
                                                d="M0 136h512v240H0z"
                                            />
                                            <path
                                                fill="#FFDA44"
                                                d="M0 344h512v168H0z"
                                            />
                                            <path
                                                fill="#333"
                                                d="M0 0h512v168H0z"
                                            />
                                        </svg>
                                        Deutsch
                                    </button>
                                    {openLanguageMenu && (
                                        <nav className={cn(footerLangmenuVariants({ variant }))}>
                                            <ul>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className={cn(footerLangLinkVariants({ variant }))}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="size-6 rounded-full"
                                                            viewBox="0 0 512 512"
                                                            fill="none">
                                                            <path
                                                                fill="#0052B4"
                                                                d="M0 0h512v512H0z"
                                                            />
                                                            <path
                                                                fill="#EEE"
                                                                d="M464 512h48v-48L304 256 512 48V0h-48L256 208 48 0H0v48l208 208L0 464v48h48l208-208z"
                                                            />
                                                            <path
                                                                fill="#EEE"
                                                                d="M512 320V192H320V0H192v192H0v128h192v192h128V320z"
                                                            />
                                                            <path
                                                                fill="#D80027"
                                                                d="M512 288v-64H288V0h-64v224H0v64h224v224h64V288z"
                                                            />
                                                            <path
                                                                fill="#D80027"
                                                                d="M0 32V0l192 192h-32zm512 448v32L320 320h32zM32 512H0l192-192v32zM480 0h32L320 192v-32z"
                                                            />
                                                        </svg>
                                                        Englisch
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="#"
                                                        className={cn(footerLangLinkVariants({ variant }))}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="size-6 rounded-full"
                                                            viewBox="0 0 512 512"
                                                            fill="none">
                                                            <path
                                                                fill="#EEE"
                                                                d="M376 0v512H136V0z"
                                                            />
                                                            <path
                                                                fill="#026"
                                                                d="M168 0v512H0V0z"
                                                            />
                                                            <path
                                                                fill="#D80027"
                                                                d="M512 0v512H344V0z"
                                                            />
                                                        </svg>
                                                        Französisch
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-x-theme-xl">
                                <div className="md:flex-1">
                                    <Image
                                        src="/zertifikat-1.png"
                                        alt=""
                                        width="200"
                                        height="200"
                                        className="md:w-full h-auto w-20"
                                    />
                                </div>
                                <div className="md:flex-1">
                                    <Image
                                        src="/zertifikat-2.png"
                                        alt=""
                                        width="200"
                                        height="200"
                                        className="md:w-full h-auto w-20"
                                    />
                                </div>
                                <div className="md:flex-1">
                                    <Image
                                        src="/zertifikat-3.png"
                                        alt=""
                                        width="200"
                                        height="200"
                                        className="md:w-full h-auto w-20"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
