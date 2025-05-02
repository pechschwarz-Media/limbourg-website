import type { Meta, StoryObj } from '@storybook/react';
import Submenu_1 from './Submenu_1';

const meta = {
    title: 'Submenu/1',
    component: Submenu_1,
    tags: ['autodocs'],
    args: {
        visible: true,
        close: () => {},
        preview: true,
        variant: 'glass',
    },
    argTypes: {
        visible: {
            description: 'Steuert die Sichtbarkeit der Komponente.',
        },
        close: {
            description: 'Die Funktion um das Submenü zu schließen.',
        },
        preview: {
            description: 'Ist nur für Storybook relevant.',
        },
        variant: {
            description: 'Das Schema der Navbar',
            options: ['glass', 'light', 'dark'],
            control: { type: 'select' },
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Submenu_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
