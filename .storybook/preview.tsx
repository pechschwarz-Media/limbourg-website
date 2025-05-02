import type { Preview } from '@storybook/react';
import localFont from 'next/font/local';
import React from 'react';
import '../src/app/globals.css';
import { cn } from '../src/lib/utils';

const saans = localFont({
    src: [
        {
            path: '../public/fonts/Saans-TRIAL-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/Saans-TRIAL-LightItalic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../public/fonts/Saans-TRIAL-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Saans-TRIAL-RegularItalic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/Saans-TRIAL-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/Saans-TRIAL-MediumItalic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../public/fonts/Saans-TRIAL-SemiBold.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/Saans-TRIAL-SemiBoldItalic.woff2',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../public/fonts/Saans-TRIAL-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/Saans-TRIAL-BoldItalic.woff2',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-saans',
});

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        nextjs: {
            appDirectory: true,
        },
    },
    decorators: [
        (Story) => (
            <div
                className={cn(
                    saans.variable,
                    'text-base font-base text-text-primary font-(family-name:--font-saans) leading-base',
                )}>
                <Story />
            </div>
        ),
    ],
};

export default preview;
