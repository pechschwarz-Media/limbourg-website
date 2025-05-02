import type { Meta, StoryObj } from '@storybook/react';
import Contact_Form_1_Preview from './Contact_Form_1_Preview';

const meta = {
    title: 'Contact/Form/1',
    component: Contact_Form_1_Preview,
    tags: ['autodocs'],
    args: {
        textblock: {
            headline: {
                style: 'h2',
                tag: 'h2',
                tagline: '',
                headline: 'Contact our sales team',
            },
            text: '<p>Fill out the form and a member of our team will reach out to you to discuss our software offerings for firms.</p>',
            buttons: [
                {
                    button: {
                        variant: 'primary',
                        link: {
                            url: '#',
                            title: 'Jetzt anfragen',
                            target: '_self',
                        },
                    },
                },
            ],
        },
        form: 1,
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
} satisfies Meta<typeof Contact_Form_1_Preview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};
