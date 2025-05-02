import type { Meta, StoryObj } from '@storybook/react';
import Cta_HalfHorizontal_1 from './Cta_HalfHorizontal_1';

const meta = {
    title: 'Cta/HalfHorizontal/1',
    component: Cta_HalfHorizontal_1,
    tags: ['autodocs'],
    args: {
        headline: {
            tag: 'h3',
            style: 'h3',
            tagline: '',
            headline: 'Entdecke zeitgemäßes Management',
        },
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>',
        list: [
            {
                text: 'Unternehmenssuche & Kostenlose Auskunft in 24 Std',
            },
            {
                text: 'Unternehmenssuche & Kostenlose Auskunft in 24 Std',
            },
        ],
        buttons: [
            {
                button: {
                    variant: 'primary',
                    link: {
                        title: 'Simplify your Finances',
                        target: '_self',
                        url: '#',
                    },
                },
            },
            {
                button: {
                    variant: 'light',
                    link: {
                        title: 'Simplify your Finances',
                        target: '_self',
                        url: '#',
                    },
                },
            },
        ],
        media: {
            media: {
                url: 'placeholder.jpg',
                type: 'image',
                alt: '',
                width: 1920,
                height: 1080,
            },
            media_mobile: false,
        },
        verticalAlign: 'top',
        textAlign: 'left',
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    argTypes: {
        verticalAlign: {
            description: 'Die vertikale Ausrichtung des Inhalts',
            options: ['top', 'center', 'bottom'],
            control: { type: 'select' },
        },
        textAlign: {
            description: 'Die Ausrichtung des Texts',
            options: ['left', 'center'],
            control: { type: 'select' },
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Cta_HalfHorizontal_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
