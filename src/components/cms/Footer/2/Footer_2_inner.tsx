'use client';

import { IconArrowRight } from '@/components/icons/IconArrowRight';
import { Logo } from '@/components/static/Logo/Logo';
import { LogoInverted } from '@/components/static/LogoInverted/LogoInverted';
import { Button } from '@/components/ui/Button/Button';
import { FooterOptions, ImageType } from '@/lib/types';
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
            dark: 'bg-brand-black text-text-alternate',
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
            dark: 'border-none',
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
    footerinfo: FooterOptions;
    logos: {
        logolight: ImageType;
        logodark: ImageType;
    };
};

export default function Footer_2_inner({ variant, footerinfo, logos }: Footer1Props) {
    return (
        <footer className={cn(footerVariants({ variant }))}>
            <div className="container">
                <div className={cn(footerMainVariants({ variant }))}>
                    <div className="grid lg:grid-cols-3 gap-theme-3xl">
                        <div className="order-2 lg:order-1">
                            <address className="not-italic leading-body [&>p]:mb-theme-xl [&>p>a]:underline">
                                {parse(footerinfo?.leftside?.adress)}
                            </address>
                        </div>
                        <div className="order-1 lg:order-2">
                            <nav
                                role="navigation"
                                aria-label="Footer-Navigation">
                                <ul className="space-y-theme-2xl">
                                    {footerinfo?.menulist?.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item?.menuitem?.url}
                                                target={item?.menuitem?.target}
                                                className="text-h4 leading-tight font-headline relative group hover:pl-theme-4xl transition-all"
                                                role="menuitem">
                                                <IconArrowRight className="absolute left-0 top-1/2 opacity-0  -translate-x-theme-4xl -translate-y-1/2 group-hover:translate-x-0 group-hover:opacity-100 transition-all group-hover:delay-100" />
                                                {item?.menuitem?.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="space-y-theme-3xl order-3 flex flex-col justify-between">
                            <div className="space-y-theme-3xl">
                                <div className="leading-body">{parse(footerinfo?.rightside?.text)}</div>
                                <div className="flex gap-theme-lg">
                                    <Button
                                        as="link"
                                        variant="secondary"
                                        link={footerinfo?.rightside?.button}
                                        className="hover:border-border-alternate">
                                        {footerinfo?.rightside?.button?.title}
                                    </Button>
                                </div>
                            </div>

                            <div className="flex justify-start items-center gap-x-theme-lg">
                                {footerinfo?.rightside?.sociallinks?.length > 0 &&
                                    footerinfo?.rightside?.sociallinks.map((item, index) => (
                                        <div key={index}>
                                            <Link
                                                href={item?.link?.url}
                                                target={item?.link?.target}
                                                className="flex items-center gap-x-theme-lg rounded-xl border border-border-tertiary p-3"
                                                aria-label={item?.link?.title}>
                                                <Image
                                                    src={item?.icon?.url}
                                                    alt={item?.icon?.alt}
                                                    width={item?.icon?.width}
                                                    height={item?.icon?.height}
                                                    className="size-auto"
                                                />
                                            </Link>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-theme-3xl sm:pt-theme-6xl flex flex-col lg:flex-row justify-between items-start gap-4 lg:items-center">
                    <Image
                        src={logos?.logolight?.url}
                        alt={logos?.logolight?.alt}
                        width={logos?.logolight?.width}
                        height={logos?.logolight?.height}
                    />
                    <div className="flex flex-row items-start lg:items-center gap-x-theme-md">
                        {footerinfo?.legallinks?.length > 0 &&
                            footerinfo?.legallinks.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item?.link?.url}
                                    target={item?.link?.target}
                                    className="underline">
                                    {item?.link?.title}
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
