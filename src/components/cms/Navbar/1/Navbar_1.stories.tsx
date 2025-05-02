import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
import Navbar_1 from './Navbar_1';

const meta = {
    title: 'Navbar/1',
    component: Navbar_1,
    tags: ['autodocs'],
    args: {
        variant: 'glass',
    },
    argTypes: {
        variant: {
            description: 'Das Schema der Navbar',
            options: ['glass', 'light', 'dark'],
            control: { type: 'select' },
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
                <Navbar_1 {...args} />
            </div>
        );
    },
} satisfies Meta<typeof Navbar_1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
