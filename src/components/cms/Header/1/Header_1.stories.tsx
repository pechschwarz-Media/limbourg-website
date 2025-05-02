import type { Meta, StoryObj } from '@storybook/react';
import Header_1 from './Header_1';

const meta = {
    title: 'Header/1',
    component: Header_1,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: '',
                headline: 'Häufig gefragt',
            },
            text: '<p>Hier finden Sie blitzschnell Antworten auf häufig gestellte Fragen. Sie können sich jederzeit per E-Mail melden. </p>',
            buttons: [],
        },
        position: 'center',
        settings: {
            variant: 'light',
            padding: {
                top: 'medium',
                bottom: 'medium',
            },
        },
    },
    argTypes: {},
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Header_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
