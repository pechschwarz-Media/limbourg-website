import type { Meta, StoryObj } from '@storybook/react';
import Feature_Icons_2 from './Feature_Icons_2';

const meta = {
    title: 'Feature/Icons/2',
    component: Feature_Icons_2,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: '',
                headline: 'Flexible features to power your growth',
            },
            text: '<p>Online or on site, before or after, eat in or takeaway, the payment solutions for all types of venues and for all use cases.</p>',
            buttons: [],
        },
        tiles: [
            {
                title: 'Identifikationsdatenbank',
                list: [
                    {
                        text: 'Eine eigene Identifikationsdatenbank erstellen und von unserer Wallet-Lösung profitieren.',
                    },
                    {
                        text: 'Eine eigene Identifikationsdatenbank erstellen und von unserer Wallet-Lösung profitieren.',
                    },
                    {
                        text: 'Eine eigene Identifikationsdatenbank erstellen und von unserer Wallet-Lösung profitieren.',
                    },
                ],
            },
            {
                title: 'Identifikationsdatenbank',
                list: [
                    {
                        text: 'Eine eigene Identifikationsdatenbank erstellen und von unserer Wallet-Lösung profitieren.',
                    },
                    {
                        text: 'Eine eigene Identifikationsdatenbank erstellen und von unserer Wallet-Lösung profitieren.',
                    },
                    {
                        text: 'Eine eigene Identifikationsdatenbank erstellen und von unserer Wallet-Lösung profitieren.',
                    },
                ],
            },
            {
                title: 'Identifikationsdatenbank',
                list: [
                    {
                        text: 'Eine eigene Identifikationsdatenbank erstellen und von unserer Wallet-Lösung profitieren.',
                    },
                    {
                        text: 'Eine eigene Identifikationsdatenbank erstellen und von unserer Wallet-Lösung profitieren.',
                    },
                    {
                        text: 'Eine eigene Identifikationsdatenbank erstellen und von unserer Wallet-Lösung profitieren.',
                    },
                ],
            },
        ],
        grid: 3,
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    argTypes: {
        grid: {
            description: 'Das Grid der Icons',
            options: [3, 4],
            control: { type: 'select' },
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Feature_Icons_2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
