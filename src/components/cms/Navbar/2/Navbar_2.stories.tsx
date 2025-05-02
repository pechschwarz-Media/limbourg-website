import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
import Navbar_2 from './Navbar_2';

const meta = {
    title: 'Navbar/2',
    component: Navbar_2,
    tags: ['autodocs'],
    args: {
        variant: 'glass',
        background: false,
    },
    argTypes: {
        variant: {
            description: 'Das Schema der Navbar',
            options: ['glass', 'light', 'dark'],
            control: { type: 'select' },
        },
        background: {
            description: 'Hintergrund der Navbar.',
            defaultValue: false,
        },
    },
    parameters: {
        layout: 'fullscreen',
    },
    render: (args) => {
        return (
            <div className="w-full h-screen">
                <Image
                    src="/placeholder.jpg"
                    width="1920"
                    height="1080"
                    alt=""
                    className="size-full object-cover"
                />
                <Navbar_2 {...args} />
            </div>
        );
    },
} satisfies Meta<typeof Navbar_2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
